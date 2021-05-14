import { ISchema, SchemaProperties } from '@formily/json-schema'


export function parseSchema(schema: ISchema, path?: string) {
  const fields: any[] = []
  if (schema.type === 'object') {
    if (schema?.properties != null) {
      const properties = schema.properties as SchemaProperties<any, any, any, any, any, any, any, any>
      Object.keys(properties).forEach(key => {
        const fieldSchema = properties[key]
        fields.push(...parseSchema(fieldSchema, `${path ? `${path}.`: ''}${key}`))
      })
    }
  } else if (schema.type !== 'array') {
    fields.push({
      label: schema.title,
      value: path,
      type: schema.type
    })
  }
  return fields
}
