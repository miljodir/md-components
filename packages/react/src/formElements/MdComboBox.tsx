import { DropdownMenu } from 'radix-ui';
import React, { useEffect, useState, useId } from 'react';

import MdChevronIcon from '../icons/MdChevronIcon';
import MdCheckbox from './MdCheckbox';

export interface MdComboBoxOption {
  id: string;
  value: string;
}

export interface MdComboBoxProps {
  id?: string;
  label?: string;
  options: MdComboBoxOption[];
  value?: string | string[];
  multiple?: boolean;
  autocomplete?: boolean;
  disabled?: boolean;
  errorText?: string;
  placeholder?: string;
  size?: 'large' | 'medium' | 'small';
  onSelect(_e: MdComboBoxOption): void;
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
  const uuid = useId();
  const comboBoxId = id || uuid;
  const [filteredOptions, setFilteredOptions] = useState<MdComboBoxOption[]>(options);
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
    <div className={`md-combobox md-combobox--${size} ${errorText ? 'md-combobox--has-error' : ''}`}>
      {label && label !== '' && <div className="md-combobox__label">{label}</div>}
      <DropdownMenu.Root onOpenChange={e => console.log(e)}>
        <DropdownMenu.Trigger className="md-combobox__trigger" disabled={disabled}>
          <div className="md-combobox__trigger-content">
            {displayValue}
            {multiple && checked.length > 0 && <div className="md-combobox__selected-count">+{checked.length}</div>}
          </div>
          <MdChevronIcon className="md-combobox__trigger-icon" />
        </DropdownMenu.Trigger>

        <div className="md-combobox__portal" id={`md-combobox-portal-${comboBoxId}`} />

        <DropdownMenu.Portal container={document.getElementById(`md-combobox-portal-${comboBoxId}`)}>
          <DropdownMenu.Content align="start" className="md-combobox__content">
            {autocomplete && (
              <DropdownMenu.Item asChild>
                <input
                  type="text"
                  tabIndex={0}
                  onKeyDown={e => {
                    e.stopPropagation();
                  }}
                  placeholder="Søk.."
                  onChange={e => {
                    console.log('input change with e:', e);
                  }}
                  onClick={e => e.stopPropagation()}
                  onSelect={e => e.preventDefault()}
                />
              </DropdownMenu.Item>
            )}
            {filteredOptions.map(option => {
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
      <div className="md_combobox__error">{errorText}</div>
    </div>
  );
};

export default MdComboBox;
