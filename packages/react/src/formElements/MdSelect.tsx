import React, { useState, ChangeEvent } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper'
import ChevronIcon from '../icons/ChevronIcon';
import XIcon from '../icons/XIcon';

interface MdSelectOptionProps {
  text: string;
  value: string;
};

export interface MdSelectProps {
    label: string | null;
    options: MdSelectOptionProps[];
    onChange(e: MdSelectOptionProps): void;
    name: string;
    value: string | number;
    placeholder?: string;
    disabled?: boolean;
    size?: string;
    helpText?: string;
};

const MdSelect: React.FunctionComponent<MdSelectProps> = ({
  label,
  value,
  options,
  name,
  placeholder = 'Vennligst velg',
  disabled = false,
  size,
  helpText,
  onChange,
  ...otherProps
}: MdSelectProps) => {
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const uuid = React.useMemo(() => uuidv4(), []);

  const classNames = classnames('md-select', {
    'md-select--open': !!open,
    'md-select--disabled': !!disabled,
    'md-select--medium': size === 'medium',
    'md-select--small': size === 'small'
  });

  const selectedOption = value && value !== '' ? options.find(o => o.value === value) : '';

  let displayValue = placeholder;
  if (selectedOption && selectedOption.value) {
    displayValue = selectedOption.text;
  }
  if (open) {
    displayValue = '';
  }

  const handleOptionClick = (option: MdSelectOptionProps) => {
    onChange(option);
    setOpen(false);
  }

  const isSelectedOption = (option: MdSelectOptionProps) => {
    return value && value !== '' && value == option.value;
  }

  const buttonClasseNames = classnames('md-select__button', {
    'md-select__button--open': !!open
  });

  const optionClass = (option: MdSelectOptionProps) => {
    return classnames('md-select__dropdown-item', {
      'md-select__dropdown-item--selected': isSelectedOption(option)
    });
  }

  return (
    <div className={classNames}>
      <div className="md-select__label">
        <div>{label}</div>
        {helpText && helpText !== '' &&
          <div className="md-select__help-button">
            <MdHelpButton
              onClick={() => setHelpOpen(!helpOpen)}
              expanded={helpOpen}
            />
          </div>
        }
      </div>

      {helpText && helpText !== '' &&
        <div className={`md-select__help-text ${helpOpen ? 'md-select__help-text--open' : ''}`}>
          <MdHelpText>{ helpText }</MdHelpText>
        </div>
      }

      <MdClickOutsideWrapper
        onClickOutside={() => setOpen(false)}
      >
        <button
          className={buttonClasseNames}
          tabIndex={0}
          onClick={() => !disabled && setOpen(!open)}
        >
          <div className="md-select__button-text">{displayValue}</div>
          <div className="md-select__button-icon">
            <ChevronIcon />
          </div>
        </button>

        {options && options.length > 0 &&
          <div className="md-select__dropdown">
            {options.map(option => (
              <button
                key={`md-select-option-${uuid}-${option.value}`}
                tabIndex={open ? 0: -1}
                className={optionClass(option)}
                onClick={() => open && handleOptionClick(option)}
              >
                <div className="md-select__dropdown-item-text">{option.text}</div>
                {isSelectedOption(option) &&
                  <div className="md-select__dropdown-item-clear" title="Klikk for å fjerne valg">
                    <XIcon />
                  </div>
                }
              </button>
            ))}
          </div>
        }
      </MdClickOutsideWrapper>
    </div>
  );
};

export default MdSelect;
