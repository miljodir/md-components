import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdChevronIcon from '../icons/MdChevronIcon';
import MdXIcon from '../icons/MdXIcon';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';
import type { ReactElement } from 'react';

export interface MdAutocompleteAsyncOptionProps {
  text: string;
  value: string;
}

export interface MdAutocompleteAsyncProps {
  onSelected(_e: MdAutocompleteAsyncOptionProps): void;
  onChange?(_e: MdAutocompleteAsyncOptionProps): void;
  label?: string | null;
  optionsLoader: (input: string) => Promise<MdAutocompleteAsyncOptionProps[]>;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  helpText?: string;
  error?: boolean;
  errorText?: string;
  prefixIcon?: React.ReactNode;
  required?: boolean;
  displayValueAndText?: boolean;
  autoComplete?: 'off' | 'on';
}

const MdAutocompleteAsync = ({
  label,
  value,
  optionsLoader,
  id,
  placeholder = 'Søk',
  disabled = false,
  size,
  helpText,
  error = false,
  errorText,
  prefixIcon = null,
  onSelected,
  required,
  displayValueAndText,
  autoComplete = 'off',
  ...otherProps
}: MdAutocompleteAsyncProps) => {
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const [results, setResults] = useState<MdAutocompleteAsyncOptionProps[]>([]);
  const [focused, setFocused] = React.useState(false);
  const [displayValue, setDisplayValue] = React.useState(placeholder);

  const autocompleteId = id && id !== '' ? id : uuidv4();

  const onFocus = () => {
    setFocused(true);
    setOpen(true);
  };

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
    'md-autocomplete--small': size === 'small',
  });

  const optionClass = (option: MdAutocompleteAsyncOptionProps) => {
    return classnames('md-autocomplete__dropdown-item', {
      'md-autocomplete__dropdown-item--selected': isSelectedOption(option),
    });
  };

  const isSelectedOption = (option: MdAutocompleteAsyncOptionProps) => {
    return value && value !== '' && value == option.value;
  };

  const handleOptionClick = (option: MdAutocompleteAsyncOptionProps) => {
    onSelected(option);
    setAutocompleteValue('');
    setDisplayValue(
      isSelectedOption(option) ? '' : displayValueAndText ? option.value + ' ' + option.text : option.text,
    );
    setResults(isSelectedOption(option) ? [] : [option]);
    setOpen(false);
    setFocused(false);
  };

  useEffect(() => {
    if (autocompleteValue) {
      optionsLoader(autocompleteValue).then(result => {
        setResults(result);
        if (result && focused) {
          setOpen(true);
        }
      });
    }
  }, [autocompleteValue]);

  useEffect(() => {
    if (value && value != '') {
      setDisplayValue(value);
    }
  }, []);

  return (
    <div className={classNames}>
      <div className="md-autocomplete__label">
        {label && label !== '' && (
          <label id={`md-autocomplete_label_${autocompleteId}`} htmlFor={autocompleteId}>
            {label}
            {required && <RequiredAsterisk />}
          </label>
        )}
        {helpText && helpText !== '' && (
          <div className="md-autocomplete__help-button">
            <MdHelpButton
              ariaLabel={`Hjelpetekst for ${label}`}
              id={`md-autocomplete_help-button_${autocompleteId}`}
              aria-expanded={helpOpen}
              aria-controls={`md-autocomplete_help-text_${autocompleteId}`}
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
            id={`md-autocomplete_help-text_${autocompleteId}`}
            aria-labelledby={helpText && helpText !== '' ? `md-autocomplete_help-button_${autocompleteId}` : undefined}
          >
            {helpText}
          </MdHelpText>
        </div>
      )}

      <MdClickOutsideWrapper
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
          aria-controls={`md-autocomplete_dropdown_${autocompleteId}`}
          id={autocompleteId}
          aria-describedby={helpText && helpText !== '' ? `md-autocomplete_help-text_${autocompleteId}` : undefined}
          className={inputClassNames}
          value={open ? autocompleteValue : displayValue}
          type="text"
          tabIndex={0}
          onFocus={() => {
            return !disabled && onFocus();
          }}
          onChange={e => {
            return setAutocompleteValue(e.target.value);
          }}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          {...otherProps}
        />
        <div aria-hidden="true" className="md-autocomplete__input-icon">
          <MdChevronIcon transform={`rotate(${open ? '180' : '0'})`} />
        </div>

        {results && results.length > 0 && (
          <div
            aria-labelledby={label && label !== '' ? `md-autocomplete_label_${autocompleteId}` : undefined}
            role="listbox"
            id={`md-autocomplete__dropdown_${autocompleteId}`}
            className="md-autocomplete__dropdown"
          >
            {results.map(option => {
              return (
                <button
                  role="option"
                  key={`md-autocomplete-option-${autocompleteId}-${option.value}`}
                  id={`md-autocomplete-option-${autocompleteId}-${option.value}`}
                  type="button"
                  tabIndex={open ? 0 : -1}
                  className={optionClass(option)}
                  onClick={() => {
                    return open && handleOptionClick(option);
                  }}
                >
                  <div className="md-autocomplete__dropdown-item-text">
                    {displayValueAndText ? `${option.value} ${option.text}` : option.text}
                  </div>
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
};

export function RequiredAsterisk(): ReactElement {
  return (
    <span className="md-autocomplete__asteriks" aria-label="obligatorisk">
      {' '}
      &#42;
    </span>
  );
}

export default MdAutocompleteAsync;
