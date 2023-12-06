import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdChevronIcon from '../icons/MdChevronIcon';
import MdXIcon from '../icons/MdXIcon';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';

interface MdSelectOptionProps {
  text: string;
  value: string;
}

export interface MdSelectProps {
  label?: string | null;
  options?: MdSelectOptionProps[];
  id?: string | number | null | undefined;
  onChange(_e: MdSelectOptionProps): void;
  name?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  size?: string;
  helpText?: string;
  error?: boolean;
  errorText?: string;
  selectRef?: React.Ref<HTMLButtonElement>;
}

const MdSelect: React.FunctionComponent<MdSelectProps> = ({
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
  selectRef,
}: MdSelectProps) => {
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const uuid = id || uuidv4();

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onKeyDown = (e: any) => {
    if (open) {
      const reg = /[a-z\Wæøå]+/gim;
      const key = e.key;
      if (key && reg.test(key) && key.length === 1) {
        const option = options?.find(o => {
          return o.text?.startsWith(key.toLowerCase()) || o.text?.startsWith(key.toUpperCase());
        });
        if (option) {
          /* Find corresponding button */
          const button = document.getElementById(`md-select-option-${uuid}-${option.value}`);
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

  const buttonClasseNames = classnames('md-select__button', {
    'md-select__button--open': !!open,
    'md-select__button--error': !!error,
  });

  const optionClass = (option: MdSelectOptionProps) => {
    return classnames('md-select__dropdown-item', {
      'md-select__dropdown-item--selected': isSelectedOption(option),
    });
  };

  return (
    <div className={classNames}>
      <div className="md-select__label">
        <div>{label}</div>
        {helpText && helpText !== '' && (
          <div className="md-select__help-button">
            <MdHelpButton
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
          <MdHelpText>{helpText}</MdHelpText>
        </div>
      )}

      <MdClickOutsideWrapper
        onClickOutside={() => {
          return setOpen(false);
        }}
        className="md-select__container"
      >
        <button
          className={buttonClasseNames}
          type="button"
          tabIndex={0}
          onClick={() => {
            return !disabled && setOpen(!open);
          }}
          ref={selectRef}
        >
          <div className="md-select__button-text">{displayValue}</div>
          <div className="md-select__button-icon">
            <MdChevronIcon />
          </div>
        </button>

        {options && options.length > 0 && (
          <div className="md-select__dropdown">
            {options.map(option => {
              return (
                <button
                  key={`md-select-option-${uuid}-${option.value}`}
                  id={`md-select-option-${uuid}-${option.value}`}
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
                      <MdXIcon />
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
};

export default MdSelect;
