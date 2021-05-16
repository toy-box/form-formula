// Generated from FormulaParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { DecimalLiteralExpressionContext } from './FormulaParser';
import { StringLiteralExpressionContext } from './FormulaParser';
import { BooleanLiteralExpressionContext } from './FormulaParser';
import { VariableExpressionContext } from './FormulaParser';
import { MultiplicativeExpressionContext } from './FormulaParser';
import { AdditiveExpressionContext } from './FormulaParser';
import { ParenthesizedExpressionContext } from './FormulaParser';
import { FunctionExpressionContext } from './FormulaParser';
import { StatContext } from './FormulaParser';
import { ExpressionStatementContext } from './FormulaParser';
import { ExpressionSequenceContext } from './FormulaParser';
import { ArgumentsContext } from './FormulaParser';
import { ArgumentListContext } from './FormulaParser';
import { ArgumentContext } from './FormulaParser';
import { VariableContext } from './FormulaParser';
import { FunctionContext } from './FormulaParser';
import { SingleExpressionContext } from './FormulaParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `FormulaParser`.
 */
export interface FormulaParserListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `DecimalLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterDecimalLiteralExpression?: (
    ctx: DecimalLiteralExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `DecimalLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitDecimalLiteralExpression?: (ctx: DecimalLiteralExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `StringLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterStringLiteralExpression?: (ctx: StringLiteralExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `StringLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitStringLiteralExpression?: (ctx: StringLiteralExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `BooleanLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterBooleanLiteralExpression?: (
    ctx: BooleanLiteralExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `BooleanLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitBooleanLiteralExpression?: (ctx: BooleanLiteralExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `VariableExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterVariableExpression?: (ctx: VariableExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `VariableExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitVariableExpression?: (ctx: VariableExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `MultiplicativeExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpression?: (
    ctx: MultiplicativeExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `MultiplicativeExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `AdditiveExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `AdditiveExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `ParenthesizedExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `ParenthesizedExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `FunctionExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `FunctionExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.stat`.
   * @param ctx the parse tree
   */
  enterStat?: (ctx: StatContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.stat`.
   * @param ctx the parse tree
   */
  exitStat?: (ctx: StatContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.expressionStatement`.
   * @param ctx the parse tree
   */
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.expressionStatement`.
   * @param ctx the parse tree
   */
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.expressionSequence`.
   * @param ctx the parse tree
   */
  enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.expressionSequence`.
   * @param ctx the parse tree
   */
  exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.arguments`.
   * @param ctx the parse tree
   */
  enterArguments?: (ctx: ArgumentsContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.arguments`.
   * @param ctx the parse tree
   */
  exitArguments?: (ctx: ArgumentsContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.argumentList`.
   * @param ctx the parse tree
   */
  enterArgumentList?: (ctx: ArgumentListContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.argumentList`.
   * @param ctx the parse tree
   */
  exitArgumentList?: (ctx: ArgumentListContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.argument`.
   * @param ctx the parse tree
   */
  enterArgument?: (ctx: ArgumentContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.argument`.
   * @param ctx the parse tree
   */
  exitArgument?: (ctx: ArgumentContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.variable`.
   * @param ctx the parse tree
   */
  enterVariable?: (ctx: VariableContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.variable`.
   * @param ctx the parse tree
   */
  exitVariable?: (ctx: VariableContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.function`.
   * @param ctx the parse tree
   */
  enterFunction?: (ctx: FunctionContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.function`.
   * @param ctx the parse tree
   */
  exitFunction?: (ctx: FunctionContext) => void;

  /**
   * Enter a parse tree produced by `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterSingleExpression?: (ctx: SingleExpressionContext) => void;
  /**
   * Exit a parse tree produced by `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitSingleExpression?: (ctx: SingleExpressionContext) => void;
}
