lexer grammar FormulaLexer;

channels {
	ERROR
}

OpenParen: '(';
CloseParen: ')';
OpenBrace: '{';
CloseBrace: '}';
Comma: ',';
Plus: '+';
Minus: '-';
Multiply: '*';
Divide: '/';

/// Boolean Literals
BooleanLiteral: 'true' | 'false';

/// Field Literals
FieldLiteral: Field;

// Function Literals
FunctionLiteral:
	'IF'
	| 'AND'
	| 'OR'
	| 'XOR'
	| 'NOT'
	| 'AVERAGE'
	| 'COUNT'
	| 'COUNTA'
	| 'COUNTIF'
	| 'MAX'
	| 'MIN'
	| 'ROUND'
	| 'INT'
	| 'MOD'
	| 'PRODUCT'
	| 'SUM'
	| 'SUMPRODUCT'
	| 'SUMIF'
	| 'ROUNDUP'
	| 'ROUNDDOWN'
	| 'POWER'
	| 'LN'
	| 'SQRT'
	| 'YEAR'
	| 'MONTH'
	| 'DAY'
	| 'HOUR'
	| 'MINUTE'
	| 'SECOND'
	| 'DATE'
	| 'CURDATE'
	| 'NOW'
	| 'DAYS'
	| 'DATEDELTA';
	

	/// Numeric Literals
DecimalLiteral:
  DecimalIntegerLiteral '.' [0-9]*
  | '.' [0-9]+
  | DecimalIntegerLiteral;

/// String Literals
StringLiteral:
  '"' DoubleStringCharacter* '"'
	| '\'' SingleStringCharacter* '\'';


WhiteSpaces: [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);

UnexpectedCharacter: . -> channel(ERROR);


/// Fragment rules

fragment DoubleStringCharacter:
  ~["\\\r\n]
  | '\\' EscapeSequence
  | LineContinuation;

fragment SingleStringCharacter:
  ~['\\\r\n]
  | '\\' EscapeSequence
  | LineContinuation;

fragment EscapeSequence:
	CharacterEscapeSequence
	| '0' // no digit ahead! TODO
	| HexEscapeSequence
	| UnicodeEscapeSequence
	| ExtendedUnicodeEscapeSequence;

fragment CharacterEscapeSequence:
	SingleEscapeCharacter
	| NonEscapeCharacter;

fragment HexEscapeSequence: 'x' HexDigit HexDigit;

fragment UnicodeEscapeSequence:
	'u' HexDigit HexDigit HexDigit HexDigit;

fragment ExtendedUnicodeEscapeSequence: 'u' '{' HexDigit+ '}';

fragment SingleEscapeCharacter: ['"\\bfnrtv];

fragment NonEscapeCharacter: ~['"\\bfnrtv0-9xu\r\n];

fragment EscapeCharacter: SingleEscapeCharacter | [0-9] | [xu];

fragment LineContinuation: '\\' [\r\n\u2028\u2029];

fragment HexDigit: [0-9a-fA-F];

fragment DecimalIntegerLiteral: '0' | [1-9] [0-9]*;

fragment Field: '{!' FieldPathSegment FieldPathSubSegment* '}';

fragment FieldPath: FieldPathSegment FieldPathSubSegment*;

fragment FieldPathSegment: [a-zA-Z] [a-zA-Z0-9_]*;

fragment FieldPathSubSegment: '.' FieldPathSegment;
