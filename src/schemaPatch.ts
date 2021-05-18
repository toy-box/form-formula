import { Field } from '@formily/core/esm/models/Field';
import { isArrayField } from '@formily/core';
import { isArr } from '@formily/shared';
import {
  CharStreams,
  CommonTokenStream,
  FormulaLexer,
  FormulaParser,
  FormulaParserListener,
  FormulaParserListenerImpl,
  ParseTreeWalker,
} from './formula';

export function reactionsPatch(reactions: any | any[]) {
  if (isArr(reactions)) {
    return reactions.map((reaction) => reactionPath(reaction));
  }
  return reactionPath(reactions);
}

export function reactionPath(reaction: any) {
  if (reaction.type === 'formula') {
    return makeFormulaRunner(reaction.formula);
  }
  return reaction;
}

export function makeFormulaRunner(formula: string) {
  return (field: Field) => {
    const chars = CharStreams.fromString(formula);
    const lexer = new FormulaLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new FormulaParser(tokens);
    parser.buildParseTree = true;
    const tree = parser.stat();
    const listener: FormulaParserListener = new FormulaParserListenerImpl(
      (pattern: string) => {
        const { form } = field;
        const path = pattern.substr(1, pattern.length - 2);
        if (isArrayField(field.parent) && isBrother(field, path)) {
          return form.getValuesIn(
            `${getParentPath(path)}.${getIndex(field)}.${getFieldKey(path)}}]`,
          );
        }
        const query = form.query(path);
        const parentField = query.take().parent;
        if (isArrayField(parentField)) {
          return form
            .getValuesIn(parentField.path)
            .map((item: Record<string, any>) => item[getFieldKey(path)]);
        }
        return form.getValuesIn(path.substr(1, path.length - 2));
      },
    );
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    return listener.getResult();
  };
}

export function getParentPath(path: string) {
  const pathArr = path.split('.');
  pathArr.splice(pathArr.length - 1, 1);
  return pathArr.join('.');
}

export function isBrother(field: Field, path: string) {
  return field.parent.path.toString() === getParentPath(path);
}

export function getIndex(field: Field) {
  const pathArr = field.path.toArr();
  return pathArr[pathArr.length - 2];
}

export function getFieldKey(field: Field | string) {
  if (typeof field == 'string') {
    const pathArr = field.split('.');
    return pathArr[pathArr.length - 1];
  }
  const pathArr = field.path.toArr();
  return pathArr[pathArr.length - 1];
}
