---
nav:
  title: Components
  path: /components
---

## 公式编辑器

```tsx
import React from 'react';
import 'antd/dist/antd.css';
import { FormulaEditor } from '@toy-box/form-formula';

const style = {
  border: '1px solid gray',
};

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    shopes: {
      type: 'array',
      title: '连锁店',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            title: 'ID',
          },
          name: {
            type: 'string',
            title: '店名',
          },
        },
      },
    },
  },
};

export default () => (
  <FormulaEditor title="表单公式型字段" style={style} schema={schema} />
);
```

## 公式执行

```tsx
import React from 'react';
import {
  ArrayTable,
  Editable,
  Input,
  FormItem,
  FormLayout,
  FormGrid,
  Select,
  NumberPicker,
} from '@formily/antd';
import { createForm } from '@formily/core';
import { schemaPatch } from '@toy-box/form-formula';
import {
  FormProvider,
  createSchemaField,
  Schema,
  ISchema,
} from '@formily/react';

const SchemaField = createSchemaField({
  components: {
    FormGrid,
    Input,
    Select,
    NumberPicker,
    FormItem,
    FormLayout,
    ArrayTable,
    Editable,
  },
});

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-reactions': [
        {
          type: 'formula',
          formula: 'CONCATENATE({!firstName},  " ", {!lastName})',
        },
      ],
    },
    name: {
      type: 'void',
      title: '姓名',
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        asterisk: true,
        feedbackLayout: 'none',
      },
      'x-component': 'FormGrid',
      properties: {
        firstName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '姓',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '名',
          },
        },
      },
    },
    projects: {
      type: 'array',
      title: 'Projects',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      items: {
        type: 'object',
        properties: {
          column_1: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              width: 50,
              title: 'Sort',
              align: 'center',
            },
            properties: {
              sortable: {
                type: 'void',
                'x-component': 'ArrayTable.SortHandle',
              },
            },
          },
          column_2: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              width: 50,
              title: 'Index',
              align: 'center',
            },
            properties: {
              index: {
                type: 'void',
                'x-component': 'ArrayTable.Index',
              },
            },
          },
          column_3: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Price',
            },
            properties: {
              price: {
                type: 'number',
                default: 0,
                'x-decorator': 'Editable',
                'x-component': 'NumberPicker',
                'x-component-props': {
                  addonafter: '$',
                },
              },
            },
          },
          column_4: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Count',
            },
            properties: {
              count: {
                type: 'number',
                default: 0,
                'x-decorator': 'Editable',
                'x-component': 'NumberPicker',
                'x-component-props': {
                  addonafter: '$',
                },
              },
            },
          },
          column_5: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Total',
            },
            properties: {
              total: {
                type: 'number',
                'x-read-pretty': true,
                'x-decorator': 'FormItem',
                'x-component': 'NumberPicker',
                'x-component-props': {
                  addonafter: '$',
                },
                'x-reactions': [
                  {
                    type: 'formula',
                    formula: '{!projects.price} * {!projects.count}',
                  },
                ],
              },
            },
          },
          column_6: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Operations',
            },
            properties: {
              item: {
                type: 'void',
                'x-component': 'FormItem',
                properties: {
                  remove: {
                    type: 'void',
                    'x-component': 'ArrayTable.Remove',
                  },
                  moveDown: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveDown',
                  },
                  moveUp: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveUp',
                  },
                },
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          title: 'Add',
          'x-component': 'ArrayTable.Addition',
        },
      },
    },
    sum: {
      type: 'number',
      title: '合计',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-reactions': [
        {
          type: 'formula',
          formula: 'SUM({!projects.total})',
        },
      ],
    },
  },
};

export default () => {
  const form = createForm();
  Schema.registerPatches(schemaPatch);
  return (
    <div style={{ width: '960px', margin: '20px auto' }}>
      <FormProvider form={form}>
        <SchemaField schema={schema as ISchema} />
      </FormProvider>
    </div>
  );
};
```
