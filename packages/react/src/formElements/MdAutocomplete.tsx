import classnames from 'classnames';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import useDropdown from '../hooks/useDropdown';
import MdChevronIcon from '../icons/MdChevronIcon';
import MdXIcon from '../icons/MdXIcon';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';

export interface MdAutocompleteOptionProps {
  text: string;
  value: string;
}

export interface MdAutocompleteProps {
  label?: string | null;
  options: MdAutocompleteOptionProps[];
  defaultOptions?: MdAutocompleteOptionProps[];
  id?: string;
  onChange(_e: MdAutocompleteOptionProps): void;
  name?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  size?: string;
  helpText?: string;
  error?: boolean;
  errorText?: string;
  prefixIcon?: React.ReactNode;
}

const MdAutocomplete = React.forwardRef<HTMLInputElement, MdAutocompleteProps>(
  (
    {
      label,
      value,
      options,
      defaultOptions,
      id,
      placeholder = 'Søk',
      disabled = false,
      size,
      helpText,
      error = false,
      errorText,
      prefixIcon = null,
      onChange,
      ...otherProps
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [autocompleteValue, setAutocompleteValue] = useState('');
    const [results, setResults] = useState<MdAutocompleteOptionProps[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useDropdown(dropdownRef, open, setOpen);

    const uuid = id && id !== '' ? id : uuidv4();

    const classNames = classnames('md-autocomplete', {
      'md-autocomplete--open': !!open,
      'md-autocomplete--error': !!error,
      'md-autocomplete--disabled': !!disabled,
      'md-autocomplete--medium': size === 'medium',
      'md-autocomplete--small': size === 'small',
    });

    const inputClassNames = classnames('md-autocomplete__input', {
      'md-autocomplete__input--open': !!open,
      'md-autocomplete__input--error': !!error,
      'md-autocomplete__input--has-prefix': prefixIcon !== null && prefixIcon !== '',
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

    const handleOptionClick = (option: MdAutocompleteOptionProps) => {
      onChange(option);
      setOpen(false);
      setAutocompleteValue('');
    };

    const isSelectedOption = (option: MdAutocompleteOptionProps) => {
      return value && value !== '' && value == option.value;
    };

    const optionClass = (option: MdAutocompleteOptionProps) => {
      return classnames('md-autocomplete__dropdown-item', {
        'md-autocomplete__dropdown-item--selected': isSelectedOption(option),
      });
    };

    return (
      <div className={classNames}>
        <div className="md-autocomplete__label">
          {label && label !== '' && <label htmlFor={`md-autocomplete_${uuid}`}>{label}</label>}
          {helpText && helpText !== '' && (
            <div className="md-autocomplete__help-button">
              <MdHelpButton
                ariaLabel={`Hjelpetekst for ${label}`}
                id={`md-autocomplete_help-button_${uuid}`}
                aria-expanded={helpOpen}
                aria-controls={`md-autocomplete_help-text_${uuid}`}
                onClick={() => {
                  return setHelpOpen(!helpOpen);
                }}
                expanded={helpOpen}
              />
            </div>
          )}
        </div>

        {helpText && helpText !== '' && (
          <div className={`md-autocomplete__help-text ${helpOpen ? 'md-autocomplete__help-text--open' : ''}`}>
            <MdHelpText
              id={`md-autocomplete_help-text_${uuid}`}
              aria-labelledby={helpText && helpText !== '' ? `md-autocomplete_help-button_${uuid}` : undefined}
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
          className="md-autocomplete__container"
        >
          {prefixIcon && (
            <div
              aria-hidden="true"
              className={`${classnames('md-autocomplete__input__prefix', {
                'md-autocomplete__input__prefix--disabled': !!disabled,
              })}`}
            >
              {prefixIcon}
            </div>
          )}
          <input
            role="combobox"
            aria-expanded={open}
            aria-controls="md-autocomplete_dropdown_${uuid}"
            id={`md-autocomplete_${uuid}`}
            aria-describedby={helpText && helpText !== '' ? `md-autocomplete_help-text_${uuid}` : undefined}
            className={inputClassNames}
            value={open ? autocompleteValue : displayValue}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                setOpen(!open);
              }
            }}
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
          <div aria-hidden="true" className="md-autocomplete__input-icon">
            <MdChevronIcon />
          </div>

          {options && options.length > 0 && (
            <div role="listbox" id={'md-autocomplete__dropdown_${uuid}'} className="md-autocomplete__dropdown">
              {(autocompleteValue ? results : defaultOptions ? defaultOptions : options ? options : []).map(option => {
                return (
                  <button
                    role="option"
                    aria-selected={!!isSelectedOption(option)}
                    key={`md-autocomplete-option-${uuid}-${option.value}`}
                    id={`md-autocomplete-option-${uuid}-${option.value}`}
                    type="button"
                    tabIndex={open ? 0 : -1}
                    className={optionClass(option)}
                    onClick={() => {
                      open && handleOptionClick(option);
                    }}
                  >
                    <div className="md-autocomplete__dropdown-item-text">{option.text}</div>
                    {isSelectedOption(option) && (
                      <div className="md-autocomplete__dropdown-item-clear" title="Klikk for å fjerne valg">
                        <MdXIcon />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </MdClickOutsideWrapper>

        {error && errorText && errorText !== '' && <div className="md-autocomplete__error">{errorText}</div>}
      </div>
    );
  },
);
MdAutocomplete.displayName = 'MdAutocomplete';

export default MdAutocomplete;
