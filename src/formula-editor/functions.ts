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
        name: 'CONCATENATE',
        description: '将多个文字合并',
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
        name: 'NOT',
        description: '对参数逻辑值求反',
      },
      {
        name: 'SWITCH',
        description: '按多组条件匹配返回值',
      },
    ],
  },
  {
    name: '文字',
    functions: [
      {
        name: 'CONCATENATE',
        description: '将多个文字合并',
      },
      {
        name: 'LEFT',
        description: '从左边截取指定长度的文字',
      },
      {
        name: 'RIGHT',
        description: '从右边边截取指定长度的文字',
      },
      {
        name: 'MID',
        description: '截取指定位置的文字',
      },
      {
        name: 'REPLACE',
        description: '替换文本中的指定文字',
      },
      {
        name: 'TRIM',
        description: '移除文字头尾的空格',
      },
      {
        name: 'LEN',
        description: '后去文字的长度',
      },
      {
        name: 'LOWER',
        description: '转成小写文字',
      },
      {
        name: 'UPPER',
        description: '转成大写文字',
      },
      {
        name: 'EXACT',
        description: '文字进行精确匹配',
      },
      {
        name: 'FIND',
        description: '查找匹配文字的位置',
      },
      {
        name: 'NUMBERVALUE',
        description: '返回数字的文本',
      },
      {
        name: 'PROPER',
        description: '修正英文字母的大小写',
      },
      {
        name: 'REPT',
        description: '将文本按指定次数重复显示',
      },
      {
        name: 'SEARCH',
        description:
          '第二个文本字符串中查找第一个文本字符串，并返回第一个文本字符串的起始位置的编号',
      },
      {
        name: 'SPLIT',
        description: '返回一个从零开始、一维 数组 指定数量的子字符串',
      },
      {
        name: 'SUBSTITUTE',
        description: '在文本字符串中替换指定的文本',
      },
      {
        name: 'TRIM',
        description: '在文本中移除前导空格和尾随空格',
      },
    ],
  },
  {
    name: '数字',
    functions: [
      {
        name: 'ABS',
        description: '返回数字的绝对值',
      },
      {
        name: 'AVERAGE',
        description: '计算所有参与运算字段的平均值',
      },
      {
        name: 'CEILING',
        description:
          '将数字向上舍入（沿绝对值增大的方向）为最接近的指定基数的倍数',
      },
      {
        name: 'CEILINGMATH',
        description: '将数字向上舍入为最接近的整数或最接近的指定基数的倍数',
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
        name: 'EXP',
        description: '返回 e 的 n 次幂',
      },
      {
        name: 'FLOOR',
        description: '返回数字向下舍入为最接近指定基数的倍数',
      },
      {
        name: 'FLOORMATH',
        description: '将数字向下舍入为最接近的整数或最接近的指定基数的倍数',
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
      {
        name: 'ROUND',
        description: '将数字四舍五入到指定的位数',
      },
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
        name: 'LOG',
        description: '根据指定底数返回数字的对数',
      },
      {
        name: 'LOG10',
        description: '返回数字以 10 为底的对数',
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
        name: 'DATE',
        description:
          '将数字拼接成为年份，数字字段顺序为：年／月／日／时／分／秒',
      },
      {
        name: 'DAY',
        description: '返回日期在一个月中的第几天的数值',
      },
      {
        name: 'DAYS',
        description: '返回日期字段1与日期字段2的差值，单位为天',
      },
      {
        name: 'DAYS360',
        description: '按照一年 360 天的算法，返回两个日期间相差的天数',
      },
      {
        name: 'EDATE',
        description: '返回指定日期相隔指定月份的日期',
      },
      {
        name: 'EOMONTH',
        description: '返回指定日期相隔指定月份的最后一天',
      },
      {
        name: 'YEAR',
        description: '返回日期中的年份',
      },
      {
        name: 'MONTH',
        description: '返回日期中的月份',
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
        name: 'TODAY',
        description: '返回当前日期',
      },
      {
        name: 'NOW',
        description: '返回当前时间，精确到时/分/秒',
      },
      {
        name: 'WEEKDAY',
        description: '返回对应于某个日期的一周中的第几天',
      },
      {
        name: 'WEEKNUM',
        description: '返回指定日期在该年的周数',
      },
    ],
  },
];

export default functions;
