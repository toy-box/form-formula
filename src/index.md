---
nav:
  title: Components
  path: /components
---

Install dependencies,

```bash
$ npm i @toy-box/form-formula
```

## 公式编辑器-表单

```tsx
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import 'codemirror/lib/codemirror.css';
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
          title: '姓',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '姓',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          title: '名',
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
                title: 'Price',
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
                title: 'Count',
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
                title: 'Total',
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
  const [value, setValue] = useState();
  return (
    <>
      {value}
      <FormulaEditor
        title="表单公式型字段"
        style={style}
        schema={schema}
        value={value}
        onChange={setValue}
        path={'projects.total'}
      />
    </>
  );
};
```

## 公式编辑器-meta

```tsx
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import 'codemirror/lib/codemirror.css';
import { FormulaEditor } from '@toy-box/form-formula';

const style = {
  border: '1px solid gray',
};

const metaSchema = [
  {
    description: null,
    exclusiveMaximum: null,
    exclusiveMinimum: null,
    format: null,
    key: 'deptId',
    maxLength: null,
    maximum: null,
    minLength: null,
    minimum: null,
    name: '部门',
    options: null,
    parentKey: 'parent_id',
    pattern: null,
    primary: null,
    properties: null,
    refObjectId: '5f9630d977b9ec42e4d0dca5',
    required: null,
    titleKey: 'name',
    type: 'objectId',
    unique: null,
    unBasic: true,
  },
  {
    description: null,
    exclusiveMaximum: null,
    exclusiveMinimum: null,
    format: null,
    key: 'date',
    maxLength: null,
    maximum: null,
    minLength: null,
    minimum: null,
    name: '日期',
    options: null,
    pattern: null,
    primary: null,
    properties: null,
    required: null,
    type: 'date',
  },
  {
    description: null,
    exclusiveMaximum: null,
    exclusiveMinimum: null,
    format: null,
    key: 'copId',
    maxLength: null,
    maximum: null,
    minLength: null,
    minimum: null,
    name: '公司',
    options: [
      {
        label: '12323232',
        value: '1',
      },
      {
        label: 'bbbbbbb',
        value: '2',
      },
    ],
    pattern: null,
    primary: null,
    properties: null,
    refObjectId: '5f9630d977b9ec42e4d0dca5',
    required: null,
    titleKey: 'name',
    type: 'singleOption',
    unique: null,
    unBasic: true,
  },
];

export default () => {
  const [value, setValue] = useState();
  return (
    <>
      {value}
      <FormulaEditor
        title="meta公式型字段"
        style={style}
        metaSchema={metaSchema}
        value={value}
        onChange={setValue}
        path={'projects.total'}
      />
    </>
  );
};
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
import 'codemirror/lib/codemirror.css';

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
          title: '姓',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '姓',
          },
        },
        lastName: {
          type: 'string',
          required: true,
          title: '名',
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
                title: 'Price',
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
                title: 'Count',
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
                title: 'Total',
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
    <div style={{ width: '600px', margin: '20px auto' }}>
      <FormProvider form={form}>
        <SchemaField schema={schema as ISchema} />
      </FormProvider>
    </div>
  );
};
```
