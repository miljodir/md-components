'use client';

import classnames from 'classnames';
import React, { useEffect, useId, useRef, useState } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import useDropdown from '../hooks/useDropdown';
import MdIconChevronForward from '../icons-material/MdIconChevronForward';
import MdIconClose from '../icons-material/MdIconClose';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';

/**
 * 3.0.0: Replaces previous type MdSelectOptionProps.
 */
export interface MdSelectOption {
  text: string;
  value: string;
}

export interface MdSelectProps {
  label?: string | null;
  options?: MdSelectOption[];
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  /**
   * v2.0.0: Replaces previous 'size'-prop for reducing overall width of whole component from large to either medium or small.
   */
  mode?: 'large' | 'medium' | 'small';
  helpText?: string;
  error?: boolean;
  errorText?: string;
  dropdownHeight?: number;
  /**
   * v3.0.0: Replaces previous 'onChange'-prop and use MdSelectOption as parameter rather than event.
   */
  onSelectOption(_e: MdSelectOption): void;
}

const MdSelect = React.forwardRef<HTMLButtonElement, MdSelectProps>(
  (
    {
      label,
      value,
      options,
      id,
      placeholder = 'Vennligst velg',
      disabled = false,
      mode = 'large',
      helpText,
      error = false,
      errorText,
      onSelectOption,
      dropdownHeight,
      ...otherProps
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useDropdown(dropdownRef, open, setOpen);

    const uuid = useId();
    const selectId = id || uuid;

    const classNames = classnames('md-select', {
      'md-select--open': !!open,
      'md-select--error': !!error,
      'md-select--disabled': !!disabled,
      'md-select--medium': mode === 'medium',
      'md-select--small': mode === 'small',
    });

    const selectedOption =
      value && value !== ''
        ? options &&
          options.find(o => {
            return o.value === value;
          })
        : '';

    let displayValue = placeholder;
    if (selectedOption && selectedOption.value) {
      displayValue = selectedOption.text;
    }
    if (open) {
      displayValue = '';
    }

    useEffect(() => {
      document.addEventListener('keydown', onKeyDown, false);

      return () => {
        document.removeEventListener('keydown', onKeyDown, false);
      };
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (open) {
        const reg = /[a-z\Wæøå]+/gim;
        const key = e.key;
        if (key && reg.test(key) && key.length === 1) {
          const option = options?.find(o => {
            return o.text?.startsWith(key.toLowerCase()) || o.text?.startsWith(key.toUpperCase());
          });
          if (option) {
            /* Find corresponding button */
            const button = document.getElementById(`md-select-option-${selectId}-${option.value}`);
            if (button) {
              button.focus();
            }
          }
        }
      }
    };

    const handleOptionClick = (option: MdSelectOption) => {
      onSelectOption(option);
      setOpen(false);
    };

    const isSelectedOption = (option: MdSelectOption) => {
      return value && value !== '' && value == option.value;
    };

    const buttonClassNames = classnames('md-select__button', {
      'md-select__button--open': !!open,
      'md-select__button--error': !!error,
      'md-select__button--small': mode === 'small',
    });

    const optionClass = (option: MdSelectOption) => {
      return classnames('md-select__dropdown-item', {
        'md-select__dropdown-item--selected': isSelectedOption(option),
      });
    };

    let ariaDescribedBy = helpText && helpText !== '' ? `md-select_help-text_${selectId}` : undefined;
    ariaDescribedBy = error && errorText && errorText !== '' ? `md-select_error_${selectId}` : ariaDescribedBy;

    return (
      <div className={classNames}>
        {label && label !== '' && (
          <div className="md-select__label">
            {label && label !== '' && <div id={`md-select_label_${selectId}`}>{label}</div>}
            {helpText && helpText !== '' && (
              <div className="md-select__help-button">
                <MdHelpButton
                  aria-label={`Hjelpetekst for ${label}`}
                  id={`md-select_help-button_${selectId}`}
                  aria-expanded={helpOpen}
                  aria-controls={`md-select_help-text_${selectId}`}
                  onClick={() => {
                    return setHelpOpen(!helpOpen);
                  }}
                  expanded={helpOpen}
                />
              </div>
            )}
          </div>
        )}
        {helpText && helpText !== '' && (
          <div className={`md-select__help-text ${helpOpen ? 'md-select__help-text--open' : ''}`}>
            <MdHelpText
              id={`md-select_help-text_${selectId}`}
              aria-labelledby={helpText && helpText !== '' ? `md-select_help-button_${selectId}` : undefined}
            >
              {helpText}
            </MdHelpText>
          </div>
        )}

        <MdClickOutsideWrapper
          ref={dropdownRef}
          onClickOutside={() => {
            return setOpen(false);
          }}
          className="md-select__container"
        >
          <button
            role="combobox"
            aria-expanded={open}
            aria-controls={`md-select_dropdown_${selectId}`}
            aria-labelledby={label && label !== '' ? `md-select_label_${selectId}` : undefined}
            id={selectId}
            aria-describedby={ariaDescribedBy}
            className={buttonClassNames}
            type="button"
            tabIndex={0}
            onClick={() => {
              return !disabled && setOpen(!open);
            }}
            ref={ref}
            disabled={disabled}
            {...otherProps}
          >
            <div className="md-select__button-text">{displayValue}</div>
            <div aria-hidden="true" className="md-select__button-icon">
              <MdIconChevronForward transform={`rotate(${open ? '180' : '0'})`} />
            </div>
          </button>

          {options && options.length > 0 && (
            <div
              aria-labelledby={label && label !== '' ? `md-select_label_${selectId}` : undefined}
              role="listbox"
              className="md-select__dropdown"
              id={`md-select_dropdown_${selectId}`}
              style={{ maxHeight: dropdownHeight && `${dropdownHeight}px` }}
            >
              {options.map(option => {
                return (
                  <button
                    role="option"
                    aria-selected={!!isSelectedOption(option)}
                    key={`md-select-option-${selectId}-${option.value}`}
                    id={`md-select-option-${selectId}-${option.value}`}
                    type="button"
                    tabIndex={open ? 0 : -1}
                    className={optionClass(option)}
                    onClick={() => {
                      return open && handleOptionClick(option);
                    }}
                  >
                    <div className="md-select__dropdown-item-text">{option.text}</div>
                    {isSelectedOption(option) && (
                      <div className="md-select__dropdown-item-clear" title="Klikk for å fjerne valg">
                        <MdIconClose aria-hidden="true" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </MdClickOutsideWrapper>

        {error && errorText && errorText !== '' && (
          <div id={`md-select_error_${selectId}`} className="md-select__error">
            {errorText}
          </div>
        )}
      </div>
    );
  },
);
MdSelect.displayName = 'MdSelect';

export default MdSelect;
