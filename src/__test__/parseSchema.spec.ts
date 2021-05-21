import { parseSchema } from '../formula-editor/utils/parseSchema';

test('parseSchema', () => {
  const variables = parseSchema({
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
  });
  expect(variables.children.length).toBe(2);
});

test('parseSchema', () => {
  const variables = parseSchema({
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
  });
  console.log('variables', JSON.stringify(variables));
  expect(variables.children[1].children.length).toBe(2);
});
