import { Field } from '@formily/core/esm/models/Field';
import { isArrayField } from '@formily/core';
import { isArr } from '@formily/shared';
import { formulaParse } from '@toy-box/formula';
import { ISchema } from '@formily/json-schema';
import { SchemaProperties } from '@formily/react';

export function schemaPatch(schema: ISchema) {
  const { ['x-reactions']: reactions, properties } = schema;
  let newSchema = { ...schema };
  if (properties) {
    newSchema = Object.assign(schema, {
      properties:
        typeof properties === 'object'
          ? propertiesPatch(properties)
          : properties,
    });
  }
  if (reactions) {
    newSchema = Object.assign(schema, {
      'x-reactions': reactionsPatch(reactions),
    });
  }
  return newSchema;
}

function propertiesPatch(
  properties: SchemaProperties<any, any, any, any, any, any, any, any>,
) {
  const propertiesPatched: SchemaProperties<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  > = {};
  Object.keys(properties).forEach((key) => {
    propertiesPatched[key] = schemaPatch(properties[key]);
  });
  return propertiesPatched;
}

function reactionsPatch(reactions: any | any[]) {
  if (isArr(reactions)) {
    return reactions.map((reaction) => reactionPatch(reaction));
  }
  return reactionPatch(reactions);
}

function reactionPatch(reaction: any) {
  if (reaction.type === 'formula') {
    return (field: Field) => {
      if (field.form.initialized) {
        const result = formulaParse(reaction.formula, (pattern: string) => {
          const path = pattern.substr(2, pattern.length - 3);
          const query = field.form.query(getParentPath(path));
          const takenField = query.take();
          const fieldValue = field.form.getValuesIn(path);
          const brotherAddress = `${getParentPath(path)}.${getIndex(
            field,
          )}.${getFieldKey(path)}`;
          const brotherValue = field.form.getValuesIn(brotherAddress);
          const arrayValue = field.form.getValuesIn(takenField?.path);
          if (isArrayField(field.parent) && isBrother(field, path)) {
            return brotherValue;
          }
          if (takenField && isArrayField(takenField.parent)) {
            return arrayValue.map(
              (item: Record<string, any>) => item[getFieldKey(path)],
            );
          }
          return fieldValue;
        });

        if (result.success) {
          field.form.setValuesIn(field.path, result.result);
        }
      }
    };
  }
  return reaction;
}

function getParentPath(path: string) {
  const pathArr = path.split('.');
  pathArr.splice(pathArr.length - 1, 1);
  return pathArr.join('.');
}

function isBrother(field: Field, path: string) {
  return field.parent.path.toString() === getParentPath(path);
}

function getIndex(field: Field) {
  const pathArr = field.path.toArr();
  return pathArr[pathArr.length - 2];
}

function getFieldKey(field: Field | string) {
  if (typeof field == 'string') {
    const pathArr = field.split('.');
    return pathArr[pathArr.length - 1];
  }
  const pathArr = field.path.toArr();
  return pathArr[pathArr.length - 1];
}
