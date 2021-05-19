import {
  CharStreams,
  CommonTokenStream,
  FormulaLexer,
  FormulaParser,
  FormulaParserListener,
  FormulaParserListenerImpl,
  ParseTreeWalker,
} from './formula';

export function formulaParse(
  formula: string,
  getFieldValue: (pattern: string) => any,
) {
  const chars = CharStreams.fromString(formula);
  const lexer = new FormulaLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new FormulaParser(tokens);
  parser.buildParseTree = true;
  const tree = parser.stat();
  const listener: FormulaParserListener = new FormulaParserListenerImpl(
    getFieldValue,
  );
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return listener.getResult();
}
