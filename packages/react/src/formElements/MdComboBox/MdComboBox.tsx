import React from 'react';
import MdComboBoxMulti from './MdComboBoxMulti';

interface MdComboBoxOption {
  id: string;
  value: string;
}

interface MdComboBoxProps {
  id?: string;
  label?: string;
  options: MdComboBoxOption[];
  value?: string[];
  multiple?: boolean;
  autocomplete?: boolean;
  disabled?: boolean;
  errorText?: string;
  placeholder?: string;
  size?: 'large' | 'medium' | 'small';
  onSelect(_e: string[]): void;
}

const MdComboBox: React.FC<MdComboBoxProps> = ({
  id,
  label,
  options,
  value = [],
  multiple = false,
  autocomplete = false,
  disabled = false,
  placeholder = 'Velg verdi',
  size = 'medium',
  errorText,
  onSelect,
}: MdComboBoxProps) => {
  return (
    <MdComboBoxMulti
      {...{ id, label, options, value, multiple, autocomplete, disabled, placeholder, size, errorText, onSelect }}
    />
  );
};

export default MdComboBox;
