---
nav:
  title: Components
  path: /components
---

## Formula-Editor

### schema 变量

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
