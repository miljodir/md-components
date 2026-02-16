'use client';

import classnames from 'classnames';
import React, { useId, useState } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdRadioButton from './MdRadioButton';
import type { ChangeEvent } from 'react';

interface Labels {
  helpTextFor?: string;
}

export interface MdRadioGroupOption {
  value: string;
  text?: string;
}

export interface MdRadioGroupProps {
  options?: MdRadioGroupOption[];
  value?: string;
  label?: string;
  labels?: Labels;
  id?: string;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  className?: string;
  error?: boolean;
  errorText?: string;
  helpText?: string;
  onChange(_e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(_e: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(_e: React.FocusEvent<HTMLInputElement>): void;
}

export const MdRadioGroup: React.FunctionComponent<MdRadioGroupProps> = ({
  options = [],
  value,
  id,
  disabled,
  direction,
  className,
  label,
  labels = {},
  helpText,
  error = false,
  errorText,
  onChange,
  onFocus,
  onBlur,
  ...otherProps
}: MdRadioGroupProps) => {
  const uuid = useId();
  const radioGroupId = id || uuid;
  const [helpOpen, setHelpOpen] = useState(false);

  const defaultLabels: Required<Labels> = {
    helpTextFor: 'Hjelpetekst for',
  };
  const mergedLabels: Required<Labels> = { ...defaultLabels, ...labels };

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

  const optionIsSelected = (option: MdRadioGroupOption) => {
    if (value) {
      return option.value === value;
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

  const showLabel = (label && label !== '') || (helpText && helpText !== '');

  return (
    <fieldset role="radiogroup" className={classNames} {...otherProps}>
      {showLabel && (
        <div className="md-radiogroup__label-wrapper">
          <legend className="md-radiogroup__label">
            {label && label !== '' && <div>{label}</div>}

            {helpText && helpText !== '' && (
              <MdHelpButton
                aria-label={`${mergedLabels.helpTextFor} ${label}`}
                id={`md-radiogroup_help-button_${radioGroupId}`}
                aria-expanded={helpOpen}
                aria-controls={`md-radiogroup_help-text_${radioGroupId}`}
                onClick={() => {
                  return setHelpOpen(!helpOpen);
                }}
                expanded={helpOpen}
              />
            )}
          </legend>

          {helpText && helpText !== '' && (
            <div className={`md-radiogroup__help-text ${helpOpen ? 'md-radiogroup__help-text--open' : ''}`}>
              <MdHelpText
                id={`md-radiogroup_help-text_${radioGroupId}`}
                aria-labelledby={helpText && helpText !== '' ? `md-radiogroup_help-button_${radioGroupId}` : undefined}
              >
                {helpText}
              </MdHelpText>
            </div>
          )}
        </div>
      )}

      <div
        id={radioGroupId}
        aria-describedby={helpText && helpText !== '' ? `md-radiogroup_help-text_${radioGroupId}` : undefined}
        className={optionsClassNames}
      >
        {options.map(option => {
          return (
            <MdRadioButton
              key={`radio_${radioGroupId}_${option.value}`}
              id={`radio_${radioGroupId}_${option.value}`}
              label={option.text}
              checked={optionIsSelected(option)}
              disabled={disabled}
              value={option.value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          );
        })}
      </div>

      {error && errorText && errorText !== '' && <div className="md-radiogroup__error">{errorText}</div>}
    </fieldset>
  );
};

export default MdRadioGroup;
