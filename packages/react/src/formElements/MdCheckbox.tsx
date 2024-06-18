/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from 'classnames';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface MdCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: any;
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
  const checkboxId = id || uuidv4();
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
