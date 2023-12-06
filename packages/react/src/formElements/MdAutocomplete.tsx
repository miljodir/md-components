import classnames from 'classnames';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdChevronIcon from '../icons/MdChevronIcon';
import MdXIcon from '../icons/MdXIcon';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';

interface MdAutocompleteOptionProps {
  text: string;
  value: string;
}

export interface MdAutocompleteProps {
  label?: string | null;
  options: MdAutocompleteOptionProps[];
  defaultOptions?: MdAutocompleteOptionProps[];
  id?: string;
  onChange(e: MdAutocompleteOptionProps): void;
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

const MdAutocomplete = React.forwardRef<HTMLInputElement, MdAutocompleteProps>(({
  label,
  value,
  options,
  defaultOptions,
  id,
  name,
  placeholder = 'Søk',
  disabled = false,
  size,
  helpText,
  error = false,
  errorText,
  prefixIcon = null,
  onChange,
  ...otherProps
}, ref) => {
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [results, setResults] = useState<MdAutocompleteOptionProps[]>([]);

  const inputId = id && id !== '' ? id : uuidv4();

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
    'md-autocomplete__input--has-prefix':
      prefixIcon !== null && prefixIcon !== '',
  });

  const selectedOption =
    value && value !== ''
      ? options && options.find((o) => o.value === value)
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
        {label && label !== '' && <label htmlFor={inputId}>{label}</label>}
        {helpText && helpText !== '' && (
          <div className="md-autocomplete__help-button">
            <MdHelpButton
              onClick={() => setHelpOpen(!helpOpen)}
              expanded={helpOpen}
            />
          </div>
        )}
      </div>

      {helpText && helpText !== '' && (
        <div
          className={`md-autocomplete__help-text ${
            helpOpen ? 'md-autocomplete__help-text--open' : ''
          }`}
        >
          <MdHelpText>{helpText}</MdHelpText>
        </div>
      )}

      <MdClickOutsideWrapper
        onClickOutside={() => setOpen(false)}
        className="md-autocomplete__container"
      >
        {prefixIcon && (
          <div
            className={`${classnames('md-autocomplete__input__prefix', {
              'md-autocomplete__input__prefix--disabled': !!disabled,
            })}`}
          >
            {prefixIcon}
          </div>
        )}
        <input
          id={inputId}
          className={inputClassNames}
          value={open ? autocompleteValue : displayValue}
          tabIndex={0}
          onChange={(e) => {
            setAutocompleteValue(e.target.value);
            if (e.target.value && e.target.value !== '') {
              const results = options?.filter((o) =>
                o.text
                  ?.toLowerCase()
                  .includes(e.target.value.toLowerCase() || '')
              );
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
        <div className="md-autocomplete__input-icon">
          <MdChevronIcon />
        </div>

        {options && options.length > 0 && (
          <div className="md-autocomplete__dropdown">
            {(autocompleteValue
              ? results
              : defaultOptions
              ? defaultOptions
              : options
              ? options
              : []
            ).map((option) => (
              <button
                key={`md-autocomplete-option-${inputId}-${option.value}`}
                id={`md-autocomplete-option-${inputId}-${option.value}`}
                type="button"
                tabIndex={open ? 0 : -1}
                className={optionClass(option)}
                onClick={() => {
                  open && handleOptionClick(option);
                }}
              >
                <div className="md-autocomplete__dropdown-item-text">
                  {option.text}
                </div>
                {isSelectedOption(option) && (
                  <div
                    className="md-autocomplete__dropdown-item-clear"
                    title="Klikk for å fjerne valg"
                  >
                    <MdXIcon />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </MdClickOutsideWrapper>

      {error && errorText && errorText !== '' && (
        <div className="md-autocomplete__error">{errorText}</div>
      )}
    </div>
  );
});

export default MdAutocomplete;
