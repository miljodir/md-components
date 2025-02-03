import * as Ariakit from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import React, { useEffect, useMemo, useState, useTransition, useId } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdChevronIcon from '../icons/MdChevronIcon';
import MdZoomIcon from '../icons/MdZoomIcon';
import MdCheckbox from './MdCheckbox';

export interface MdComboBoxOption {
  value: string;
  text: string;
}

export interface MdComboBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  options: MdComboBoxOption[];
  value: string[];
  disabled?: boolean;
  errorText?: string;
  placeholder?: string;
  helpText?: string;
  mode?: 'large' | 'medium' | 'small';
  noResultsText?: string;
  onSelectOption(_e: string[] | string): void;
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
 * @params mode {string=} - The size of the combobox. 'large' | 'medium' | 'small'
 * @params onSelectOption {function} - The onSelectOption handler for change events.
 */

const MdComboBox: React.FC<MdComboBoxProps> = React.forwardRef<HTMLInputElement, MdComboBoxProps>(
  (
    {
      id,
      label,
      options,
      value,
      disabled = false,
      placeholder = 'Søk',
      mode = 'medium',
      helpText,
      errorText,
      noResultsText = 'Ingen treff',
      onSelectOption,
      ...otherProps
    },
    ref,
  ) => {
    const uuid = `combobox_${useId()}`;
    const comboBoxId = id || uuid;
    const isMultiSelect = Array.isArray(value);
    const [isPending, startTransition] = useTransition();
    const [searchValue, setSearchValue] = useState('');
    const [selectedValues, setSelectedValues] = useState<string[] | string>(value);
    const [helpOpen, setHelpOpen] = useState(false);

    useEffect(() => {
      onSelectOption(selectedValues);
    }, [selectedValues]);

    const matches = useMemo(() => {
      return matchSorter(options, searchValue, { keys: ['value'], threshold: matchSorter.rankings.CONTAINS });
    }, [searchValue]);

    const getValueById = (value: string) => {
      const option = options.find(option => {
        return option.value === value;
      });
      return option ? option.text : placeholder;
    };

    let displayValue: string | string[] = placeholder;
    if (isMultiSelect) {
      displayValue = selectedValues.length > 0 ? getValueById(selectedValues[0]) : placeholder;
    } else if (selectedValues !== '') {
      displayValue = getValueById(selectedValues as string);
    }

    let ariaDescribedBy = helpText && helpText !== '' ? `md-combobox_help-text_${comboBoxId}` : undefined;
    ariaDescribedBy = errorText && errorText !== '' ? `md-combobox_error_${comboBoxId}` : ariaDescribedBy;

    return (
      <div className={`md-combobox md-combobox--${mode} ${errorText && errorText !== '' && 'md-combobox--has-error'}`}>
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
            <div className="md-combobox__label-wrapper">
              <div className="md-combobox__label">
                <Ariakit.ComboboxLabel>{label}</Ariakit.ComboboxLabel>
                {helpText && helpText !== '' && (
                  <div className="md-combobox__help-button">
                    <MdHelpButton
                      aria-label={`Hjelpetekst for ${label}`}
                      id={`md-combobox_help-button_${comboBoxId}`}
                      aria-expanded={helpOpen}
                      aria-controls={`md-combobox_help-text_${comboBoxId}`}
                      onClick={() => {
                        return setHelpOpen(!helpOpen);
                      }}
                      expanded={helpOpen}
                    />
                  </div>
                )}
              </div>

              {helpText && helpText !== '' && (
                <div className={`md-combobox__help-text ${helpOpen ? 'md-combobox__help-text--open' : ''}`}>
                  <MdHelpText
                    id={`md-combobox_help-text_${comboBoxId}`}
                    aria-labelledby={helpText && helpText !== '' ? `md-combobox_help-button_${comboBoxId}` : undefined}
                  >
                    {helpText}
                  </MdHelpText>
                </div>
              )}
            </div>
          )}

          <div className="md-combobox__input-wrapper">
            <div className="md-combobox__input--before">
              <MdZoomIcon />
            </div>
            <Ariakit.Combobox
              ref={ref}
              placeholder={displayValue}
              className="md-combobox__input"
              disabled={disabled}
              aria-describedby={ariaDescribedBy}
              {...otherProps}
            />
            <div className="md-combobox__input--after">
              <div>{isMultiSelect && selectedValues.length > 0 && `+${selectedValues.length}`}</div>
              <MdChevronIcon />
            </div>
          </div>

          <Ariakit.ComboboxPopover
            id={`${comboBoxId}_popover`}
            key={`popover_${selectedValues.toString()}`}
            sameWidth
            autoFocusOnShow={false}
            gutter={-1}
            className="md-combobox__popover"
            aria-busy={isPending}
          >
            {matches &&
              matches.map(option => {
                let isChecked = false;
                if (isMultiSelect) {
                  isChecked = selectedValues.includes(option.value);
                } else {
                  isChecked = selectedValues === option.value;
                }

                return (
                  <Ariakit.ComboboxItem
                    key={`combobox_item_${option.value}`}
                    value={option.value}
                    focusOnHover
                    setValueOnClick={false}
                    className="md-combobox__checkbox-item"
                    aria-selected={isChecked}
                  >
                    {isMultiSelect ? (
                      <MdCheckbox defaultChecked={isChecked} label={option.text} tabIndex={-1} />
                    ) : (
                      option.text
                    )}
                  </Ariakit.ComboboxItem>
                );
              })}
            {!matches.length && <div className="md-combobox__checkbox-item">{noResultsText}</div>}
          </Ariakit.ComboboxPopover>
        </Ariakit.ComboboxProvider>

        {errorText && errorText !== '' && (
          <div id={`md-combobox_error_${comboBoxId}`} className="md-combobox__error">
            {errorText}
          </div>
        )}
      </div>
    );
  },
);

MdComboBox.displayName = 'MdComboBox';

export default MdComboBox;
