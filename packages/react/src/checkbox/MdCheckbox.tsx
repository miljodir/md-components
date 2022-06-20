import React from 'react';

interface MdCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: any;
}

const MdCheckbox = ({ label, value, ...otherProps }: MdCheckboxProps) => {
  return (
    <div className="md-checkbox">
      <input
        id="test"
        className="md-checkbox__input"
        type="checkbox"
        value={value}
        {...otherProps}
      />
      <label className="md-checkbox__label" htmlFor="test">
        <span className="md-checkbox__labelText">{label}</span>
      </label>
    </div>
  );
};

export default MdCheckbox;
