import React, { FC, useCallback, useMemo } from 'react';
import { Tree } from 'antd';
import { Variable } from '../types';
import FieldVariable from './FieldVariable';
import { DataNode } from 'rc-tree/lib/interface';

export interface FieldTreeProps {
  dataSource: Variable[];
  pick?: (value: string) => void;
}

function convert(variable: Variable, pick?: (value: string) => void): DataNode {
  return {
    title: (
      <FieldVariable
        type={variable.type}
        value={variable.value}
        label={variable.label}
        pick={pick}
      />
    ),
    key: variable.value,
    children: (variable.children || []).map((child) => convert(child, pick)),
  } as DataNode;
}

const FieldTree: FC<FieldTreeProps> = ({ dataSource, pick }) => {
  const treeData = useMemo(() => {
    return dataSource.map((v) => convert(v, pick));
  }, []);

  return <Tree treeData={treeData} selectable={false} />;
};

export default FieldTree;
