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
  /**
   * v5.0.0: value is now either a string or an array of strings
   */
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
  /**
   * When `true`, the popover will be unmounted when it is hidden. This can be useful for performance reasons, but it may cause issues with animations or transitions.
   * @default false
   * @see https://ariakit.org/reference/select-popover#unmountonhide
   */
  unmountOnHide?: boolean;
  /**
   * v5.0.0: onSelectOption now returns either a string or an array of strings
   */
  onSelectOption(_value: string[] | string): void;
}

export const MdSelect: React.FC<MdSelectProps> = React.forwardRef<HTMLButtonElement, MdSelectProps>(
  (
    {
      label,
      value,
      options,
      id,
      placeholder = 'Velg verdi',
      disabled = false,
      mode = 'medium',
      helpText,
      error = false,
      errorText,
      flip = false,
      dropdownHeight,
      allowReset = false,
      onSelectOption,
      unmountOnHide,
      ...otherProps
    },
    ref,
  ) => {
    const uuid = `select_${useId()}`;
    const selectBoxId = id || uuid;
    const isMultiSelect = Array.isArray(value);
    const [helpOpen, setHelpOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState<string | string[]>(value);
    const [displayValue, setDisplayValue] = useState<string | null>(null);
    const store = Ariakit.useSelectStore();

    useEffect(() => {
      setSelectedValues(value);
    }, [value]);

    useEffect(() => {
      let dv = placeholder;
      if (selectedValues && options) {
        let option: string | string[] | null = selectedValues as string;
        if (isMultiSelect) {
          option = selectedValues[0] || null;
        }
        dv =
          options.find(opt => {
            return opt.value === option;
          })?.text || placeholder;
      }
      setDisplayValue(dv);
    }, [selectedValues, isMultiSelect, placeholder, options]);

    const onReset = (e: React.MouseEvent) => {
      const newValue = isMultiSelect ? [] : '';
      setSelectedValues(newValue);
      onSelectOption(newValue);
      e.stopPropagation();
    };

    const showReset = () => {
      if (allowReset) {
        if (isMultiSelect) {
          return selectedValues.length > 0;
        }
        return selectedValues !== '';
      }
      return false;
    };

    const toggle = (e: React.MouseEvent) => {
      store.toggle();
      e.stopPropagation();
    };

    let ariaDescribedBy = helpText && helpText !== '' ? `md-combobox_help-text_${selectBoxId}` : undefined;
    ariaDescribedBy = error && errorText && errorText !== '' ? `md-combobox_error_${selectBoxId}` : ariaDescribedBy;

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    return (
      <div
        className={`md-select md-select--${mode} ${error && errorText && errorText !== '' && 'md-select--has-error'}`}
      >
        <Ariakit.SelectProvider
          value={value}
          store={store}
          id={selectBoxId}
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
                      id={`md-select_help-button_${selectBoxId}`}
                      aria-expanded={helpOpen}
                      aria-controls={`md-select_help-text_${selectBoxId}`}
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
                    id={`md-select_help-text_${selectBoxId}`}
                    aria-labelledby={helpText && helpText !== '' ? `md-select_help-button_${selectBoxId}` : undefined}
                  >
                    {helpText}
                  </MdHelpText>
                </div>
              )}
            </div>
          )}
          <div className="md-select__button-wrapper">
            <Ariakit.Select
              ref={ref}
              disabled={disabled}
              store={store}
              render={<div />}
              aria-describedby={ariaDescribedBy}
              aria-pressed={Ariakit.useStoreState(store, 'open')}
              aria-expanded={Ariakit.useStoreState(store, 'open')}
              className="md-select__button"
              {...otherProps}
            >
              {displayValue}
              <div className="md-select__button-right">
                <div>{isMultiSelect && selectedValues.length > 0 && `+${selectedValues.length}`}</div>
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
                <button
                  onClick={(e: React.MouseEvent) => {
                    toggle(e);
                  }}
                  className="md-select__button-icon"
                >
                  <MdIconKeyboardArrowDown />
                </button>
              </div>
            </Ariakit.Select>
          </div>
          <Ariakit.SelectPopover
            unmountOnHide={unmountOnHide}
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
                  isChecked = selectedValues.includes(option.value);
                } else {
                  isChecked = selectedValues === option.value;
                }

                return (
                  <Ariakit.SelectItem
                    key={`${selectBoxId}_option_${option.value}`}
                    className="md-select__item"
                    value={option.value}
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
                  </Ariakit.SelectItem>
                );
              })}
          </Ariakit.SelectPopover>
        </Ariakit.SelectProvider>

        {error && errorText && errorText !== '' && (
          <div id={`md-select_error_${selectBoxId}`} className="md-select__error">
            {errorText}
          </div>
        )}
      </div>
    );
  },
);

MdSelect.displayName = 'MdSelect';

export default MdSelect;
