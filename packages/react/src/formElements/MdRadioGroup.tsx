/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from 'classnames';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import type { ChangeEvent } from 'react';

export interface MdRadioGroupOption {
  id: any;
  text: any;
}

export interface MdRadioGroupProps {
  options?: MdRadioGroupOption[];
  selectedOption?: any;
  label?: string;
  id?: string | number;
  disabled?: boolean;
  direction?: string;
  className?: string;
  error?: string;
  helpText?: string;
  onChange(_e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(_e: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(_e: React.FocusEvent<HTMLInputElement>): void;
}

const MdRadioGroup: React.FunctionComponent<MdRadioGroupProps> = ({
  options,
  selectedOption,
  id,
  disabled,
  direction,
  className,
  label,
  helpText,
  error,
  onChange,
  onFocus,
  onBlur,
  ...otherProps
}: MdRadioGroupProps) => {
  const radioId = id || uuidv4();
  const [helpOpen, setHelpOpen] = useState(false);

  const classNames = classnames(
    'md-radiogroup',
    {
      'md-radiogroup--disabled': !!disabled,
    },
    className,
  );

  const optionsClassNames = classnames('md-radiogroup__options', {
    'md-radiogroup__options--vertical': direction === 'vertical',
  });

  const optionIsSelected = (option: any) => {
    if (selectedOption) {
      return option.toString() === selectedOption.toString();
    }

    return false;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className={classNames} {...otherProps}>
      <div className="md-radiogroup__label">
        {label && label !== '' && <div>{label}</div>}

        {helpText && helpText !== '' && (
          <MdHelpButton
            onClick={() => {
              return setHelpOpen(!helpOpen);
            }}
            expanded={helpOpen}
          />
        )}
      </div>

      {helpText && helpText !== '' && (
        <div className={`md-radiogroup__help-text ${helpOpen ? 'md-radiogroup__help-text--open' : ''}`}>
          <MdHelpText>{helpText}</MdHelpText>
        </div>
      )}

      <div className={optionsClassNames}>
        {options &&
          options.map(option => {
            return (
              <label
                htmlFor={`radio_${radioId}_${option.text}`}
                key={`radio_${radioId}_${option.id}`}
                className="md-radiogroup-option"
              >
                <span className="md-radiogroup-option__check-area" id={`dot_${radioId}_${option.text}`}>
                  {optionIsSelected(option.id) && <span className="md-radiogroup-option__selected-dot" />}
                </span>
                <input
                  id={`radio_${radioId}_${option.text}`}
                  type="radio"
                  value={option.id}
                  checked={optionIsSelected(option.id)}
                  onChange={handleChange}
                  disabled={disabled}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <span className="md-radiogroup-option__text">{option.text}</span>
              </label>
            );
          })}
      </div>

      {error && error !== '' && <div className="md-radiogroup__error">{error}</div>}
    </div>
  );
};

export default MdRadioGroup;
