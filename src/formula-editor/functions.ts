const functions = [
  {
    name: '常用',
    functions: [
      {
        name: 'SUM',
        description: '返回所有参与字段中数值的总和',
      },
      {
        name: 'MAX',
        description: '返回所有参与字段中数值的最大值',
      },
      {
        name: 'MIN',
        description: '返回所有参与字段中数值的最小值',
      },
      {
        name: 'AVERAGE',
        description: '计算所有参与运算字段的平均值',
      },
      {
        name: 'COUNT',
        description: '返回所有参与运算字段中值数字的数量',
      },
      {
        name: 'COUNTA',
        description: '返回所有参与运算字段中值不为空的数量',
      },
      {
        name: 'ROUND',
        description: '将数字四舍五入到指定的位数',
      },
      {
        name: 'IF',
        description: '根据判断条件，返回正确或错误的值',
      },
      {
        name: 'AND',
        description:
          '返回逻辑值：如果所有参数值均为逻辑“true”，则返回逻辑“true”，反之返回逻辑“false',
      },
      {
        name: 'NOT',
        description: '对参数逻辑值求反',
      },
    ],
  },
  {
    name: '逻辑',
    functions: [
      {
        name: 'IF',
        description: '根据判断条件，返回正确或错误的值',
      },
      // {
      //   name: 'IFS',
      //   description: '检查是否满足一个或多个条件，且返回符合第一个 TRUE 条件的值',
      // },
      {
        name: 'AND',
        description:
          '返回逻辑值：如果所有参数值均为逻辑“true”，则返回逻辑“true”，反之返回逻辑“false',
      },
      {
        name: 'OR',
        description:
          '任何一个参数逻辑值为true，即返回true；只有当所有逻辑参数值为false，才返回false',
      },
      {
        name: 'XOR',
        description: '返回所有参数的异或值',
      },
      {
        name: 'NOT',
        description: '对参数逻辑值求反',
      },
    ],
  },
  {
    name: '数字',
    functions: [
      {
        name: 'AVERAGE',
        description: '计算所有参与运算字段的平均值',
      },
      {
        name: 'COUNT',
        description: '返回所有参与运算字段中值数字的数量',
      },
      {
        name: 'COUNTA',
        description: '返回所有参与运算字段中值不为空的数量',
      },
      {
        name: 'COUNTIF',
        description:
          'COUNTIF(表格[金额], 100)，可得到表格中金额为100的数据条数',
      },
      {
        name: 'MAX',
        description: '返回所有参与字段中的最大值',
      },
      {
        name: 'MIN',
        description: '返回所有参与字段中的最小值',
      },
      {
        name: 'ROUND',
        description: '将数字四舍五入到指定的位数',
      },
      {
        name: 'INT',
        description: '将数字向下取整',
      },
      {
        name: 'MOD',
        description: '返回两数相除的余数',
      },
      {
        name: 'PRODUCT',
        description: '返回所有参与字段中数值的乘积',
      },
      {
        name: 'SUM',
        description: '返回所有参与字段中数值的总和',
      },
      {
        name: 'SUMPRODUCT',
        description: '返回所有参与字段中数值的总和',
      },
      {
        name: 'SUMIF',
        description: '统计表格中符合条件的数值，并求和',
      },
      // {
      //   name: 'NUMBERVALUE',
      //   description: '返回文本中的数字',
      // },
      {
        name: 'ROUNDUP',
        description: '将数字保留指定的位数，最后一位向上取',
      },
      {
        name: 'ROUNDDOWN',
        description: '将数字保留指定的位数，最后一位向下取',
      },
      {
        name: 'POWER',
        description: '计算数字num的n次方，n可以为分数或者整数',
      },
      {
        name: 'LN',
        description: '计算指定数字的自然对数',
      },
      {
        name: 'SQRT',
        description: '计算指定数字的平方根',
      },
    ],
  },
  {
    name: '时间',
    functions: [
      {
        name: 'YEAR',
        description: '返回日期中的年份',
      },
      {
        name: 'MONTH',
        description: '返回日期中的月份',
      },
      {
        name: 'DAY',
        description: '返回日期在一个月中的第几天的数值',
      },
      {
        name: 'HOUR',
        description: '返回日期中的小时，日期字段必须精确到时间才可以计算出来',
      },
      {
        name: 'MINUTE',
        description: '返回日期中的分钟，日期字段必须精确到时间才可以计算出来',
      },
      {
        name: 'SECOND',
        description: '返回日期中的秒，日期字段必须精确到时间才可以计算出来',
      },
      {
        name: 'DATE',
        description:
          '将数字拼接成为年份，数字字段顺序为：年／月／日／时／分／秒',
      },
      {
        name: 'CURDATE',
        description: '返回当前日期',
      },
      {
        name: 'NOW',
        description: '返回当前时间，精确到时/分/秒',
      },
      {
        name: 'DAYS',
        description: '返回日期字段1与日期字段2的差值，单位为天',
      },
      {
        name: 'DATEDELTA',
        description: '将指定日期加/减指定天数，并返回目标日期',
      },
    ],
  },
];

export default functions;
