'use client';

import * as Ariakit from '@ariakit/react';

import React, { useState, useId, useEffect } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdIconKeyboardArrowDown from '../icons-material/MdIconKeyboardArrowDown';
/*
import MdIconClose from '../icons-material/MdIconClose';
import MdCheckbox from './MdCheckbox'; */

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
  /**
   * v2.0.0: Replaces previous 'size'-prop for reducing overall width of whole component from large to either medium or small.
   */
  mode?: 'large' | 'medium' | 'small';
  helpText?: string;
  error?: boolean;
  errorText?: string;
  flip?: boolean;
  dropdownHeight?: number;
  /**
   * v3.0.0: Replaces previous 'onChange'-prop and use MdSelectOption as parameter rather than event.
   */
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
      // disabled = false,
      mode = 'large',
      helpText,
      error = false,
      errorText,
      flip = false,
      dropdownHeight,
      onSelectOption,
    },
    ref,
  ) => {
    const uuid = `select_${useId()}`;
    const comboBoxId = id || uuid;
    const isMultiSelect = Array.isArray(value);
    const [helpOpen, setHelpOpen] = useState(false);
    const [displayValue, setDisplayValue] = useState<string | null>(null);
    const store = Ariakit.useComboboxStore();

    useEffect(() => {
      let dv = placeholder;
      if (value && options) {
        let option: string | string[] | null = value as string;
        if (isMultiSelect) {
          option = value[0] || null;
        }
        dv =
          options.find(opt => {
            return opt.value === option;
          })?.text || placeholder;
      }
      setDisplayValue(dv);
    }, [value, isMultiSelect, placeholder, options]);

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    return (
      <div
        className={`md-select md-select--${mode} ${error && errorText && errorText !== '' && 'md-select--has-error'}`}
      >
        <Ariakit.SelectProvider
          value={value}
          store={store}
          setValue={val => {
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
            <Ariakit.Select className="md-select__button">
              {displayValue}
              <div className="md-select__button-right">
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
            className="md-select__popover"
            style={{ maxHeight: dropdownHeight && `${dropdownHeight}px` }}
          >
            {options &&
              options.map(option => {
                return (
                  <Ariakit.SelectItem
                    key={`${comboBoxId}_option_${option.value}`}
                    className="select-item"
                    value={option.value}
                  >
                    {option.text}
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
