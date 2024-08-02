import classnames from 'classnames';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  error?: string;
  helpText?: string;
  onChange?(_e: ChangeEvent<HTMLInputElement>): void;
  onBlur?(_e: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(_e: React.FocusEvent<HTMLInputElement>): void;
}

const MdCheckboxGroup: React.FunctionComponent<MdCheckboxGroupProps> = ({
  options = [],
  selectedOptions,
  label,
  id,
  disabled = false,
  direction,
  columns = 2,
  className = '',
  error,
  helpText,
  onChange,
  onFocus,
  onBlur,
  ...otherProps
}: MdCheckboxGroupProps) => {
  const checkboxGroupId = id || uuidv4();
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
        return item.value.toString() === option.value.toString();
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

  return (
    <fieldset className={classNames} {...otherProps}>
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

      {error && error !== '' && <div className="md-checkboxgroup__error">{error}</div>}
    </fieldset>
  );
};

export default MdCheckboxGroup;
