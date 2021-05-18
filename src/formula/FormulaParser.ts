// Generated from ./src/formula/FormulaParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion"
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { FormulaParserListener } from './FormulaParserListener';

export class FormulaParser extends Parser {
  public static readonly OpenParen = 1;
  public static readonly CloseParen = 2;
  public static readonly OpenBrace = 3;
  public static readonly CloseBrace = 4;
  public static readonly Comma = 5;
  public static readonly Plus = 6;
  public static readonly Minus = 7;
  public static readonly Multiply = 8;
  public static readonly Divide = 9;
  public static readonly BooleanLiteral = 10;
  public static readonly FieldLiteral = 11;
  public static readonly FunctionLiteral = 12;
  public static readonly DecimalLiteral = 13;
  public static readonly StringLiteral = 14;
  public static readonly WhiteSpaces = 15;
  public static readonly UnexpectedCharacter = 16;
  public static readonly RULE_stat = 0;
  public static readonly RULE_arguments = 1;
  public static readonly RULE_argumentList = 2;
  public static readonly RULE_argument = 3;
  public static readonly RULE_variable = 4;
  public static readonly RULE_function = 5;
  public static readonly RULE_singleExpression = 6;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'stat',
    'arguments',
    'argumentList',
    'argument',
    'variable',
    'function',
    'singleExpression',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'('",
    "')'",
    "'{'",
    "'}'",
    "','",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'OpenParen',
    'CloseParen',
    'OpenBrace',
    'CloseBrace',
    'Comma',
    'Plus',
    'Minus',
    'Multiply',
    'Divide',
    'BooleanLiteral',
    'FieldLiteral',
    'FunctionLiteral',
    'DecimalLiteral',
    'StringLiteral',
    'WhiteSpaces',
    'UnexpectedCharacter',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    FormulaParser._LITERAL_NAMES,
    FormulaParser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return FormulaParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'FormulaParser.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return FormulaParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return FormulaParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(FormulaParser._ATN, this);
  }
  // @RuleVersion(0)
  public stat(): StatContext {
    let _localctx: StatContext = new StatContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, FormulaParser.RULE_stat);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 14;
        this.singleExpression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public arguments(): ArgumentsContext {
    let _localctx: ArgumentsContext = new ArgumentsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, FormulaParser.RULE_arguments);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 16;
        this.match(FormulaParser.OpenParen);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << FormulaParser.BooleanLiteral) |
              (1 << FormulaParser.FieldLiteral) |
              (1 << FormulaParser.FunctionLiteral) |
              (1 << FormulaParser.DecimalLiteral) |
              (1 << FormulaParser.StringLiteral))) !==
            0
        ) {
          {
            this.state = 17;
            this.argumentList();
            this.state = 19;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FormulaParser.Comma) {
              {
                this.state = 18;
                this.match(FormulaParser.Comma);
              }
            }
          }
        }

        this.state = 23;
        this.match(FormulaParser.CloseParen);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public argumentList(): ArgumentListContext {
    let _localctx: ArgumentListContext = new ArgumentListContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, FormulaParser.RULE_argumentList);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 25;
        this.argument();
        this.state = 30;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 26;
                this.match(FormulaParser.Comma);
                this.state = 27;
                this.argument();
              }
            }
          }
          this.state = 32;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public argument(): ArgumentContext {
    let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, FormulaParser.RULE_argument);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 33;
        this.singleExpression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public variable(): VariableContext {
    let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, FormulaParser.RULE_variable);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 35;
        this.match(FormulaParser.FieldLiteral);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function(): FunctionContext {
    let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, FormulaParser.RULE_function);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 37;
        this.match(FormulaParser.FunctionLiteral);
        this.state = 38;
        this.arguments();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public singleExpression(): SingleExpressionContext;
  public singleExpression(_p: number): SingleExpressionContext;
  // @RuleVersion(0)
  public singleExpression(_p?: number): SingleExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: SingleExpressionContext = new SingleExpressionContext(
      this._ctx,
      _parentState,
    );
    let _prevctx: SingleExpressionContext = _localctx;
    let _startState: number = 12;
    this.enterRecursionRule(
      _localctx,
      12,
      FormulaParser.RULE_singleExpression,
      _p,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 46;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case FormulaParser.DecimalLiteral:
            {
              _localctx = new DecimalLiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;

              this.state = 41;
              this.match(FormulaParser.DecimalLiteral);
            }
            break;
          case FormulaParser.StringLiteral:
            {
              _localctx = new StringLiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 42;
              this.match(FormulaParser.StringLiteral);
            }
            break;
          case FormulaParser.BooleanLiteral:
            {
              _localctx = new BooleanLiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 43;
              this.match(FormulaParser.BooleanLiteral);
            }
            break;
          case FormulaParser.FieldLiteral:
            {
              _localctx = new VariableExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 44;
              this.variable();
            }
            break;
          case FormulaParser.FunctionLiteral:
            {
              _localctx = new FunctionExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 45;
              this.function();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 56;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 54;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 4, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new MultiplicativeExpressionContext(
                      new SingleExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      FormulaParser.RULE_singleExpression,
                    );
                    this.state = 48;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 3)',
                      );
                    }
                    this.state = 49;
                    _la = this._input.LA(1);
                    if (
                      !(
                        _la === FormulaParser.Multiply ||
                        _la === FormulaParser.Divide
                      )
                    ) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 50;
                    this.singleExpression(4);
                  }
                  break;

                case 2:
                  {
                    _localctx = new AdditiveExpressionContext(
                      new SingleExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      FormulaParser.RULE_singleExpression,
                    );
                    this.state = 51;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 2)',
                      );
                    }
                    this.state = 52;
                    _la = this._input.LA(1);
                    if (
                      !(
                        _la === FormulaParser.Plus ||
                        _la === FormulaParser.Minus
                      )
                    ) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 53;
                    this.singleExpression(3);
                  }
                  break;
              }
            }
          }
          this.state = 58;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 6:
        return this.singleExpression_sempred(
          _localctx as SingleExpressionContext,
          predIndex,
        );
    }
    return true;
  }
  private singleExpression_sempred(
    _localctx: SingleExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 3);

      case 1:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12>\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\x16\n' +
    '\x03\x05\x03\x18\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04' +
    '\x1F\n\x04\f\x04\x0E\x04"\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07' +
    '\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b1\n\b\x03\b' +
    '\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b9\n\b\f\b\x0E\b<\v\b\x03\b\x02\x02' +
    '\x03\x0E\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x04\x03' +
    '\x02\n\v\x03\x02\b\t\x02?\x02\x10\x03\x02\x02\x02\x04\x12\x03\x02\x02' +
    "\x02\x06\x1B\x03\x02\x02\x02\b#\x03\x02\x02\x02\n%\x03\x02\x02\x02\f'" +
    '\x03\x02\x02\x02\x0E0\x03\x02\x02\x02\x10\x11\x05\x0E\b\x02\x11\x03\x03' +
    '\x02\x02\x02\x12\x17\x07\x03\x02\x02\x13\x15\x05\x06\x04\x02\x14\x16\x07' +
    '\x07\x02\x02\x15\x14\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x18\x03' +
    '\x02\x02\x02\x17\x13\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x03' +
    '\x02\x02\x02\x19\x1A\x07\x04\x02\x02\x1A\x05\x03\x02\x02\x02\x1B \x05' +
    '\b\x05\x02\x1C\x1D\x07\x07\x02\x02\x1D\x1F\x05\b\x05\x02\x1E\x1C\x03\x02' +
    '\x02\x02\x1F"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02' +
    '!\x07\x03\x02\x02\x02" \x03\x02\x02\x02#$\x05\x0E\b\x02$\t\x03\x02\x02' +
    "\x02%&\x07\r\x02\x02&\v\x03\x02\x02\x02'(\x07\x0E\x02\x02()\x05\x04\x03" +
    '\x02)\r\x03\x02\x02\x02*+\b\b\x01\x02+1\x07\x0F\x02\x02,1\x07\x10\x02' +
    '\x02-1\x07\f\x02\x02.1\x05\n\x06\x02/1\x05\f\x07\x020*\x03\x02\x02\x02' +
    '0,\x03\x02\x02\x020-\x03\x02\x02\x020.\x03\x02\x02\x020/\x03\x02\x02\x02' +
    '1:\x03\x02\x02\x0223\f\x05\x02\x0234\t\x02\x02\x0249\x05\x0E\b\x0656\f' +
    '\x04\x02\x0267\t\x03\x02\x0279\x05\x0E\b\x0582\x03\x02\x02\x0285\x03\x02' +
    '\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02:\x03\x02\x02\x02\x0F\x03' +
    '\x02\x02\x02<:\x03\x02\x02\x02\b\x15\x17 08:';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!FormulaParser.__ATN) {
      FormulaParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(FormulaParser._serializedATN),
      );
    }

    return FormulaParser.__ATN;
  }
}

