---
nav:
  title: Components
  path: /components
---

## Formula-Editor


### 编辑器

```tsx
import React from 'react';
import 'antd/dist/antd.css';
import { FormulaEditor } from '@toy-box/form-formula';

const style = {
  border: '1px solid gray'
}

const variables = [
  {
    label: '字段A',
    value: 'field-a',
    type: 'string'
  },
  {
    label: '字段B',
    value: 'field-b',
    type: 'number'
  }
]

export default () => <FormulaEditor title="表单公式型字段" style={style} variables={variables} />
```