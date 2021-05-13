import React, { FC } from 'react';
import { Tabs } from 'antd';
import FunctionStore from './FunctionStore';
import { FunctionGroup, Variable } from '../types';


const { TabPane } = Tabs;

export interface ToobarProps {
  functions?: FunctionGroup[];
  variables?: Variable[];
  insertFun?: (fn: string) => void;
}

const Toolbar: FC<ToobarProps> = ({ functions, variables, insertFun }) => {
  const prefixCls = 'formula-editor-toolbar';

  return (
    <div className={prefixCls}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="函数" key="1">
          <FunctionStore dataSource={functions} check={insertFun} />
        </TabPane>
        <TabPane tab="字段" key="2">
          all fields
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Toolbar;