export class StatContext extends ParserRuleContext {
  public singleExpression(): SingleExpressionContext {
    return this.getRuleContext(0, SingleExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return FormulaParser.RULE_stat;
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterStat) {
      listener.enterStat(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitStat) {
      listener.exitStat(this);
    }
  }
}

export class ArgumentsContext extends ParserRuleContext {
  public OpenParen(): TerminalNode {
    return this.getToken(FormulaParser.OpenParen, 0);
  }
  public CloseParen(): TerminalNode {
    return this.getToken(FormulaParser.CloseParen, 0);
  }
  public argumentList(): ArgumentListContext | undefined {
    return this.tryGetRuleContext(0, ArgumentListContext);
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(FormulaParser.Comma, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return FormulaParser.RULE_arguments;
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterArguments) {
      listener.enterArguments(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitArguments) {
      listener.exitArguments(this);
    }
  }
}

export class ArgumentListContext extends ParserRuleContext {
  public argument(): ArgumentContext[];
  public argument(i: number): ArgumentContext;
  public argument(i?: number): ArgumentContext | ArgumentContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ArgumentContext);
    } else {
      return this.getRuleContext(i, ArgumentContext);
    }
  }
  public Comma(): TerminalNode[];
  public Comma(i: number): TerminalNode;
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(FormulaParser.Comma);
    } else {
      return this.getToken(FormulaParser.Comma, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return FormulaParser.RULE_argumentList;
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterArgumentList) {
      listener.enterArgumentList(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitArgumentList) {
      listener.exitArgumentList(this);
    }
  }
}

