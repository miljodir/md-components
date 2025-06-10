'use client';

import classnames from 'classnames';
import React, { useId, useRef, useState } from 'react';
import MdInputChip from '../chips/MdInputChip';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import useDropdown from '../hooks/useDropdown';
import MdIconChevronForward from '../icons-material/MdIconChevronForward';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';
import MdCheckbox from './MdCheckbox';

/**
 * v3.0.0: Replaces previous type MdMultiSelectOptionProps.
 */
export interface MdMultiSelectOption {
  text: string;
  value: string;
}

export interface MdMultiSelectProps {
  label?: string | null;
  options?: MdMultiSelectOption[];
  /**
   * v3.0.0: Replaces previous 'selected'-prop.
   */
  selectedOptions?: MdMultiSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  /**
   * v2.0.0: Replaces previous 'size'-prop for reducing overall width of whole component from large to either medium or small.
   */
  mode?: 'large' | 'medium' | 'small';
  helpText?: string;
  error?: boolean;
  errorText?: string;
  showChips?: boolean;
  closeOnSelect?: boolean;
  id?: string;
  dropdownHeight?: number;
  /**
   * 3.0.0: Replaces previous 'onChange'-prop and use MdMultiSelectOption as parameter rather than event.
   */
  onSelectOption?(_option: MdMultiSelectOption): void;
}

export const MdMultiSelect = React.forwardRef<HTMLButtonElement, MdMultiSelectProps>(
  (
    {
      label,
      options = [],
      selectedOptions = [],
      placeholder = 'Vennligst velg',
      disabled = false,
      mode = 'large',
      helpText,
      error,
      errorText,
      showChips = false,
      closeOnSelect = false,
      id,
      onSelectOption,
      dropdownHeight,
      ...otherProps
    },
    ref,
  ) => {
    // eslint-disable-next-line no-console
    console.warn(
      'MdMultiSelect is deprecated and will be removed in a future release. Use MdSelect multiple options instead.',
    );

    const uuid = useId();
    const multiSelectId = id || uuid;
    const [open, setOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useDropdown(dropdownRef, open, setOpen);

    let hasMultipleSelected = false;

    const classNames = classnames('md-select', {
      'md-multiselect--open': !!open,
      'md-multiselect--disabled': !!disabled,
      'md-multiselect--error': !!error,
      'md-multiselect--medium': mode === 'medium',
      'md-multiselect--small': mode === 'small',
    });

    const buttonClassNames = classnames('md-multiselect__button', {
      'md-multiselect__button--open': !!open,
      'md-multiselect--small': mode === 'small',
    });

    const dropDownClassNames = classnames('md-multiselect__dropdown', {
      'md-multiselect__dropdown--open': !!open,
    });

    const optionClass = (option: MdMultiSelectOption) => {
      return classnames('md-multiselect__dropdown-item', {
        'md-multiselect__dropdown-item--selected': optionIsChecked(option),
      });
    };

    const optionIsChecked = (option: MdMultiSelectOption) => {
      const isChecked =
        selectedOptions &&
        selectedOptions.length &&
        selectedOptions.find(item => {
          return item.value === option.value;
        });
      return isChecked && isChecked !== undefined;
    };

    let displayValue = placeholder;
    const selectedOptionsFull: MdMultiSelectOption[] = [];
    if (!open && selectedOptions && selectedOptions.length > 0) {
      const findFirstOption = options.find(option => {
        return option.value === selectedOptions[0].value;
      });
      if (findFirstOption) {
        displayValue = findFirstOption.text;
      }
      if (selectedOptions.length > 1) {
        hasMultipleSelected = true;
      }

      selectedOptions.forEach(item => {
        const opt = options.find(option => {
          return option.value === item.value;
        });
        if (opt) {
          selectedOptionsFull.push(opt);
        }
      });
    }

    const handleOptionClick = (option: MdMultiSelectOption) => {
      if (onSelectOption) {
        onSelectOption(option);
      }
      if (closeOnSelect) {
        setOpen(false);
      }
    };

    let ariaDescribedBy = helpText && helpText !== '' ? `md-multiselect_help-text_${multiSelectId}` : undefined;
    ariaDescribedBy =
      error && errorText && errorText !== '' ? `md-multiselect_error_${multiSelectId}` : ariaDescribedBy;

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    return (
      <div className={classNames}>
        {showLabel && (
          <div className="md-multiselect__label-wrapper">
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

            {helpText && helpText !== '' && (
              <div className={`md-multiselect__help-text ${helpOpen ? 'md-multiselect__help-text--open' : ''}`}>
                <MdHelpText
                  id={`md-multiselect_help-text_${multiSelectId}`}
                  aria-labelledby={
                    helpText && helpText !== '' ? `md-multiselect_help-button_${multiSelectId}` : undefined
                  }
                >
                  {helpText}
                </MdHelpText>
              </div>
            )}
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
            <div className="md-multiselect__button-text">{displayValue}</div>
            {hasMultipleSelected && !open && (
              <div className="md-multiselect__button-hasmultiple">+{selectedOptions.length - 1}</div>
            )}
            <div aria-hidden="true" className="md-multiselect__button-icon">
              <MdIconChevronForward transform={`rotate(${open ? '180' : '0'})`} />
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
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') {
                          return handleOptionClick(option);
                        }
                      }}
                      onChange={() => {
                        return handleOptionClick(option);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </MdClickOutsideWrapper>

        {error && errorText && errorText !== '' && (
          <div id={`md-multiselect_error_${multiSelectId}`} className="md-multiselect__error">
            {errorText}
          </div>
        )}

        {!open && showChips && selectedOptionsFull.length > 0 && (
          <div className="md-multiselect__chips">
            {selectedOptionsFull.map(chip => {
              return (
                <MdInputChip
                  key={`multiselect_chip_${multiSelectId}_${chip.value}`}
                  label={chip.text}
                  id={`checkbox_chip_${multiSelectId}_${chip.value}`}
                  disabled={disabled}
                  onClick={() => {
                    return handleOptionClick(chip);
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
