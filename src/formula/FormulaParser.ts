// Generated from FormulaParser.g4 by ANTLR 4.9.0-SNAPSHOT

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
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { FormulaParserListener } from './FormulaParserListener';
import { FormulaParserVisitor } from './FormulaParserVisitor';

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
  public static readonly RULE_expressionStatement = 1;
  public static readonly RULE_expressionSequence = 2;
  public static readonly RULE_arguments = 3;
  public static readonly RULE_argumentList = 4;
  public static readonly RULE_argument = 5;
  public static readonly RULE_variable = 6;
  public static readonly RULE_function = 7;
  public static readonly RULE_singleExpression = 8;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'stat',
    'expressionStatement',
    'expressionSequence',
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
        this.state = 18;
        this.expressionStatement();
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
  public expressionStatement(): ExpressionStatementContext {
    let _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, FormulaParser.RULE_expressionStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 20;
        this.expressionSequence();
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
  public expressionSequence(): ExpressionSequenceContext {
    let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, FormulaParser.RULE_expressionSequence);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 22;
        this.singleExpression(0);
        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === FormulaParser.Comma) {
          {
            {
              this.state = 23;
              this.match(FormulaParser.Comma);
              this.state = 24;
              this.singleExpression(0);
            }
          }
          this.state = 29;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
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
  public arguments(): ArgumentsContext {
    let _localctx: ArgumentsContext = new ArgumentsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 6, FormulaParser.RULE_arguments);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 30;
        this.match(FormulaParser.OpenParen);
        this.state = 35;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << FormulaParser.OpenParen) |
              (1 << FormulaParser.BooleanLiteral) |
              (1 << FormulaParser.FieldLiteral) |
              (1 << FormulaParser.FunctionLiteral) |
              (1 << FormulaParser.DecimalLiteral) |
              (1 << FormulaParser.StringLiteral))) !==
            0
        ) {
          {
            this.state = 31;
            this.argumentList();
            this.state = 33;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FormulaParser.Comma) {
              {
                this.state = 32;
                this.match(FormulaParser.Comma);
              }
            }
          }
        }

        this.state = 37;
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
    this.enterRule(_localctx, 8, FormulaParser.RULE_argumentList);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 39;
        this.argument();
        this.state = 44;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 40;
                this.match(FormulaParser.Comma);
                this.state = 41;
                this.argument();
              }
            }
          }
          this.state = 46;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
    this.enterRule(_localctx, 10, FormulaParser.RULE_argument);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 47;
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
    this.enterRule(_localctx, 12, FormulaParser.RULE_variable);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 49;
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
    this.enterRule(_localctx, 14, FormulaParser.RULE_function);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 51;
        this.match(FormulaParser.FunctionLiteral);
        this.state = 52;
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
    let _startState: number = 16;
    this.enterRecursionRule(
      _localctx,
      16,
      FormulaParser.RULE_singleExpression,
      _p,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 64;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case FormulaParser.DecimalLiteral:
            {
              _localctx = new DecimalLiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;

              this.state = 55;
              this.match(FormulaParser.DecimalLiteral);
            }
            break;
          case FormulaParser.StringLiteral:
            {
              _localctx = new StringLiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 56;
              this.match(FormulaParser.StringLiteral);
            }
            break;
          case FormulaParser.BooleanLiteral:
            {
              _localctx = new BooleanLiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 57;
              this.match(FormulaParser.BooleanLiteral);
            }
            break;
          case FormulaParser.FieldLiteral:
            {
              _localctx = new VariableExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 58;
              this.variable();
            }
            break;
          case FormulaParser.OpenParen:
            {
              _localctx = new ParenthesizedExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 59;
              this.match(FormulaParser.OpenParen);
              this.state = 60;
              this.expressionSequence();
              this.state = 61;
              this.match(FormulaParser.CloseParen);
            }
            break;
          case FormulaParser.FunctionLiteral:
            {
              _localctx = new FunctionExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 63;
              this.function();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 74;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 72;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 5, this._ctx)
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
                    this.state = 66;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 4)',
                      );
                    }
                    this.state = 67;
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
                    this.state = 68;
                    this.singleExpression(5);
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
                    this.state = 69;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 3)',
                      );
                    }
                    this.state = 70;
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
                    this.state = 71;
                    this.singleExpression(4);
                  }
                  break;
              }
            }
          }
          this.state = 76;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
      case 8:
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
        return this.precpred(this._ctx, 4);

      case 1:
        return this.precpred(this._ctx, 3);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12P\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03\x03' +
    '\x04\x03\x04\x03\x04\x07\x04\x1C\n\x04\f\x04\x0E\x04\x1F\v\x04\x03\x05' +
    '\x03\x05\x03\x05\x05\x05$\n\x05\x05\x05&\n\x05\x03\x05\x03\x05\x03\x06' +
    '\x03\x06\x03\x06\x07\x06-\n\x06\f\x06\x0E\x060\v\x06\x03\x07\x03\x07\x03' +
    '\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x05\nC\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\nK\n' +
    '\n\f\n\x0E\nN\v\n\x03\n\x02\x02\x03\x12\v\x02\x02\x04\x02\x06\x02\b\x02' +
    '\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x04\x03\x02\n\v\x03\x02\b\t\x02' +
    'Q\x02\x14\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06\x18\x03\x02\x02' +
    '\x02\b \x03\x02\x02\x02\n)\x03\x02\x02\x02\f1\x03\x02\x02\x02\x0E3\x03' +
    '\x02\x02\x02\x105\x03\x02\x02\x02\x12B\x03\x02\x02\x02\x14\x15\x05\x04' +
    '\x03\x02\x15\x03\x03\x02\x02\x02\x16\x17\x05\x06\x04\x02\x17\x05\x03\x02' +
    '\x02\x02\x18\x1D\x05\x12\n\x02\x19\x1A\x07\x07\x02\x02\x1A\x1C\x05\x12' +
    '\n\x02\x1B\x19\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02' +
    '\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x07\x03\x02\x02\x02\x1F\x1D\x03\x02' +
    '\x02\x02 %\x07\x03\x02\x02!#\x05\n\x06\x02"$\x07\x07\x02\x02#"\x03\x02' +
    '\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02\x02%!\x03\x02\x02\x02%&\x03\x02' +
    "\x02\x02&'\x03\x02\x02\x02'(\x07\x04\x02\x02(\t\x03\x02\x02\x02).\x05" +
    '\f\x07\x02*+\x07\x07\x02\x02+-\x05\f\x07\x02,*\x03\x02\x02\x02-0\x03\x02' +
    '\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\v\x03\x02\x02\x020.\x03' +
    '\x02\x02\x0212\x05\x12\n\x022\r\x03\x02\x02\x0234\x07\r\x02\x024\x0F\x03' +
    '\x02\x02\x0256\x07\x0E\x02\x0267\x05\b\x05\x027\x11\x03\x02\x02\x0289' +
    '\b\n\x01\x029C\x07\x0F\x02\x02:C\x07\x10\x02\x02;C\x07\f\x02\x02<C\x05' +
    '\x0E\b\x02=>\x07\x03\x02\x02>?\x05\x06\x04\x02?@\x07\x04\x02\x02@C\x03' +
    '\x02\x02\x02AC\x05\x10\t\x02B8\x03\x02\x02\x02B:\x03\x02\x02\x02B;\x03' +
    '\x02\x02\x02B<\x03\x02\x02\x02B=\x03\x02\x02\x02BA\x03\x02\x02\x02CL\x03' +
    '\x02\x02\x02DE\f\x06\x02\x02EF\t\x02\x02\x02FK\x05\x12\n\x07GH\f\x05\x02' +
    '\x02HI\t\x03\x02\x02IK\x05\x12\n\x06JD\x03\x02\x02\x02JG\x03\x02\x02\x02' +
    'KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02M\x13\x03\x02\x02' +
    '\x02NL\x03\x02\x02\x02\t\x1D#%.BJL';
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
  public expressionStatement(): ExpressionStatementContext {
    return this.getRuleContext(0, ExpressionStatementContext);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitStat) {
      return visitor.visitStat(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionStatementContext extends ParserRuleContext {
  public expressionSequence(): ExpressionSequenceContext {
    return this.getRuleContext(0, ExpressionSequenceContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return FormulaParser.RULE_expressionStatement;
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionSequenceContext extends ParserRuleContext {
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
    return FormulaParser.RULE_expressionSequence;
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterExpressionSequence) {
      listener.enterExpressionSequence(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitExpressionSequence) {
      listener.exitExpressionSequence(this);
    }
  }
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitExpressionSequence) {
      return visitor.visitExpressionSequence(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitArguments) {
      return visitor.visitArguments(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitArgumentList) {
      return visitor.visitArgumentList(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitArgument) {
      return visitor.visitArgument(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitVariable) {
      return visitor.visitVariable(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitFunction) {
      return visitor.visitFunction(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitDecimalLiteralExpression) {
      return visitor.visitDecimalLiteralExpression(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitStringLiteralExpression) {
      return visitor.visitStringLiteralExpression(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitBooleanLiteralExpression) {
      return visitor.visitBooleanLiteralExpression(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitVariableExpression) {
      return visitor.visitVariableExpression(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpression) {
      return visitor.visitMultiplicativeExpression(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitAdditiveExpression) {
      return visitor.visitAdditiveExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
  public OpenParen(): TerminalNode {
    return this.getToken(FormulaParser.OpenParen, 0);
  }
  public expressionSequence(): ExpressionSequenceContext {
    return this.getRuleContext(0, ExpressionSequenceContext);
  }
  public CloseParen(): TerminalNode {
    return this.getToken(FormulaParser.CloseParen, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: FormulaParserListener): void {
    if (listener.enterParenthesizedExpression) {
      listener.enterParenthesizedExpression(this);
    }
  }
  // @Override
  public exitRule(listener: FormulaParserListener): void {
    if (listener.exitParenthesizedExpression) {
      listener.exitParenthesizedExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitParenthesizedExpression) {
      return visitor.visitParenthesizedExpression(this);
    } else {
      return visitor.visitChildren(this);
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
  // @Override
  public accept<Result>(visitor: FormulaParserVisitor<Result>): Result {
    if (visitor.visitFunctionExpression) {
      return visitor.visitFunctionExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
