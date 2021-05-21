import { ISchema, SchemaProperties } from '@formily/json-schema';
import { Variable } from '../types';

export function parseSchema(
  schema: ISchema,
  path: string = '',
  refPath?: string,
): Variable {
  const children: Variable[] = [];
  if (schema.type === 'object') {
    if (schema?.properties != null) {
      const properties = schema.properties as SchemaProperties<
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any
      >;
      Object.keys(properties).forEach((key) => {
        const fieldSchema = properties[key];
        const fieldPath = `${path ? `${path}.` : ''}${key}`;
        children.push(parseSchema(fieldSchema, fieldPath, refPath));
      });
    }
  } else if (schema.type === 'array') {
    const items = schema.items as ISchema;
    const itemProperties = items?.properties as
      | SchemaProperties<any, any, any, any, any, any, any, any>
      | undefined;
    if (itemProperties) {
      children.push(
        ...Object.keys(itemProperties).map((key) => {
          const fieldSchema = itemProperties[key];
          const fieldPath = `${path ? `${path}.` : ''}${key}`;
          return parseSchema(fieldSchema, fieldPath, refPath);
        }),
      );
    }
  } else {
    children.push({
      label: schema.title as string,
      value: path,
      type: schema.type || '',
    });
  }
  if (schema.type === 'object' || schema.type === 'array') {
    return {
      label: schema.title as string,
      value: path,
      type: schema.type?.toString(),
      children,
    };
  }
  return {
    label: schema.title as string,
    value: path,
    type: schema.type || '',
  };
}

export function cleanVoid(schema: ISchema): ISchema | undefined {
  if (schema.type === 'object') {
    const { properties } = schema;
    if (typeof properties === 'object') {
      const cleanProperties: Record<string, ISchema> = {};
      Object.keys(properties).forEach((key) => {
        const subSchema = cleanVoid(properties[key]);
        subSchema && (cleanProperties[key] = subSchema);
      });
      return { ...schema, properties: cleanProperties } as ISchema;
    }
    return schema as ISchema;
  }
  if (schema.type === 'array') {
    return {
      ...schema,
      items: cleanVoid(schema.items as ISchema) as ISchema,
    } as ISchema;
  }
  if (schema.type === 'void') {
    return schema.properties
      ? (cleanVoid(schema.properties as ISchema) as ISchema)
      : undefined;
  }
  return schema as ISchema;
}
