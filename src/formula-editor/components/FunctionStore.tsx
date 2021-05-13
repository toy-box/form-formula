import React, { FC } from 'react';
import { Collapse } from 'antd';
import { FunctionGroup } from '../types';

import '../styles/functionStore.less';

const { Panel } = Collapse;


export interface FunctionStoreProps {
  dataSource?: FunctionGroup[];
  check?: (name: string) => void;
}


const FunctionStore: FC<FunctionStoreProps> = ({ dataSource = [], check }) => {
  const prefixCls = 'function-store';

  return (
    <Collapse className={prefixCls} bordered={false} defaultActiveKey={[0]} expandIconPosition="right" ghost>
      {
        dataSource.map(
          (fnGroup, index) => (
            <Panel className={`${prefixCls}-group`} header={fnGroup.name} key={index}>
              {
                fnGroup.functions.map((fn, index) => (
                  <div className="function-item" key={index} onClick={() => check && check(fn.name)}>
                    <div className="function-item__name">
                      {fn.name}
                    </div>
                    <div className="function-item__desc">
                      {fn.description}
                    </div>
                  </div>
                ))
              }
            </Panel>
          )
        )
      }
    </Collapse>
  );
}

export default FunctionStore;

