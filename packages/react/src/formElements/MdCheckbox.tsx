'use client';

import classnames from 'classnames';
import React, { useEffect, useId, useRef } from 'react';

export interface MdCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  indeterminate?: boolean;
}

export const MdCheckbox: React.FunctionComponent<MdCheckboxProps> = ({
  label,
  id,
  disabled,
  className = '',
  indeterminate,
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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate && !otherProps.checked;
    }
  }, [indeterminate, otherProps.checked]);

  return (
    <div className={classNames}>
      <input
        ref={inputRef}
        id={checkboxId || undefined}
        disabled={disabled}
        className="md-checkbox__input"
        type="checkbox"
        aria-checked={indeterminate && !otherProps.checked ? 'mixed' : (otherProps.checked || false)}
        {...otherProps}
      />
      <label className="md-checkbox__label" htmlFor={checkboxId || undefined}>
        {label && <span className="md-checkbox__labelText">{label}</span>}
      </label>
    </div>
  );
};

export default MdCheckbox;
