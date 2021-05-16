import {
  AdditiveExpressionContext,
  ArgumentContext,
  ArgumentListContext,
  ArgumentsContext,
  BooleanLiteralExpressionContext,
  DecimalLiteralExpressionContext,
  ExpressionSequenceContext,
  ExpressionStatementContext,
  FunctionContext,
  FunctionExpressionContext,
  MultiplicativeExpressionContext,
  ParenthesizedExpressionContext,
  SingleExpressionContext,
  StatContext,
  StringLiteralExpressionContext,
  VariableExpressionContext,
} from './FormulaParser';
import { FormulaParserListener } from './FormulaParserListener';

export class FormulaParserListenerImpl implements FormulaParserListener {
  private parserMap = new WeakMap();

  exitBooleanLiteralExpression(ctx: BooleanLiteralExpressionContext) {
    this.parserMap.set(
      ctx,
      ctx.BooleanLiteral().text.toUpperCase() === 'TRUE' ? true : false,
    );
  }

  exitDecimalLiteralExpression(ctx: DecimalLiteralExpressionContext) {
    this.parserMap.set(ctx, Number.parseFloat(ctx.DecimalLiteral().text));
  }

  exitStringLiteralExpression(ctx: StringLiteralExpressionContext) {
    this.parserMap.set(ctx, ctx.StringLiteral().text);
  }

  exitVariableExpression(ctx: VariableExpressionContext) {
    this.parserMap.set(ctx, 1000);
  }

  exitFunction(ctx: FunctionContext) {
    const args = this.parserMap.get(ctx.getChild(1)) as number[];
    console.log('func', ctx.childCount, args);
    if (ctx.getChild(0).text.toUpperCase() === 'SUM') {
      const result = args.reduce((prev, current) => prev + current, 0);
      console.log('SUM =', args, result);
      this.parserMap.set(ctx, result);
    }
  }

  exitFunctionExpression(ctx: FunctionExpressionContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }

  exitArguments(ctx: ArgumentsContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(1)));
  }

  exitArgumentList(ctx: ArgumentListContext) {
    const args: any[] = [];
    for (let i = 0; i < ctx.childCount; i += 1) {
      if (i % 2 === 0) {
        args.push(this.parserMap.get(ctx.getChild(i)));
      }
    }
    this.parserMap.set(ctx, args);
  }

  exitArgument(ctx: ArgumentContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }

  exitAdditiveExpression(ctx: AdditiveExpressionContext) {
    const op = ctx.getChild(1).text;
    const left = this.parserMap.get(ctx.getChild(0));
    const right = this.parserMap.get(ctx.getChild(2));
    this.parserMap.set(ctx, op === '+' ? left + right : left - right);
  }

  exitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
    const op = ctx.getChild(1).text;
    const left = this.parserMap.get(ctx.getChild(0));
    const right = this.parserMap.get(ctx.getChild(2));
    this.parserMap.set(ctx, op === '*' ? left * right : left / right);
  }

  exitParenthesizedExpression(ctx: ParenthesizedExpressionContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(1)));
  }

  exitStat(ctx: StatContext) {
    console.log('StatContext', this.parserMap.get(ctx.getChild(0)));
  }

  exitExpressionStatement(ctx: ExpressionStatementContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }

  exitExpressionSequence(ctx: ExpressionSequenceContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }

  exitSingleExpression(ctx: SingleExpressionContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }
}
