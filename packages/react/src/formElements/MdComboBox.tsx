import { DropdownMenu } from 'radix-ui';
import React, { useEffect, useState } from 'react';

import MdChevronIcon from '../icons/MdChevronIcon';
import MdCheckbox from './MdCheckbox';

export interface MdComboBoxOption {
  id: string;
  value: string;
}

export interface MdComboBoxProps {
  label?: string;
  options: MdComboBoxOption[];
  value?: string | string[];
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  size?: 'large' | 'medium' | 'small' | 'full';
  onSelect(_e: MdComboBoxOption): void;
}

const MdComboBox: React.FC<MdComboBoxProps> = ({
  label,
  options,
  value = [],
  multiple = false,
  disabled = false,
  placeholder = 'Velg verdi',
  size = 'large',
  onSelect,
}: MdComboBoxProps) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [displayValue, setDisplayValue] = useState(placeholder);

  useEffect(() => {
    if (Array.isArray(value)) {
      if (!multiple) {
        setChecked([value[0]]);
      } else {
        setChecked(value);
      }
    } else {
      setChecked([value]);
    }
  }, [value]);

  useEffect(() => {
    let displayValue = placeholder;
    if (!multiple) {
      const selectedOption = options.find(option => {
        return option.id === checked[0];
      });
      displayValue = selectedOption ? selectedOption.value : placeholder;
    }
    setDisplayValue(displayValue);
  }, [checked]);

  const handleSelect = (option: MdComboBoxOption) => {
    onSelect(option);
  };

  return (
    <div className={`md-combobox md-combobox--${size}`}>
      {label && label !== '' && <div className="md-combobox__label">{label}</div>}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="md-combobox__trigger" disabled={disabled}>
          <div className="md-combobox__trigger-content">
            {displayValue}
            {multiple && checked.length > 0 && <div className="md-combobox__selected-count">+{checked.length}</div>}
          </div>
          <MdChevronIcon className="md-combobox__trigger-icon" />
        </DropdownMenu.Trigger>

        <div className="md-combobox__portal" id="md-combobox__portal" />

        <DropdownMenu.Portal container={document.getElementById('md-combobox__portal')}>
          <DropdownMenu.Content align="start" className="md-combobox__content">
            {options.map(option => {
              const isChecked = checked.includes(option.id.toString());
              if (multiple) {
                return (
                  <DropdownMenu.CheckboxItem
                    key={`md-combobox-item-multi-${option.id}`}
                    className="md-combobox__checkbox-item"
                    checked={isChecked}
                    onCheckedChange={() => {
                      handleSelect(option);
                    }}
                  >
                    <MdCheckbox defaultChecked={isChecked} label={option.value} />
                  </DropdownMenu.CheckboxItem>
                );
              } else {
                return (
                  <DropdownMenu.Item
                    key={`md-combobox-item-${option.id}`}
                    className={`md-combobox__item ${isChecked ? 'md-combobox__item--selected' : ''}`}
                    onSelect={() => {
                      handleSelect(option);
                    }}
                    disabled={isChecked}
                  >
                    {option.value}
                  </DropdownMenu.Item>
                );
              }
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default MdComboBox;
