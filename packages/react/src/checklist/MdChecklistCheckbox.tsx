import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface MdChecklistCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  value: any;
  checkedByDefault?: boolean;
}

const MdChecklistCheckbox = ({
  label,
  value,
  checkedByDefault,
  ...otherProps
}: MdChecklistCheckboxProps) => {
  const defaultChecked =
    checkedByDefault !== undefined
      ? checkedByDefault
      : otherProps.checked || false;
  const [checked, setChecked] = React.useState(defaultChecked);
  const uuid = uuidv4();
  return (
    <div className="md-checkbox">
      <input
        id={uuid}
        className="md-checkbox__input"
        type="checkbox"
        value={value}
        {...otherProps}
        checked={checked}
        onChange={(event) => {
          setChecked(!checked);
          if (otherProps.onChange) {
            otherProps.onChange(event);
          }
        }}
      />
      <label className="md-checkbox__label" htmlFor={uuid}>
        <span className="md-checkbox__labelText">{label}</span>
      </label>
    </div>
  );
};

export default MdChecklistCheckbox;
