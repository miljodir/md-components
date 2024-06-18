/* eslint-disable @typescript-eslint/ban-ts-comment */
import classnames from 'classnames';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MdInputChip from '../chips/MdInputChip';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import useDropdown from '../hooks/useDropdown';
import MdChevronIcon from '../icons/MdChevronIcon';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';
import MdCheckbox from './MdCheckbox';

export interface MdMultiSelectOptionProps {
  text: string | number;
  value: string | number;
}

export interface MdMultiSelectProps {
  label?: string | null;
  options?: MdMultiSelectOptionProps[];
  selected?: MdMultiSelectOptionProps[];
  placeholder?: string;
  disabled?: boolean;
  size?: string;
  helpText?: string;
  error?: boolean;
  errorText?: string;
  showChips?: boolean;
  closeOnSelect?: boolean;
  id?: string | null | undefined;
  onChange?(_e: React.ChangeEvent): void;
  dropdownHeight?: number;
}

const MdMultiSelect = React.forwardRef<HTMLButtonElement, MdMultiSelectProps>(
  (
    {
      label,
      options = [],
      selected = [],
      placeholder = 'Vennligst velg',
      disabled = false,
      size,
      helpText,
      error,
      errorText,
      showChips = false,
      closeOnSelect = false,
      id,
      onChange,
      dropdownHeight,
      ...otherProps
    },
    ref,
  ) => {
    const multiSelectId = id || uuidv4();
    const [open, setOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useDropdown(dropdownRef, open, setOpen);

    let hasMultipleSelected = false;

    const classNames = classnames('md-select', {
      'md-multiselect--open': !!open,
      'md-multiselect--disabled': !!disabled,
      'md-multiselect--error': !!error,
      'md-multiselect--medium': size === 'medium',
      'md-multiselect--small': size === 'small',
    });

    const buttonClassNames = classnames('md-multiselect__button', {
      'md-multiselect__button--open': !!open,
      'md-multiselect--small': size === 'small',
    });

    const dropDownClassNames = classnames('md-multiselect__dropdown', {
      'md-multiselect__dropdown--open': !!open,
    });

    const optionClass = (option: MdMultiSelectOptionProps) => {
      return classnames('md-multiselect__dropdown-item', {
        'md-multiselect__dropdown-item--selected': optionIsChecked(option),
      });
    };

    const optionIsChecked = (option: MdMultiSelectOptionProps) => {
      const isChecked =
        selected &&
        selected.length &&
        selected.find(item => {
          return item.value === option.value;
        });
      return isChecked && isChecked !== undefined;
    };

    let displayValue: string | number = placeholder;
    const selectedOptionsFull: MdMultiSelectOptionProps[] = [];
    if (!open && selected && selected.length > 0) {
      const findFirstOption = options.find(option => {
        return option.value === selected[0].value;
      });
      if (findFirstOption) {
        displayValue = findFirstOption.text;
      }
      if (selected.length > 1) {
        hasMultipleSelected = true;
      }

      selected.forEach(item => {
        const opt = options.find(option => {
          return option.value === item.value;
        });
        if (opt) {
          selectedOptionsFull.push(opt);
        }
      });
    }

    const handleOptionClick = (e: React.ChangeEvent) => {
      if (onChange) {
        onChange(e);
      }
      if (closeOnSelect) {
        setOpen(false);
      }
    };

    const handleChipClick = (option: MdMultiSelectOptionProps) => {
      const dataset = {
        value: option.value,
        text: option.text,
      };
      const event = {
        target: {
          value: option.value,
          dataset: dataset,
        },
      } as unknown as React.ChangeEvent;

      handleOptionClick(event);
    };

    return (
      <div className={classNames}>
        {label && label !== '' && (
          <div className="md-multiselect__label">
            {label && label !== '' && <div id={`md-multiselect_label_${multiSelectId}`}>{label}</div>}
            {helpText && helpText !== '' && (
              <div className="md-multiselect__help-button">
                <MdHelpButton
                  aria-label={`Hjelpetekst for ${label}`}
                  id={`md-multiselect_help-button_${multiSelectId}`}
                  aria-expanded={helpOpen}
                  aria-controls={`md-multiselect_help-text_${multiSelectId}`}
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
          <div className={`md-multiselect__help-text ${helpOpen ? 'md-multiselect__help-text--open' : ''}`}>
            <MdHelpText
              id={`md-multiselect_help-text_${multiSelectId}`}
              aria-labelledby={helpText && helpText !== '' ? `md-multiselect_help-button_${multiSelectId}` : undefined}
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
          className="md-multiselect__dropdown-wrapper"
        >
          <button
            role="combobox"
            aria-expanded={open}
            aria-controls={`md-multiselect_dropdown_${multiSelectId}`}
            aria-labelledby={label && label !== '' ? `md-multiselect_label_${multiSelectId}` : undefined}
            id={multiSelectId}
            aria-describedby={helpText && helpText !== '' ? `md-multiselect_help-text_${multiSelectId}` : undefined}
            className={buttonClassNames}
            type="button"
            tabIndex={0}
            onClick={() => {
              return !disabled && setOpen(!open);
            }}
            ref={ref}
            {...otherProps}
          >
            <div className="md-multiselect__button-text">{displayValue}</div>
            {hasMultipleSelected && !open && (
              <div className="md-multiselect__button-hasmultiple">+{selected.length - 1}</div>
            )}
            <div aria-hidden="true" className="md-multiselect__button-icon">
              <MdChevronIcon transform={`rotate(${open ? '180' : '0'})`} />
            </div>
          </button>

          {options && options.length > 0 && (
            <div
              aria-labelledby={label && label !== '' ? `md-multiselect_label_${multiSelectId}` : undefined}
              role="listbox"
              id={`md-multiselect_dropdown_${multiSelectId}`}
              className={dropDownClassNames}
              style={{ maxHeight: dropdownHeight ? `${dropdownHeight}px` : 'auto' }}
            >
              {options.map(option => {
                return (
                  <div key={`checkbox_key_${multiSelectId}_${option.value}`} className={optionClass(option)}>
                    <MdCheckbox
                      role="option"
                      aria-selected={!!optionIsChecked(option)}
                      label={option.text}
                      tabIndex={open ? 0 : -1}
                      checked={!!optionIsChecked(option)}
                      value={option.value}
                      id={`checkbox_${multiSelectId}_${option.value}`}
                      disabled={!!disabled}
                      data-value={option.value}
                      data-text={option.text}
                      onKeyDown={(e: React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') {
                          return handleOptionClick(e);
                        }
                      }}
                      onChange={(e: React.ChangeEvent) => {
                        return handleOptionClick(e);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </MdClickOutsideWrapper>

        {error && errorText && errorText !== '' && <div className="md-multiselect__error">{errorText}</div>}

        {!open && showChips && selectedOptionsFull.length > 0 && (
          <div className="md-multiselect__chips">
            {selectedOptionsFull.map(chip => {
              return (
                <MdInputChip
                  key={`multiselect_chip_${multiSelectId}_${chip.value}`}
                  label={chip.text.toString()}
                  id={`checkbox_chip_${multiSelectId}_${chip.value}`}
                  disabled={disabled}
                  onClick={() => {
                    return handleChipClick(chip);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

MdMultiSelect.displayName = 'MdMultiSelect';
export default MdMultiSelect;
