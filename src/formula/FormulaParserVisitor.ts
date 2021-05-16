// Generated from FormulaParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FormulaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FormulaParserVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `DecimalLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDecimalLiteralExpression?: (
    ctx: DecimalLiteralExpressionContext,
  ) => Result;

  /**
   * Visit a parse tree produced by the `StringLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStringLiteralExpression?: (
    ctx: StringLiteralExpressionContext,
  ) => Result;

  /**
   * Visit a parse tree produced by the `BooleanLiteralExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBooleanLiteralExpression?: (
    ctx: BooleanLiteralExpressionContext,
  ) => Result;

  /**
   * Visit a parse tree produced by the `VariableExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableExpression?: (ctx: VariableExpressionContext) => Result;

  /**
   * Visit a parse tree produced by the `MultiplicativeExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpression?: (
    ctx: MultiplicativeExpressionContext,
  ) => Result;

  /**
   * Visit a parse tree produced by the `AdditiveExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

  /**
   * Visit a parse tree produced by the `ParenthesizedExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParenthesizedExpression?: (
    ctx: ParenthesizedExpressionContext,
  ) => Result;

  /**
   * Visit a parse tree produced by the `FunctionExpression`
   * labeled alternative in `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.stat`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStat?: (ctx: StatContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.expressionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.expressionSequence`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionSequence?: (ctx: ExpressionSequenceContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.arguments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArguments?: (ctx: ArgumentsContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.argumentList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgumentList?: (ctx: ArgumentListContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.argument`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgument?: (ctx: ArgumentContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.variable`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariable?: (ctx: VariableContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction?: (ctx: FunctionContext) => Result;

  /**
   * Visit a parse tree produced by `FormulaParser.singleExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSingleExpression?: (ctx: SingleExpressionContext) => Result;
}
