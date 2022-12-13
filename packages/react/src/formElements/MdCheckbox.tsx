import React from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export interface MdCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  label?: string | null;
  value?: string | null;
  id?: string | number;
  disabled?: boolean;
  className?: string;
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
  const classNames = classnames('md-checkbox', {
      'md-checkbox--disabled': !!disabled
    },
    className
  );
  const checkboxId = id || uuidv4();
  return (
    <div className={classNames}>
      <input
        id={id || checkboxId}
        className="md-checkbox__input"
        checked={checked}
        type="checkbox"
        value={value}
        disabled={disabled}
        {...otherProps}
      />
      <label className="md-checkbox__label" htmlFor={checkboxId}>
        {label && label !== '' && <span className="md-checkbox__labelText">{label}</span>}
      </label>
    </div>
  );
};

export default MdCheckbox;
