declare module '@formulajs/formulajs' {
  export type FormulaType =
    | 'IF'
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
    | 'SUMPRODUCT'
    | 'SUM'
    | 'SUMIF'
    | 'ROUNDUP'
    | 'ROUNDDOWN'
    | 'POWER'
    | 'LN'
    | 'SQRT';
  interface Formulajs {
    IF: <L, R>(criteria: boolean, left: L, right: R) => L | R;
    AND: (...args: boolean[]) => boolean;
    OR: (...args: boolean[]) => boolean;
    XOR: (...args: boolean[]) => boolean;
    NOT: (...args: boolean[]) => boolean;
    AVERAGE: (...args: number[]) => number;
    COUNT: (...args: any[]) => number;
    COUNTA: (...args: any[]) => number;
    COUNTIF: (arr: any[], num: number) => number;
    MAX: (...args: number[] | Array<number[]>) => number;
    MIN: (...args: number[] | Array<number[]>) => number;
    ROUND: (num: number, digits?: number) => number;
    INT: (num: number) => number;
    MOD: (num: number, num2: number) => number;
    PRODUCT: (...args: number[]) => number;
    SUMPRODUCT: (...args: number[]) => number;
    SUM: (...args: number[]) => number;
    SUMIF: (range: number[], criteria: string) => number;
    ROUNDUP: (num: number) => number;
    ROUNDDOWN: (num: number) => number;
    POWER: (num: number, num2: number) => number;
    LN: (num: number) => number;
    SQRT: (num: number) => number;
  }
  const formulajs: Formulajs;

  export default formulajs;
}
