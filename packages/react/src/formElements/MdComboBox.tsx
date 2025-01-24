import { DropdownMenu } from 'radix-ui';
import React, { useEffect, useState } from 'react';

import MdChevronIcon from '../icons/MdChevronIcon';
import MdCheckbox from './MdCheckbox';

export interface MdComboBoxOption {
  id: string | number;
  value: string;
}

export interface MdComboBoxProps {
  label?: string;
  options: MdComboBoxOption[];
  value?: string | number | string[] | number[];
  multiple?: boolean;
  placeholder?: string;
  onSelect(_e: MdComboBoxOption): void;
}

const MdComboBox: React.FC<MdComboBoxProps> = ({
  label,
  options,
  value = [],
  multiple = false,
  placeholder = 'Velg verdi',
  onSelect,
}: MdComboBoxProps) => {
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    if (Array.isArray(value)) {
      if (!multiple) {
        setChecked([value[0].toString()]);
      }
      setChecked(
        value.map((s: number | string) => {
          return s.toString();
        }),
      );
    } else {
      setChecked([value.toString()]);
    }
  }, [value]);

  const handleSelect = (option: MdComboBoxOption) => {
    onSelect(option);
  };

  return (
    <div className="md-combobox">
      {label && label !== '' && <div className="md-combobox__label">{label}</div>}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="md-combobox__trigger">
          <div>{placeholder}</div>
          <MdChevronIcon className="md-combobox__trigger-icon" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content align="start" className="md-combobox__content">
            {options.map(option => {
              const isChecked = checked.includes(option.id.toString());
              if (multiple) {
                return (
                  <DropdownMenu.CheckboxItem
                    key={`md-combobox-item-muliti-${option.id}`}
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
