'use client';

import * as Ariakit from '@ariakit/react';

import React, { useState, useId, useEffect } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdIconClose from '../icons-material/MdIconClose';
import MdIconKeyboardArrowDown from '../icons-material/MdIconKeyboardArrowDown';
import MdCheckbox from './MdCheckbox';

export interface MdSelectOption {
  text: string;
  value: string;
}

export interface MdSelectProps {
  label?: string | null;
  options?: MdSelectOption[];
  id?: string;
  name?: string;
  value: string | string[];
  placeholder?: string;
  disabled?: boolean;
  mode?: 'large' | 'medium' | 'small';
  helpText?: string;
  error?: boolean;
  errorText?: string;
  flip?: boolean;
  dropdownHeight?: number;
  allowReset?: boolean;
  onSelectOption(_value: string[] | string): void;
}

export const MdSelect = React.forwardRef<HTMLDivElement, MdSelectProps>(
  (
    {
      label,
      value,
      options,
      id,
      placeholder = 'Velg verdi',
      disabled = false,
      mode = 'large',
      helpText,
      error = false,
      errorText,
      flip = false,
      dropdownHeight,
      allowReset = false,
      onSelectOption,
    },
    ref,
  ) => {
    const uuid = `select_${useId()}`;
    const comboBoxId = id || uuid;
    const isMultiSelect = Array.isArray(value);
    const [helpOpen, setHelpOpen] = useState(false);
    const [selecteValues, setSelectedValues] = useState<string | string[]>(value);
    const [displayValue, setDisplayValue] = useState<string | null>(null);
    const store = Ariakit.useSelectStore();

    useEffect(() => {
      setSelectedValues(value);
    }, [value]);

    useEffect(() => {
      let dv = placeholder;
      if (selecteValues && options) {
        let option: string | string[] | null = selecteValues as string;
        if (isMultiSelect) {
          option = selecteValues[0] || null;
        }
        dv =
          options.find(opt => {
            return opt.value === option;
          })?.text || placeholder;
      }
      setDisplayValue(dv);
    }, [selecteValues, isMultiSelect, placeholder, options]);

    const onReset = (e: React.MouseEvent) => {
      const newValue = isMultiSelect ? [] : '';
      setSelectedValues(newValue);
      onSelectOption(newValue);
      e.stopPropagation();
    };

    const showReset = () => {
      if (allowReset) {
        if (isMultiSelect) {
          return selecteValues.length > 0;
        }
        return selecteValues !== '';
      }
      return false;
    };

    let ariaDescribedBy = helpText && helpText !== '' ? `md-combobox_help-text_${comboBoxId}` : undefined;
    ariaDescribedBy = error && errorText && errorText !== '' ? `md-combobox_error_${comboBoxId}` : ariaDescribedBy;

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    return (
      <div
        className={`md-select md-select--${mode} ${error && errorText && errorText !== '' && 'md-select--has-error'}`}
      >
        <Ariakit.SelectProvider
          value={value}
          store={store}
          setValue={val => {
            setSelectedValues(val);
            onSelectOption(val);
          }}
        >
          {showLabel && (
            <div className="md-select__label-wrapper">
              <div className="md-select__label">
                {label && label !== '' && <Ariakit.SelectLabel>{label}</Ariakit.SelectLabel>}
                {helpText && helpText !== '' && (
                  <div className="md-select__help-button">
                    <MdHelpButton
                      aria-label={`Hjelpetekst for ${label}`}
                      id={`md-select_help-button_${comboBoxId}`}
                      aria-expanded={helpOpen}
                      aria-controls={`md-select_help-text_${comboBoxId}`}
                      onClick={() => {
                        return setHelpOpen(!helpOpen);
                      }}
                      expanded={helpOpen}
                    />
                  </div>
                )}
              </div>
              {helpText && helpText !== '' && (
                <div className={`md-select__help-text ${helpOpen ? 'md-select__help-text--open' : ''}`}>
                  <MdHelpText
                    id={`md-select_help-text_${comboBoxId}`}
                    aria-labelledby={helpText && helpText !== '' ? `md-select_help-button_${comboBoxId}` : undefined}
                  >
                    {helpText}
                  </MdHelpText>
                </div>
              )}
            </div>
          )}
          <div className="md-select__button-wrapper">
            <Ariakit.Select
              disabled={disabled}
              store={store}
              render={<div />}
              aria-describedby={ariaDescribedBy}
              className="md-select__button"
            >
              {displayValue}
              <div className="md-select__button-right">
                <div>{isMultiSelect && selecteValues.length > 0 && `+${selecteValues.length}`}</div>
                {showReset() && (
                  <button
                    className="md-select__reset"
                    onClick={(e: React.MouseEvent) => {
                      return onReset(e);
                    }}
                    aria-label="Nullstill"
                  >
                    <MdIconClose aria-hidden="true" />
                  </button>
                )}
                <Ariakit.SelectArrow
                  className="md-select__button-icon"
                  render={<MdIconKeyboardArrowDown />}
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
              </div>
            </Ariakit.Select>
          </div>
          <Ariakit.SelectPopover
            ref={ref}
            sameWidth
            slide={false}
            gutter={-1}
            flip={flip}
            data-active-item={false}
            className="md-select__popover"
            style={{ maxHeight: dropdownHeight && `${dropdownHeight}px` }}
          >
            {options &&
              options.map(option => {
                let isChecked = false;
                if (isMultiSelect) {
                  isChecked = selecteValues.includes(option.value);
                } else {
                  isChecked = selecteValues === option.value;
                }

                return (
                  <Ariakit.SelectItem
                    key={`${comboBoxId}_option_${option.value}`}
                    className="md-select__item"
                    value={option.value}
                  >
                    {isMultiSelect ? (
                      <MdCheckbox
                        key={`checkbox_${option.value}_${selecteValues.toString()}`}
                        defaultChecked={isChecked}
                        label={option.text}
                        tabIndex={-1}
                      />
                    ) : (
                      option.text
                    )}
                  </Ariakit.SelectItem>
                );
              })}
          </Ariakit.SelectPopover>
        </Ariakit.SelectProvider>
      </div>
    );
  },
);

MdSelect.displayName = 'MdSelect';

export default MdSelect;
