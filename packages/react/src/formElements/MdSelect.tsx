import classnames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import useDropdown from '../hooks/useDropdown';
import MdChevronIcon from '../icons/MdChevronIcon';
import MdXIcon from '../icons/MdXIcon';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';

export interface MdSelectOptionProps {
  text: string;
  value: string;
}

export interface MdSelectProps {
  label?: string | null;
  options?: MdSelectOptionProps[];
  id?: string | number | null | undefined;
  name?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  size?: string;
  helpText?: string;
  error?: boolean;
  errorText?: string;
  onChange(_e: MdSelectOptionProps): void;
  dropdownHeight?: number;
}

const MdSelect = React.forwardRef<HTMLButtonElement, MdSelectProps>(
  (
    {
      label,
      value,
      options,
      id = null,
      placeholder = 'Vennligst velg',
      disabled = false,
      size,
      helpText,
      error = false,
      errorText,
      onChange,
      dropdownHeight,
      ...otherProps
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useDropdown(dropdownRef, open, setOpen);

    const selectId = id || uuidv4();

    const classNames = classnames('md-select', {
      'md-select--open': !!open,
      'md-select--error': !!error,
      'md-select--disabled': !!disabled,
      'md-select--medium': size === 'medium',
      'md-select--small': size === 'small',
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

    const handleOptionClick = (option: MdSelectOptionProps) => {
      onChange(option);
      setOpen(false);
    };

    const isSelectedOption = (option: MdSelectOptionProps) => {
      return value && value !== '' && value == option.value;
    };

    const buttonClassNames = classnames('md-select__button', {
      'md-select__button--open': !!open,
      'md-select__button--error': !!error,
      'md-select__button--small': size === 'small',
    });

    const optionClass = (option: MdSelectOptionProps) => {
      return classnames('md-select__dropdown-item', {
        'md-select__dropdown-item--selected': isSelectedOption(option),
      });
    };

    return (
      <div className={classNames}>
        <div className="md-select__label">
          {label && label !== '' && <div id={`md-select_label_${selectId}`}>{label}</div>}
          {helpText && helpText !== '' && (
            <div className="md-select__help-button">
              <MdHelpButton
                ariaLabel={`Hjelpetekst for ${label}`}
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
            id={String(selectId) || undefined}
            aria-describedby={helpText && helpText !== '' ? `md-select_help-text_${selectId}` : undefined}
            className={buttonClassNames}
            type="button"
            tabIndex={0}
            onClick={() => {
              return !disabled && setOpen(!open);
            }}
            ref={ref}
            {...otherProps}
          >
            <div className="md-select__button-text">{displayValue}</div>
            <div aria-hidden="true" className="md-select__button-icon">
              <MdChevronIcon />
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
                        <MdXIcon aria-hidden="true" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </MdClickOutsideWrapper>

        {error && errorText && errorText !== '' && <div className="md-select__error">{errorText}</div>}
      </div>
    );
  },
);
MdSelect.displayName = 'MdSelect';

export default MdSelect;
