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

export interface IBusinessObjectMeta {
  key: string;
  idKey?: string;
  name: string;
  description: string;
  properties: { [key: string]: IFieldMeta };
  titleKey: string;
  type?: string;
}

export interface IFieldOption {
  label: string;
  value: string;
}

export interface IFieldMeta {
  key: string;
  name: string;
  type: string;
  description?: string;
  primary?: boolean;
  enum?: IFieldOption[];
  refObjectId?: string;
  unique?: boolean;
  required?: boolean;
  maximum?: number;
  minimum?: number;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  precision?: number;
  multipleOf?: number;
  minProperties?: number;
  maxProperties?: number;
  pattern?: string;
  format?: string;
  idKey?: string;
  titleKey?: string;
  properties?: { [key: string]: IFieldMeta };
  index?: number;
  defaultValue?: any;
  parentKey?: string;
}

export enum BusinessFieldType {
  INTEGER = 'integer',
  NUMBER = 'number',
  STRING = 'string',
  TEXT = 'text',
  DATE = 'date',
  DATETIME = 'datetime',
  BOOLEAN = 'boolean',
  ARRAY = 'array',
  OBJECT_ID = 'objectId',
  SINGLE_OPTION = 'singleOption',
  PERCENT = 'percent',
  OBJECT = 'object',
}
