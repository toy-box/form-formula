import React, { FC } from 'react'
import '../styles/fieldVariable.less'

export interface IFieldVariableProps {
  label: string
  value: string
  onClick?: (id: string) => void
}

const FieldVariable: FC<IFieldVariableProps> = ({ label, value, onClick }) => {
  return <div className="field-variable" onClick={() => onClick && onClick(value)}>{label}</div>
}

export default FieldVariable
