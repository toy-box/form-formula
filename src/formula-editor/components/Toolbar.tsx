import React, { FC, ReactNode, useCallback } from 'react'
import { Tabs } from 'antd'
import FunctionStore from './FunctionStore'
import FxIcon from './FxIcon'
import VariableIcon from './VariableIcon'
import { FunctionGroup, Variable } from '../types'
import FieldVariable from './FieldVariable'


const { TabPane } = Tabs

export interface ToobarProps {
  functions?: FunctionGroup[]
  variables?: Variable[]
  insertFun?: (fn: string) => void
  insertVariable?: (variable: string) => void
}

const Toolbar: FC<ToobarProps> = ({ functions, variables = [], insertFun, insertVariable }) => {
  const prefixCls = 'formula-editor-toolbar'

  const TabNode = useCallback((props: { name: string, icon?: ReactNode }) => (
    <span>
      {
        props.icon
          ? <span role="img" className="anticon">{props.icon}</span>
          : null
      }
      {props.name}
    </span>
  ), [])
  
  return (
    <div className={prefixCls}>
      <Tabs defaultActiveKey="fx" centered>
        <TabPane tab={<TabNode name="函数" icon={<FxIcon />} />} key="fx">
          <FunctionStore dataSource={functions} check={insertFun} />
        </TabPane>
        <TabPane tab={<TabNode name="字段" icon={<VariableIcon />} />} key="field">
          {
            variables.map(variable =>
              <FieldVariable
                value={variable.value}
                label={variable.label}
                onClick={insertVariable}
              />)
          }
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Toolbar
