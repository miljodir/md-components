'use client';

import classnames from 'classnames';
import React, { useId, useState } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdCheckbox from './MdCheckbox';
import type { ChangeEvent } from 'react';

/**
 * 3.0.0: Replaces previous type MdCheckboxGroupOptionProps.
 */
export interface MdCheckboxGroupOption {
  value: string;
  text?: string;
}

export interface MdCheckboxGroupProps {
  options?: MdCheckboxGroupOption[];
  selectedOptions?: MdCheckboxGroupOption[];
  label?: string;
  id?: string;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical' | 'grid';
  columns?: number;
  className?: string;
  error?: boolean;
  /**
   * v6.0.0: Added `errorText` prop to display error messages, this is now required to set error state.
   */
  errorText?: string;
  helpText?: string;
  onChange?(_e: ChangeEvent<HTMLInputElement>): void;
  onBlur?(_e: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(_e: React.FocusEvent<HTMLInputElement>): void;
}

export const MdCheckboxGroup: React.FunctionComponent<MdCheckboxGroupProps> = ({
  options = [],
  selectedOptions,
  label,
  id,
  disabled = false,
  direction,
  columns = 2,
  className = '',
  error = false,
  errorText,
  helpText,
  onChange,
  onFocus,
  onBlur,
  ...otherProps
}: MdCheckboxGroupProps) => {
  const uuid = useId();
  const checkboxGroupId = id || uuid;
  const [helpOpen, setHelpOpen] = useState(false);

  const classNames = classnames(
    'md-checkboxgroup',
    {
      'md-checkboxgroup--disabled': !!disabled,
    },
    className,
  );

  const optionsClassNames = classnames('md-checkboxgroup__options', {
    'md-checkboxgroup__options--vertical': direction === 'vertical',
    'md-checkboxgroup__options--grid': direction === 'grid',
  });

  const optionIsSelected = (option: MdCheckboxGroupOption) => {
    if (selectedOptions) {
      const find = selectedOptions.find(item => {
        return item.value === option.value;
      });
      return find !== undefined;
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
    <fieldset className={classNames} {...otherProps}>
      {showLabel && (
        <div className="md-checkboxgroup__label-wrapper">
          <legend className="md-checkboxgroup__label">
            {label && label !== '' && <div>{label}</div>}
            {helpText && helpText !== '' && (
              <MdHelpButton
                aria-label={`Hjelpetekst for ${label}`}
                id={`md-checkboxgroup_help-button_${checkboxGroupId}`}
                aria-expanded={helpOpen}
                aria-controls={`md-checkboxgroup_help-text_${checkboxGroupId}`}
                onClick={() => {
                  return setHelpOpen(!helpOpen);
                }}
                expanded={helpOpen}
              />
            )}
          </legend>

          {helpText && helpText !== '' && (
            <div className={`md-checkboxgroup__help-text ${helpOpen ? 'md-checkboxgroup__help-text--open' : ''}`}>
              <MdHelpText
                id={`md-checkboxgroup_help-text_${checkboxGroupId}`}
                aria-labelledby={
                  helpText && helpText !== '' ? `md-checkboxgroup_help-button_${checkboxGroupId}` : undefined
                }
              >
                {helpText}
              </MdHelpText>
            </div>
          )}
        </div>
      )}

      <div
        id={checkboxGroupId}
        aria-describedby={helpText && helpText !== '' ? `md-checkboxgroup_help-text_${checkboxGroupId}` : undefined}
        className={optionsClassNames}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(max-content, 1fr))` }}
      >
        {options.map(option => {
          return (
            <MdCheckbox
              key={`key_${checkboxGroupId}_${option.value}`}
              id={`md-checkboxgroup_${checkboxGroupId}_${option.value}`}
              label={option.text}
              disabled={disabled}
              checked={optionIsSelected(option)}
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

      {error && errorText && errorText !== '' && <div className="md-checkboxgroup__error">{errorText}</div>}
    </fieldset>
  );
};

export default MdCheckboxGroup;
