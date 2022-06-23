import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface MdCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: any;
}

const MdCheckbox = ({ label, value, ...otherProps }: MdCheckboxProps) => {
  const uuid = uuidv4();
  return (
    <div className="md-checkbox">
      <input
        id={uuid}
        className="md-checkbox__input"
        type="checkbox"
        value={value}
        {...otherProps}
      />
      {label && (
        <label className="md-checkbox__label" htmlFor={uuid}>
          <span className="md-checkbox__labelText">{label}</span>
        </label>
      )}
    </div>
  );
};

export default MdCheckbox;
