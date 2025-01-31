import * as Ariakit from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import React, { useEffect, useMemo, useState, useTransition, useId } from 'react';
import MdChevronIcon from '../../icons/MdChevronIcon';
import MdZoomIcon from '../../icons/MdZoomIcon';
import MdCheckbox from '../MdCheckbox';
import MdHelpButton from '../../help/MdHelpButton';
import MdHelpText from '../../help/MdHelpText';

export interface MdComboBoxOption {
  id: string;
  value: string;
}

export interface MdComboBoxProps {
  id?: string;
  label?: string;
  options: MdComboBoxOption[];
  value: string[];
  disabled?: boolean;
  errorText?: string;
  placeholder?: string;
  helpText?: string;
  size?: 'large' | 'medium' | 'small';
  onSelect(_e: string[] | string): void;
}

/**
 * MdComboBox.
 *
 * @type {React.FC<MdComboBoxProps>}
 * @returns {React.ReactElement} MdCombobox.
 * @params id {string=} - The id of the combobox.
 * @params label {string=} - The label of the combobox.
 * @params options {MdComboBoxOption[]} - The options of the combobox.
 * @params value {string[] | string} - The value of the combobox. string for single select, string[] for multi select.
 * @params disabled {boolean=} - The disabled state of the combobox.
 * @params errorText {string=} - The error text of the combobox.
 * @params placeholder {string=} - The placeholder of the combobox.
 * @params size {string=} - The size of the combobox. 'large' | 'medium' | 'small'
 * @params onSelect {function} - The onSelect handler for change events.
 */

const MdComboBox: React.FC<MdComboBoxProps> = ({
  id,
  label,
  options,
  value,
  disabled = false,
  placeholder = 'Søk',
  size = 'medium',
  helpText,
  errorText,
  onSelect,
}: MdComboBoxProps): React.ReactElement => {
  const uuid = useId();
  const comboBoxId = id || uuid;
  const isMultiSelect = Array.isArray(value);
  const [isPending, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[] | string>(value);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    onSelect(selectedValues);
  }, [selectedValues]);

  const matches = useMemo(() => {
    return matchSorter(options, searchValue, { keys: ['value'], threshold: matchSorter.rankings.CONTAINS });
  }, [searchValue]);

  const getValueById = (id: string) => {
    const option = options.find(option => {
      return option.id === id;
    });
    return option ? option.value : placeholder;
  };

  let displayValue: string | string[] = placeholder;
  if (isMultiSelect) {
    displayValue = selectedValues.length > 0 ? getValueById(selectedValues[0]) : placeholder;
  } else if (selectedValues !== '') {
    displayValue = getValueById(selectedValues as string);
  }

  return (
    <div className={`md-combobox2 md-combobox2--${size} ${errorText && errorText !== '' && 'md-combobox2--has-error'}`}>
      <Ariakit.ComboboxProvider
        id={comboBoxId}
        selectedValue={selectedValues}
        setSelectedValue={setSelectedValues}
        setValue={val => {
          startTransition(() => {
            setSearchValue(val);
          });
        }}
      >
        {label && label !== '' && (
          <div className="md-combobox2__label-wrapper">
            <div className="md-combobox2__label">
              <Ariakit.ComboboxLabel>{label}</Ariakit.ComboboxLabel>
              {helpText && helpText !== '' && (
                <div className="md-combobox2__help-button">
                  <MdHelpButton
                    aria-label={`Hjelpetekst for ${label}`}
                    id={`md-combobox2_help-button_${comboBoxId}`}
                    aria-expanded={helpOpen}
                    aria-controls={`md-combobox2_help-text_${comboBoxId}`}
                    onClick={() => {
                      return setHelpOpen(!helpOpen);
                    }}
                    expanded={helpOpen}
                  />
                </div>
              )}
            </div>

            {helpText && helpText !== '' && (
              <div className={`md-combobox2__help-text ${helpOpen ? 'md-combobox2__help-text--open' : ''}`}>
                <MdHelpText
                  id={`md-combobox2_help-text_${comboBoxId}`}
                  aria-labelledby={helpText && helpText !== '' ? `md-combobox2_help-button_${comboBoxId}` : undefined}
                >
                  {helpText}
                </MdHelpText>
              </div>
            )}
          </div>
        )}

        <div className="md-combobox2__input-wrapper">
          <div className="md-combobox2__input--before">
            <MdZoomIcon />
          </div>
          <Ariakit.Combobox placeholder={displayValue} className="md-combobox2__input" disabled={disabled} />
          <div className="md-combobox2__input--after">
            <div>{isMultiSelect && selectedValues.length > 0 && `+${selectedValues.length}`}</div>
            <MdChevronIcon />
          </div>
        </div>

        <Ariakit.ComboboxPopover
          sameWidth
          gutter={-1}
          className="md-combobox2__popover"
          aria-busy={isPending}
          key={`popover_${selectedValues.toString()}`}
        >
          {matches &&
            matches.map(option => {
              let isChecked = false;
              if (isMultiSelect) {
                isChecked = selectedValues.includes(option.id);
              } else {
                isChecked = selectedValues === option.id;
              }

              return (
                <Ariakit.ComboboxItem
                  key={option.id}
                  value={option.id}
                  focusOnHover
                  setValueOnClick={false}
                  className="md-combobox2__checkbox-item"
                  aria-selected={isChecked}
                >
                  {isMultiSelect ? <MdCheckbox defaultChecked={isChecked} label={option.value} /> : option.value}
                </Ariakit.ComboboxItem>
              );
            })}
          {!matches.length && <div className="md-combobox2__checkbox-item">Ingen treff</div>}
        </Ariakit.ComboboxPopover>
      </Ariakit.ComboboxProvider>

      {errorText && errorText !== '' && (
        <div id={`md-combobox2_error_${comboBoxId}`} className="md-combobox2__error">
          {errorText}
        </div>
      )}
    </div>
  );
};
export default MdComboBox;
