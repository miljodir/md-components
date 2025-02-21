'use client';

import classnames from 'classnames';
import React, { useId } from 'react';

export interface MdCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const MdCheckbox: React.FunctionComponent<MdCheckboxProps> = ({
  label,
  id,
  disabled,
  className = '',
  ...otherProps
}: MdCheckboxProps) => {
  const classNames = classnames(
    'md-checkbox',
    {
      'md-checkbox--disabled': !!disabled,
    },
    className,
  );
  const uuid = useId();
  const checkboxId = id || uuid;
  return (
    <div className={classNames}>
      <input id={id || checkboxId || undefined} className="md-checkbox__input" type="checkbox" {...otherProps} />
      <label className="md-checkbox__label" htmlFor={checkboxId || undefined}>
        {label && label !== '' && <span className="md-checkbox__labelText">{label}</span>}
      </label>
    </div>
  );
};

export default MdCheckbox;
