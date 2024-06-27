import classnames from 'classnames';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdRadioButton from './MdRadioButton';
import type { ChangeEvent } from 'react';

export interface MdRadioGroupOption {
  // 3.0.0: Rename previous prop id to value
  value: string;
  text?: string;
}

export interface MdRadioGroupProps {
  options?: MdRadioGroupOption[];
  // 3.0.0: Rename previous prop selectedOption to value
  value?: string;
  label?: string;
  id?: string;
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
  options = [],
  value,
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
  const radioGroupId = id || uuidv4();
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

  return (
    <fieldset role="radiogroup" className={classNames} {...otherProps}>
      <legend className="md-radiogroup__label">
        {label && label !== '' && <div>{label}</div>}

        {helpText && helpText !== '' && (
          <MdHelpButton
            aria-label={`Hjelpetekst for ${label}`}
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
              data-value={option.value}
              data-text={option.text}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          );
        })}
      </div>

      {error && error !== '' && <div className="md-radiogroup__error">{error}</div>}
    </fieldset>
  );
};

export default MdRadioGroup;
