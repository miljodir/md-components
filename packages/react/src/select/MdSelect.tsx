import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface MdSelectOption {
  text: string;
  value: string;
}

export interface MdSelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string | null;
  options: MdSelectOption[];
  name: string;
}

const MdSelect: React.FunctionComponent<MdSelectProps> = ({
  label,
  value,
  options,
  name,
  ...otherProps
}: MdSelectProps) => {
  const uuid = React.useMemo(() => uuidv4(), []);
  return (
    <label className="md-select" id={uuid} htmlFor={name}>
      <span>{label}</span>
      <select
        className="md-select__select"
        value={value}
        name={name}
        {...otherProps}
      >
        {options.map(({ value, text }) => (
          <option value={value}>{text}</option>
        ))}
      </select>
    </label>
  );
};

export default MdSelect;
