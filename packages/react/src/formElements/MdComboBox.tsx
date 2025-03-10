'use client';

import * as Ariakit from '@ariakit/react';

import React, { useMemo, useState, useId, useTransition, useEffect } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdIconClose from '../icons-material/MdIconClose';
import MdIconKeyboardArrowDown from '../icons-material/MdIconKeyboardArrowDown';
import MdIconSearch from '../icons-material/MdIconSearch';
import MdLoadingSpinner from '../loadingSpinner/MdLoadingSpinner';
import MdCheckbox from './MdCheckbox';

export interface MdComboBoxOption {
  value: string;
  text: string;
}

export interface MdComboBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  options: MdComboBoxOption[];
  defaultOptions?: MdComboBoxOption[];
  value: string | string[];
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  placeholder?: string;
  helpText?: string;
  numberOfElementsShown?: number;
  isSearching?: boolean;
  mode?: 'large' | 'medium' | 'small';
  noResultsText?: string;
  dropdownHeight?: number;
  prefixIcon?: React.ReactNode;
  hidePrefixIcon?: boolean;
  allowReset?: boolean;
  resetButtonTitle?: string;
  flip?: boolean;
  onSelectOption(_value: string[] | string): void;
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
 * @params error {boolean=} - The error state of the combobox.
 * @params errorText {string=} - The error text of the combobox.
 * @params placeholder {string=} - The placeholder of the combobox.
 * @params mode {string=} - The size of the combobox. 'large' | 'medium' | 'small'
 * @params onSelectOption {function} - The onSelectOption handler for change events.
 * @params helpText {string=} - The help text of the combobox.
 * @params noResultsText {string=} - The text to display if no results are found.
 * @params dropdownHeight {number=} - The height of the dropdown.
 * @params prefixIcon {React.ReactNode=} - The prefix icon of the combobox.
 * @params hidePrefixIcon {boolean=} - The hide prefix icon of the combobox.
 * @params isSearching {boolean=} - The isSearching state of the combobox.
 * @params numberOfElementsShown {number=} - The number of elements shown in the dropdown.
 * @params allowReset {boolean=} - The allowReset state of the combobox.
 * @params resetButtonTitle {string=} - The title of the reset button.
 * @params flip {boolean=} - Allow popover to flip to the opposite side when it overflows.
 */

const MdComboBox: React.FC<MdComboBoxProps> = React.forwardRef<HTMLInputElement, MdComboBoxProps>(
  (
    {
      id,
      label,
      options,
      defaultOptions,
      value,
      disabled = false,
      placeholder = 'Søk',
      numberOfElementsShown,
      mode = 'medium',
      helpText,
      error = false,
      errorText,
      noResultsText = 'Ingen treff',
      dropdownHeight,
      prefixIcon,
      isSearching = false,
      hidePrefixIcon = false,
      allowReset = false,
      resetButtonTitle = 'Nullstill',
      flip = false,
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
      setSelectedValues(value);
      if (!value) {
        setSearchValue('');
      }
    }, [value]);

    const matches = useMemo(() => {
      if (!searchValue && defaultOptions && defaultOptions.length > 0) {
        return defaultOptions;
      }

      const results = options?.filter(o => {
        return o.text?.toLowerCase().includes(searchValue.toLowerCase() || '');
      });
      return numberOfElementsShown ? results.slice(0, numberOfElementsShown) : results;
    }, [searchValue, defaultOptions, options, numberOfElementsShown]);

    const getValueById = (value: string) => {
      const option = options.find(option => {
        return option.value === value;
      });
      return option ? option.text : placeholder;
    };

    const onReset = () => {
      const newValue = isMultiSelect ? [] : '';
      setSearchValue('');
      setSelectedValues(newValue);
      onSelectOption(newValue);
    };

    let displayValue: string | string[] = placeholder;
    if (isMultiSelect) {
      displayValue = selectedValues.length > 0 ? getValueById(selectedValues[0]) : placeholder;
    } else if (selectedValues !== '') {
      displayValue = getValueById(selectedValues as string);
    }

    let ariaDescribedBy = helpText && helpText !== '' ? `md-combobox_help-text_${comboBoxId}` : undefined;
    ariaDescribedBy = error && errorText && errorText !== '' ? `md-combobox_error_${comboBoxId}` : ariaDescribedBy;

    return (
      <div
        className={`md-combobox md-combobox--${mode} ${
          error && errorText && errorText !== '' && 'md-combobox--has-error'
        } ${value && value !== '' && (isMultiSelect ? value.length > 0 : true) && 'md-combobox--has-value'}`}
      >
        <Ariakit.ComboboxProvider
          id={comboBoxId}
          selectedValue={selectedValues}
          setSelectedValue={values => {
            setSelectedValues(values);
            onSelectOption(values);
          }}
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

          <div className={`md-combobox__input-wrapper ${disabled ? 'md-combobox__input-wrapper--disabled' : ''}`}>
            {!hidePrefixIcon && (
              <div className="md-combobox__input--before">
                {isSearching ? <MdLoadingSpinner size={16} /> : prefixIcon ? prefixIcon : <MdIconSearch />}
              </div>
            )}
            <Ariakit.Combobox
              ref={ref}
              placeholder={displayValue}
              className={`md-combobox__input ${hidePrefixIcon && 'md-combobox__input--no-prefix-icon'}`}
              disabled={disabled}
              aria-describedby={ariaDescribedBy}
              value={searchValue}
              {...otherProps}
            />
            <div className="md-combobox__input--after">
              <div>{isMultiSelect && selectedValues.length > 0 && `+${selectedValues.length}`}</div>
              {allowReset && (selectedValues.length > 0 || searchValue !== '') && (
                <button
                    className="md-combobox__reset"
                    onClick={() => {
                        return onReset()
                    }}
                    aria-label={resetButtonTitle}
                >
                  <MdIconClose aria-hidden="true" />
                </button>
              )}
              <MdIconKeyboardArrowDown className="md-combobox__input-arrow" />
            </div>
          </div>

          <Ariakit.ComboboxPopover
            id={`${comboBoxId}_popover`}
            sameWidth
            slide={false}
            gutter={-1}
            flip={flip}
            className="md-combobox__popover"
            aria-busy={isPending}
            style={{ maxHeight: dropdownHeight && `${dropdownHeight}px` }}
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
                    onClick={() => {
                      if (!isMultiSelect) {
                        setSearchValue(option.text);
                      }
                    }}
                  >
                    {isMultiSelect ? (
                      <MdCheckbox
                        key={`checkbox_${option.value}_${selectedValues.toString()}`}
                        defaultChecked={isChecked}
                        label={option.text}
                        tabIndex={-1}
                      />
                    ) : (
                      option.text
                    )}
                  </Ariakit.ComboboxItem>
                );
              })}
            {!matches.length && (
              <div className="md-combobox__checkbox-item md-combobox__checkbox-item--no-result">{noResultsText}</div>
            )}
          </Ariakit.ComboboxPopover>
        </Ariakit.ComboboxProvider>

        {error && errorText && errorText !== '' && (
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
