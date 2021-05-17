parser grammar FormulaParser;

options {
	tokenVocab = FormulaLexer;
}

stat: singleExpression;

arguments: '(' (argumentList ','?)? ')';

argumentList: argument (',' argument)*;

argument: // ECMAScript 6: Spread Operator
	singleExpression;

variable: FieldLiteral;

function:
	FunctionLiteral arguments;

singleExpression:
	DecimalLiteral																	# DecimalLiteralExpression
	| StringLiteral																	# StringLiteralExpression
	| BooleanLiteral																# BooleanLiteralExpression
	| variable																			# VariableExpression
	| singleExpression ('*' | '/') singleExpression	# MultiplicativeExpression
	| singleExpression ('+' | '-') singleExpression	# AdditiveExpression
	| function																			# FunctionExpression
;