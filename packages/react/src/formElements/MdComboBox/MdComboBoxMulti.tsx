import * as Ariakit from '@ariakit/react';
import React, { useEffect, useMemo, useState, useTransition, useId } from 'react';
import MdChevronIcon from '../../icons/MdChevronIcon';
import MdZoomIcon from '../../icons/MdZoomIcon';
import MdCheckbox from '../MdCheckbox';

export interface MdComboBoxOption {
  id: string;
  value: string;
}

export interface MdComboBoxProps {
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

const MdComboBoxMulti: React.FC<MdComboBoxProps> = ({
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
  const [isPending, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  useEffect(() => {
    onSelect(selectedValues);
  }, [selectedValues]);

  /* useEffect(() => {
    setSelectedValues(value);
  }, [value]); */

  // const matches = useMemo(() => matchSorter(list, searchValue), [searchValue]);

  return (
    <div className="md-combobox2">
      <Ariakit.ComboboxProvider
        selectedValue={selectedValues}
        setSelectedValue={setSelectedValues}
        setValue={value => {
          startTransition(() => {
            setSearchValue(value);
          });
        }}
      >
        <Ariakit.ComboboxLabel className="label">Your favorite food</Ariakit.ComboboxLabel>

        <div className="md-combobox2__input-wrapper">
          <div className="md-combobox2__input--before">
            <MdZoomIcon />
          </div>
          <Ariakit.Combobox placeholder="e.g., Apple, Burger" className="md-combobox2__input" />
          <div className="md-combobox2__input--after">
            <div>{selectedValues.length > 0 ? `+${selectedValues.length}` : ''}</div>
          </div>
        </div>

        <Ariakit.ComboboxPopover
          sameWidth
          gutter={0}
          className="md-combobox2__popover"
          aria-busy={isPending}
          key={`test_${selectedValues.length}`}
        >
          {options.map(option => {
            const isChecked = selectedValues.includes(option.id.toString());
            return (
              <Ariakit.ComboboxItem
                key={option.id}
                value={option.id}
                focusOnHover
                className="md-combobox2__checkbox-item"
              >
                <MdCheckbox defaultChecked={isChecked} label={option.value} />
              </Ariakit.ComboboxItem>
            );
          })}
          {!options.length && <div className="no-results">No results found</div>}
        </Ariakit.ComboboxPopover>
      </Ariakit.ComboboxProvider>
    </div>
  );
};
export default MdComboBoxMulti;
