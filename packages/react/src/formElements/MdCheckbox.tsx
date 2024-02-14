/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from 'classnames';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface MdCheckboxProps {
  checked?: boolean | undefined;
  label?: any;
  value?: any;
  id?: string | number;
  disabled?: boolean;
  className?: string;
  onChange?(_e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(_e: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(_e: React.FocusEvent<HTMLInputElement>): void;
  [otherProps: string]: unknown;
}

const MdCheckbox: React.FunctionComponent<MdCheckboxProps> = ({
  checked = false,
  label,
  value,
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
  const checkboxId = id || uuidv4();
  return (
    <div className={classNames}>
      <input
        id={String(id || checkboxId) || undefined}
        className="md-checkbox__input"
        checked={checked}
        type="checkbox"
        value={value}
        disabled={disabled}
        {...otherProps}
      />
      <label className="md-checkbox__label" htmlFor={String(checkboxId) || undefined}>
        {label && label !== '' && <span className="md-checkbox__labelText">{label}</span>}
      </label>
    </div>
  );
};

export default MdCheckbox;
