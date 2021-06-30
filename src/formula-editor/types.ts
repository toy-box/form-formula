import { IFieldMeta } from '@toy-box/meta-schema';
export interface Variable {
  label: string;
  value: string;
  type: string;
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

export interface MetaSchemaObj {
  groupId: string;
  groupName: string;
  list: IFieldMeta[];
}

export type MetaSchema = IFieldMeta[] | MetaSchemaObj;
