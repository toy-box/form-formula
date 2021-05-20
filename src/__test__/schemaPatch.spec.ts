import { schemaPatch } from '../index';

test('schemaPatch', () => {
  const newSchema = schemaPatch({
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
            formula: '2 + 3',
          },
        ],
      },
    },
  });
  expect(newSchema.properties['username']['x-reactions'].length).toBe(1);
});
