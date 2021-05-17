import React, { FC, useCallback } from 'react';
import { useField, useFormEffects } from '@formily/react';
import { onFormValuesChange } from '@formily/core';
import { instOf } from '@formily/shared';
import { Field } from '@formily/core/esm/models';
import {
  CharStreams,
  CommonTokenStream,
  FormulaLexer,
  FormulaParser,
  FormulaParserListener,
  FormulaParserListenerImpl,
  ParseTreeWalker,
} from '../formula';

export const FormulaItem: FC<{
  defaultMode?: string;
  formula?: string;
  [key: string]: any;
}> = ({ field: formField, defaultMode, formula, children, ...props }) => {
  const field = useField<Field>();
  const formulaExec = useCallback(
    (formula: string) => {
      const chars = CharStreams.fromString(formula);
      const lexer = new FormulaLexer(chars);
      const tokens = new CommonTokenStream(lexer);
      const parser = new FormulaParser(tokens);
      parser.buildParseTree = true;
      const tree = parser.stat();
      const listener: FormulaParserListener = new FormulaParserListenerImpl(
        () => 1,
      );
      ParseTreeWalker.DEFAULT.walk(listener, tree);
      return listener.getResult();
    },
    [field, formField],
  );

  useFormEffects(() => {
    // 公式计算注册
    if (defaultMode === 'formula' && formula) {
      onFormValuesChange(() => {
        if (instOf(field, Field)) {
          try {
            const formulaResult = formulaExec(formula);
            if (formulaResult.success && field.value !== formulaResult.result) {
              field.setValue(formulaResult.result);
            }
          } catch (err) {
            console.warn('err', err);
          }
        }
      });
    }
  });

  const renderItem = useCallback(() => {
    const child = React.Children.only(children) as
      | React.ReactElement<any>
      | undefined;
    return child && React.cloneElement(child, props);
  }, [children, props]);

  return <React.Fragment>{renderItem()}</React.Fragment>;
};

export default FormulaItem;
