'use client';

import classnames from 'classnames';
import React, { useId } from 'react';

export interface MdCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export const MdCheckbox: React.FunctionComponent<MdCheckboxProps> = ({
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
      <input
        id={checkboxId || undefined}
        disabled={disabled}
        className="md-checkbox__input"
        type="checkbox"
        aria-checked={otherProps.checked || false}
        {...otherProps}
      />
      <label className="md-checkbox__label" htmlFor={checkboxId || undefined}>
        {label && <span className="md-checkbox__labelText">{label}</span>}
      </label>
    </div>
  );
};

export default MdCheckbox;
