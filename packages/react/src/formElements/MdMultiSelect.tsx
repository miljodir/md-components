import React, { useState } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';
import MdInputChip from '../chips/MdInputChip';
import ChevronIcon from '../icons/ChevronIcon';

interface MdMultiSelectOptionProps {
  text: string;
  value: string;
};

interface MdMultiSelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
    label?: string | null;
    options?: MdMultiSelectOptionProps[];
    onChange?(e: React.ChangeEvent<HTMLInputElement>): string;
    selected?: any[];
    placeholder?: string;
    disabled?: boolean;
    size?: string;
    helpText?: string;
    error?: boolean;
    errorText?: string;
    hideChips?: boolean;
};

const MdMultiSelect: React.FunctionComponent<MdMultiSelectProps> = ({
  label,
  options = [],
  selected = [],
  placeholder = 'Vennligst velg',
  disabled = false,
  size,
  helpText,
  error,
  errorText,
  hideChips = false,
  onChange,
  ...otherProps
}: MdMultiSelectProps) => {
  const uuid = React.useMemo(() => uuidv4(), []);
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  let hasMultipleSelected = false;

  const classNames = classnames('md-select', {
    'md-multiselect--open': !!open,
    'md-multiselect--disabled': !!disabled,
    'md-multiselect--error': !!error,
    'md-multiselect--medium': size === 'medium',
    'md-multiselect--small': size === 'small'
  });

  const buttonClasseNames = classnames('md-multiselect__button', {
    'md-multiselect__button--open': !!open
  });

  const optionClass = (option: MdMultiSelectOptionProps) => {
    return classnames('md-multiselect__dropdown-item', {
      'md-multiselect__dropdown-item--selected': selected.includes(option.value)
    });
  };

  let displayValue = placeholder;
  const selectedOptionsFull: any[] = [];
  if (!open && selected && selected.length > 0) {
    const findFirstOption = options.find(option => option.value === selected[0]);
    if (findFirstOption) {
      displayValue = findFirstOption.text;
    }
    if (selected.length > 1) {
      hasMultipleSelected = true;
    }

    selected.forEach(item => {
      const opt = options.find(option => option.value === item);
      if (opt) {
        selectedOptionsFull.push(opt);
      }
    });
  }

  const handleOptionClick = (option: MdMultiSelectOptionProps) => {
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className={classNames}>
      <div className="md-multiselect__label">
        {label && label !== '' &&
          <div>{label}</div>
        }

        {helpText && helpText !== '' &&
          <div className="md-multiselect__help-button">
            <MdHelpButton
              onClick={() => setHelpOpen(!helpOpen)}
              expanded={helpOpen}
            />
          </div>
        }
      </div>

      {helpText && helpText !== '' &&
        <div className={`md-multiselect__help-text ${helpOpen ? 'md-multiselect__help-text--open' : ''}`}>
          <MdHelpText>{ helpText }</MdHelpText>
        </div>
      }

      <MdClickOutsideWrapper
        onClickOutside={() => setOpen(false)}
        className="md-multiselect__dropdown-wrapper"
      >
        <button
          className={buttonClasseNames}
          tabIndex="0"
          onClick={() => !disabled && setOpen(!open)}
        >
          <div className="md-multiselect__button-text">{displayValue}</div>
          {hasMultipleSelected && !open &&
            <div className="md-multiselect__button-hasmultiple">+{selected.length - 1}</div>
          }
          <div className="md-multiselect__button-icon">
            <ChevronIcon />
          </div>
        </button>

        {options && options.length > 0 &&
          <div className="md-multiselect__dropdown">
            {options.map(option => (
              <button
                key={`md-multiselect-option-${uuid}-${option.value}`}
                tabIndex={`${open ? '0': '-1'}`}
                className={optionClass(option)}
                onClick={() => open && handleOptionClick(option)}
              >
                <div className="md-multiselect__dropdown-item-checkbox"></div>
                <div className="md-multiselect__dropdown-item-text">{option.text}</div>
              </button>
            ))}
          </div>
        }
      </MdClickOutsideWrapper>

      {error && errorText && errorText !== '' &&
        <div className="md-multiselect__error">{errorText}</div>
      }

      {!open && !hideChips && selectedOptionsFull.length > 0 &&
        <div className="md-multiselect__chips">
          {selectedOptionsFull.map(chip => {
            return (
              <MdInputChip
                key={`multiselect_chip_${chip.value}`}
                label={chip.text}
                id={chip.value}
                disabled={disabled}
                onClick={() => handleOptionClick(chip)}
              />
            );
          })}
        </div>
      }
    </div>
  );
};

export default MdMultiSelect;
