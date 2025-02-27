'use client';

import classnames from 'classnames';
import React, { useId, useRef, useState } from 'react';
import MdInputChip from '../chips/MdInputChip';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import useDropdown from '../hooks/useDropdown';
import MdIconKeyboardArrowDown from '../icons-material/MdIconKeyboardArrowDown';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';
import MdCheckbox from './MdCheckbox';

export interface MdMultiAutocompleteOption {
  text: string;
  value: string;
}

export interface MdMultiAutocompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  options: MdMultiAutocompleteOption[];
  defaultOptions?: MdMultiAutocompleteOption[];
  mode?: 'large' | 'medium' | 'small';
  helpText?: string;
  error?: boolean;
  /**
   * v3.0.0: Replaces previous 'selected'-prop.
   */
  selectedOptions?: MdMultiAutocompleteOption[];
  errorText?: string;
  showChips?: boolean;
  closeOnSelect?: boolean;
  prefixIcon?: React.ReactNode;
  noResultsText?: string;
  dropdownHeight?: number;
  /**
   * v3.0.0: Replaces previous 'amountOfElementsShown'-prop.
   */
  numberOfElementsShown?: number;
  onSelectOption(_e: MdMultiAutocompleteOption): void;
}

export const MdMultiAutocomplete = React.forwardRef<HTMLInputElement, MdMultiAutocompleteProps>(
  (
    {
      label,
      options,
      defaultOptions,
      id,
      showChips,
      placeholder = 'Søk',
      disabled = false,
      mode = 'large',
      helpText,
      selectedOptions = [],
      error = false,
      errorText,
      prefixIcon = null,
      closeOnSelect,
      dropdownHeight,
      numberOfElementsShown = null,
      className,
      noResultsText = 'Ingen resultater funnet',
      onSelectOption,
      ...otherProps
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [autocompleteValue, setAutocompleteValue] = useState('');
    const [results, setResults] = useState<MdMultiAutocompleteOption[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useDropdown(dropdownRef, open, setOpen, 'autocomplete');

    const uuid = useId();
    const multiAutocompleteId = id && id !== '' ? id : uuid;

    let hasMultipleSelected = false;

    const classNames = classnames('md-multiautocomplete', {
      'md-multiautocomplete--open': !!open,
      'md-multiautocomplete--error': !!error,
      'md-multiautocomplete--disabled': !!disabled,
      'md-multiautocomplete--medium': mode === 'medium',
      'md-multiautocomplete--small': mode === 'small',
    });

    const inputClassNames = classnames('md-multiautocomplete__input', {
      'md-multiautocomplete__input--open': !!open,
      'md-multiautocomplete__input--error': !!error,
      'md-multiautocomplete__input--has-prefix': prefixIcon !== null && prefixIcon !== '',
      'md-multiautocomplete--small': mode === 'small',
      className,
    });

    const optionClass = (option: MdMultiAutocompleteOption) => {
      return classnames('md-multiautocomplete__dropdown-item', {
        'md-multiautocomplete__dropdown-item--selected': optionIsChecked(option),
      });
    };

    const optionIsChecked = (option: MdMultiAutocompleteOption) => {
      const isChecked =
        selectedOptions &&
        selectedOptions.length &&
        selectedOptions.find(item => {
          return item.value === option.value;
        });
      return isChecked && isChecked !== undefined;
    };

    let displayValue = placeholder;
    const selectedOptionsFull: MdMultiAutocompleteOption[] = [];
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

      if (open) {
        displayValue = '';
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

    const handleOptionClick = (option: MdMultiAutocompleteOption) => {
      onSelectOption(option);
      if (closeOnSelect) {
        setOpen(false);
        setAutocompleteValue('');
      }
    };

    const handleChipClick = (option: MdMultiAutocompleteOption) => {
      handleOptionClick(option);
    };

    const displayedOptions = autocompleteValue
      ? results
      : defaultOptions && defaultOptions.length
      ? defaultOptions
      : options
      ? options
      : [];
    const displayedOptionsSliced =
      numberOfElementsShown == null ? displayedOptions : displayedOptions.slice(0, numberOfElementsShown);

    let ariaDescribedBy =
      helpText && helpText !== '' ? `md-multiautocomplete_help-text_${multiAutocompleteId}` : undefined;
    ariaDescribedBy =
      error && errorText && errorText !== '' ? `md-multiautocomplete_error_${multiAutocompleteId}` : ariaDescribedBy;

    return (
      <div className={classNames}>
        {label && label !== '' && (
          <div className="md-multiautocomplete__label">
            <label id={`md-multiautocomplete_label_${multiAutocompleteId}`} htmlFor={multiAutocompleteId}>
              {label}
            </label>
            {helpText && helpText !== '' && (
              <div className="md-multiautocomplete__help-button">
                <MdHelpButton
                  aria-label={`Hjelpetekst for ${label}`}
                  id={`md-multiautocomplete_help-button_${multiAutocompleteId}`}
                  aria-expanded={helpOpen}
                  aria-controls={`md-multiautocomplete_help-text_${multiAutocompleteId}`}
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
          <div className={`md-multiautocomplete__help-text ${helpOpen ? 'md-multiautocomplete__help-text--open' : ''}`}>
            <MdHelpText
              id={`md-multiautocomplete_help-text_${multiAutocompleteId}`}
              aria-labelledby={
                helpText && helpText !== '' ? `md-multiautocomplete_help-button_${multiAutocompleteId}` : undefined
              }
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
          className={`md-multiautocomplete__container ${mode === 'small' ? 'md-multiautocomplete--small' : ''}`}
        >
          {prefixIcon && (
            <div
              aria-hidden="true"
              className={`${classnames('md-multiautocomplete__input__prefix', {
                'md-multiautocomplete__input__prefix--disabled': !!disabled,
              })}`}
            >
              {prefixIcon}
            </div>
          )}
          <input
            autoComplete="off"
            role="combobox"
            aria-expanded={open}
            aria-controls={`md-multiautocomplete_dropdown_${multiAutocompleteId}`}
            id={multiAutocompleteId}
            aria-describedby={ariaDescribedBy}
            className={inputClassNames}
            value={open ? autocompleteValue : displayValue}
            tabIndex={0}
            onChange={e => {
              setAutocompleteValue(e.target.value);
              if (e.target.value && e.target.value !== '') {
                const results = options?.filter(o => {
                  return o.text?.toLowerCase().includes(e.target.value.toLowerCase() || '');
                });
                setResults(results || []);
              } else {
                setResults([]);
              }
            }}
            onFocus={() => {
              !disabled && setOpen(true);
            }}
            type="text"
            placeholder={placeholder}
            disabled={!!disabled}
            ref={ref}
            {...otherProps}
          />
          {hasMultipleSelected && !open && (
            <div className="md-multiautocomplete__button-hasmultiple">+{selectedOptions.length - 1}</div>
          )}
          <div aria-hidden="true" className="md-multiautocomplete__input-icon">
            <MdIconKeyboardArrowDown transform={`rotate(${open ? '180' : '0'})`} />
          </div>

          {options && options.length > 0 && (
            <div
              aria-labelledby={label && label !== '' ? `md-multiautocomplete_label_${multiAutocompleteId}` : undefined}
              role="listbox"
              id={`md-multiautocomplete_dropdown_${multiAutocompleteId}`}
              className="md-multiautocomplete__dropdown"
              style={{ maxHeight: dropdownHeight && `${dropdownHeight}px` }}
            >
              {displayedOptionsSliced.map(option => {
                return (
                  <div key={`checkbox_key_${multiAutocompleteId}_${option.value}`} className={optionClass(option)}>
                    <MdCheckbox
                      role="option"
                      aria-selected={!!optionIsChecked(option)}
                      label={option.text}
                      tabIndex={open ? 0 : -1}
                      checked={!!optionIsChecked(option)}
                      value={option.value}
                      id={`checkbox_${multiAutocompleteId}_${option.value}`}
                      disabled={!!disabled}
                      data-value={option.value}
                      data-text={option.text}
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          return handleOptionClick(option);
                        }
                      }}
                      onChange={() => {
                        handleOptionClick(option);
                      }}
                    />
                  </div>
                );
              })}
              {displayedOptionsSliced.length === 0 && (
                <div className="md-multiautocomplete__dropdown-no-results">{noResultsText}</div>
              )}
            </div>
          )}
        </MdClickOutsideWrapper>

        {error && errorText && errorText !== '' && (
          <div id={`md-multiautocomplete_error_${multiAutocompleteId}`} className="md-multiautocomplete__error">
            {errorText}
          </div>
        )}

        {!open && showChips && selectedOptionsFull.length > 0 && (
          <div className="md-multiautocomplete__chips">
            {selectedOptionsFull.map(chip => {
              return (
                <MdInputChip
                  key={`multiautocomplete_chip_${multiAutocompleteId}_${chip.value}`}
                  label={chip.text}
                  id={`checkbox_chip_${multiAutocompleteId}_${chip.value}`}
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
MdMultiAutocomplete.displayName = 'MdMultiAutocomplete';

export default MdMultiAutocomplete;
