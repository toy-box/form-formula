import classNames from 'classnames';
import React, { FC, useCallback, useMemo } from 'react';
import '../styles/fieldVariable.less';

export interface IFieldVariableProps {
  label: string;
  value: string;
  type: string;
  pick?: (id: string) => void;
}

const FieldVariable: FC<IFieldVariableProps> = ({
  label,
  type,
  value,
  pick,
}) => {
  const handlePick = useCallback(() => {
    if (type === 'array' || type === 'object') {
      return;
    }
    pick && pick(value);
  }, []);
  const disabled = useMemo(() => type === 'array' || type === 'object', []);
  return (
    <div
      className={classNames('field-variable', { disabled })}
      onClick={handlePick}
    >
      {label}
    </div>
  );
};

export default FieldVariable;