export class ArgumentContext extends ParserRuleContext {
  public singleExpression(): SingleExpressionContext {
    return this.getRuleContext(0, SingleExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return FormulaParser.RULE_argument;
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterArgument) {
      listener.enterArgument(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitArgument) {
      listener.exitArgument(this);
    }
  }
}

export class VariableContext extends ParserRuleContext {
  public FieldLiteral(): TerminalNode {
    return this.getToken(FormulaParser.FieldLiteral, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return FormulaParser.RULE_variable;
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterVariable) {
      listener.enterVariable(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitVariable) {
      listener.exitVariable(this);
    }
  }
}

export class FunctionContext extends ParserRuleContext {
  public FunctionLiteral(): TerminalNode {
    return this.getToken(FormulaParser.FunctionLiteral, 0);
  }
  public arguments(): ArgumentsContext {
    return this.getRuleContext(0, ArgumentsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return FormulaParser.RULE_function;
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterFunction) {
      listener.enterFunction(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitFunction) {
      listener.exitFunction(this);
    }
  }
}

export class SingleExpressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return FormulaParser.RULE_singleExpression;
  }
  public copyFrom(ctx: SingleExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class DecimalLiteralExpressionContext extends SingleExpressionContext {
  public DecimalLiteral(): TerminalNode {
    return this.getToken(FormulaParser.DecimalLiteral, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterDecimalLiteralExpression) {
      listener.enterDecimalLiteralExpression(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitDecimalLiteralExpression) {
      listener.exitDecimalLiteralExpression(this);
    }
  }
}
export class StringLiteralExpressionContext extends SingleExpressionContext {
  public StringLiteral(): TerminalNode {
    return this.getToken(FormulaParser.StringLiteral, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterStringLiteralExpression) {
      listener.enterStringLiteralExpression(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitStringLiteralExpression) {
      listener.exitStringLiteralExpression(this);
    }
  }
}
export class BooleanLiteralExpressionContext extends SingleExpressionContext {
  public BooleanLiteral(): TerminalNode {
    return this.getToken(FormulaParser.BooleanLiteral, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterBooleanLiteralExpression) {
      listener.enterBooleanLiteralExpression(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitBooleanLiteralExpression) {
      listener.exitBooleanLiteralExpression(this);
    }
  }
}
export class VariableExpressionContext extends SingleExpressionContext {
  public variable(): VariableContext {
    return this.getRuleContext(0, VariableContext);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterVariableExpression) {
      listener.enterVariableExpression(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitVariableExpression) {
      listener.exitVariableExpression(this);
    }
  }
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
  public singleExpression(): SingleExpressionContext[];
  public singleExpression(i: number): SingleExpressionContext;
  public singleExpression(
    i?: number,
  ): SingleExpressionContext | SingleExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SingleExpressionContext);
    } else {
      return this.getRuleContext(i, SingleExpressionContext);
    }
  }
  public Multiply(): TerminalNode | undefined {
    return this.tryGetToken(FormulaParser.Multiply, 0);
  }
  public Divide(): TerminalNode | undefined {
    return this.tryGetToken(FormulaParser.Divide, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterMultiplicativeExpression) {
      listener.enterMultiplicativeExpression(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitMultiplicativeExpression) {
      listener.exitMultiplicativeExpression(this);
    }
  }
}
export class AdditiveExpressionContext extends SingleExpressionContext {
  public singleExpression(): SingleExpressionContext[];
  public singleExpression(i: number): SingleExpressionContext;
  public singleExpression(
    i?: number,
  ): SingleExpressionContext | SingleExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SingleExpressionContext);
    } else {
      return this.getRuleContext(i, SingleExpressionContext);
    }
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(FormulaParser.Plus, 0);
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(FormulaParser.Minus, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterAdditiveExpression) {
      listener.enterAdditiveExpression(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitAdditiveExpression) {
      listener.exitAdditiveExpression(this);
    }
  }
}
export class FunctionExpressionContext extends SingleExpressionContext {
  public function(): FunctionContext {
    return this.getRuleContext(0, FunctionContext);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterFunctionExpression) {
      listener.enterFunctionExpression(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitFunctionExpression) {
      listener.exitFunctionExpression(this);
    }
  }
}
