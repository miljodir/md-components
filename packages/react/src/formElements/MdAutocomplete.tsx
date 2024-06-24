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

export interface MdAutocompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  options: MdAutocompleteOptionProps[];
  defaultOptions?: MdAutocompleteOptionProps[];
  /**
   * Replaces previous 'onChange'-prop for listening to changes in selected option.
   * onChange-prop is now reserved as a standard prop om the inner html input element.
   */
  onSelectOption(_e: MdAutocompleteOptionProps): void;
  /**
   * Replaces previous 'size'-prop for reducing overall width of component from large to either medium or small.
   * Size-prop is now reserved as a standard prop on the inner html input element to specify its width.
   */
  mode?: 'large' | 'medium' | 'small';
  helpText?: string;
  error?: boolean;
  value: string;
  errorText?: string;
  prefixIcon?: React.ReactNode;
  dropdownHeight?: number;
  amountOfElementsShown?: number;
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
      mode = 'large',
      helpText,
      error = false,
      errorText,
      prefixIcon = null,
      onSelectOption,
      dropdownHeight,
      amountOfElementsShown = null,
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

    const autocompleteId = id && id !== '' ? id : uuidv4();

    const classNames = classnames('md-autocomplete', {
      'md-autocomplete--open': !!open,
      'md-autocomplete--error': !!error,
      'md-autocomplete--disabled': !!disabled,
      'md-autocomplete--medium': mode === 'medium',
      'md-autocomplete--small': mode === 'small',
    });

    const inputClassNames = classnames('md-autocomplete__input', {
      'md-autocomplete__input--open': !!open,
      'md-autocomplete__input--error': !!error,
      'md-autocomplete__input--has-prefix': prefixIcon !== null && prefixIcon !== '',
      'md-autocomplete--small': mode === 'small',
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
      onSelectOption(option);
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

    const displayedOptions = autocompleteValue
      ? results
      : defaultOptions && defaultOptions.length
      ? defaultOptions
      : options
      ? options
      : [];
    const displayedOptionsSliced =
      amountOfElementsShown == null ? displayedOptions : displayedOptions.slice(0, amountOfElementsShown);

    return (
      <div className={classNames}>
        {label && label !== '' && (
          <div className="md-autocomplete__label">
            <label id={`md-autocomplete_label_${autocompleteId}`} htmlFor={autocompleteId}>
              {label}
            </label>
            {helpText && helpText !== '' && (
              <div className="md-autocomplete__help-button">
                <MdHelpButton
                  aria-label={`Hjelpetekst for ${label}`}
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
        )}

        {helpText && helpText !== '' && (
          <div className={`md-autocomplete__help-text ${helpOpen ? 'md-autocomplete__help-text--open' : ''}`}>
            <MdHelpText
              id={`md-autocomplete_help-text_${autocompleteId}`}
              aria-labelledby={
                helpText && helpText !== '' ? `md-autocomplete_help-button_${autocompleteId}` : undefined
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
          className={`md-autocomplete__container ${mode === 'small' ? 'md-autocomplete--small' : ''}`}
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
            autoComplete="off"
            role="combobox"
            aria-expanded={open}
            aria-controls={`md-autocomplete_dropdown_${autocompleteId}`}
            id={autocompleteId}
            aria-describedby={helpText && helpText !== '' ? `md-autocomplete_help-text_${autocompleteId}` : undefined}
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
            <MdChevronIcon transform={`rotate(${open ? '180' : '0'})`} />
          </div>

          {options && options.length > 0 && (
            <div
              aria-labelledby={label && label !== '' ? `md-autocomplete_label_${autocompleteId}` : undefined}
              role="listbox"
              id={`md-autocomplete_dropdown_${autocompleteId}`}
              className="md-autocomplete__dropdown"
              style={{ maxHeight: dropdownHeight && `${dropdownHeight}px` }}
            >
              {displayedOptionsSliced.map(option => {
                return (
                  <button
                    role="option"
                    aria-selected={!!isSelectedOption(option)}
                    key={`md-autocomplete-option-${autocompleteId}-${option.value}`}
                    id={`md-autocomplete-option-${autocompleteId}-${option.value}`}
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
