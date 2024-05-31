/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from 'classnames';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface MdRadioButtonProps {
  checked?: boolean | undefined;
  label?: string;
  value?: any;
  id?: string | number;
  disabled?: boolean;
  className?: string;
  onChange(_e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(_e: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(_e: React.FocusEvent<HTMLInputElement>): void;
  [otherProps: string]: unknown;
}

const MdRadioButton: React.FunctionComponent<MdRadioButtonProps> = ({
  id,
  disabled,
  className,
  value,
  label,
  checked,
  ...otherProps
}: MdRadioButtonProps) => {
  const radioGroupId = id || uuidv4();
  const [,] = useState(false);

  const classNames = classnames(
    'md-radiobutton',
    {
      'md-radiobutton--disabled': !!disabled,
    },
    className,
  );

  return (
    <div className={classNames}>
      <span className="md-radiobutton__check-area">{checked && <span className="md-radiobutton__selected-dot" />}</span>
      <input
        id={String(radioGroupId) || undefined}
        type="radio"
        value={value}
        checked={checked}
        disabled={disabled}
        {...otherProps}
      />
      <label htmlFor={String(radioGroupId) || undefined}>{label && label !== '' && label}</label>
    </div>
  );
};

export default MdRadioButton;
