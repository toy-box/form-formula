export interface Variable {
  label: string;
  value: string;
  type: string;
  fullName?: string;
  children?: Variable[];
}

export interface FunctionItem {
  name: string;
  description: string;
}

export interface FunctionGroup {
  name: string;
  functions: FunctionItem[];
}
