import classnames from 'classnames';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdWarningIcon from '../icons/MdWarningIcon';

export interface MdInputProps {
  value?: string | number | undefined;
  id?: string;
  size?: 'normal' | 'small';
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorText?: string;
  hideErrorIcon?: boolean;
  helpText?: string;
  outerWrapperClass?: string;
  suffix?: string;
  prefixIcon?: React.ReactNode;
  hideNumberArrows?: boolean;
  onChange?(_e: React.ChangeEvent<HTMLInputElement>): void;
  onClick?(_e: React.MouseEvent<HTMLInputElement>): void;
  onBlur?(_e: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(_e: React.FocusEvent<HTMLInputElement>): void;
  onKeyDown?(_e: React.KeyboardEvent<HTMLInputElement>): void;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  step?: number;
}

const MdInput = React.forwardRef<HTMLInputElement, MdInputProps>(
  (
    {
      label,
      id,
      value = '',
      type = 'text',
      size = 'normal',
      placeholder,
      disabled = false,
      readOnly = false,
      error = false,
      errorText,
      hideErrorIcon = false,
      helpText,
      outerWrapperClass = '',
      suffix = undefined,
      prefixIcon = null,
      hideNumberArrows = false,
      ...otherProps
    },
    ref,
  ) => {
    const [helpOpen, setHelpOpen] = useState(false);
    const inputId = id && id !== '' ? id : uuidv4();

    const classNames = classnames('md-input', {
      'md-input--small': size === 'small',
      'md-input--disabled': !!disabled,
      'md-input--readonly': !!readOnly,
      'md-input--error': !!error,
      'md-input--has-suffix': suffix && suffix !== '',
      'md-input--has-prefix': prefixIcon !== null && prefixIcon !== '',
      'md-input--hide-number-arrows': !!hideNumberArrows,
    });

    const wrapperClassNames = classnames('md-input__wrapper', {
      'md-input__wrapper--small': size === 'small',
    });

    const outerWrapperClasses = classnames(
      'md-input__outer-wrapper',
      {
        'md-input__outer-wrapper--small': size === 'small',
      },
      outerWrapperClass,
    );

    return (
      <div className={outerWrapperClasses}>
        <div className="md-input__label">
          {label && label !== '' && <label htmlFor={inputId}>{label}</label>}
          {helpText && helpText !== '' && (
            <div className="md-input__help-button">
              <MdHelpButton
                ariaLabel={`Hjelpetekst for ${label}`}
                id={`md-input_help-button_${inputId}`}
                aria-expanded={helpOpen}
                aria-controls={`md-input_help-text_${inputId}`}
                onClick={() => {
                  return setHelpOpen(!helpOpen);
                }}
                expanded={helpOpen}
              />
            </div>
          )}
        </div>

        {helpText && helpText !== '' && (
          <div className={`md-input__help-text ${helpOpen ? 'md-input__help-text--open' : ''}`}>
            <MdHelpText
              id={`md-input_help-text_${inputId}`}
              aria-labelledby={helpText && helpText !== '' ? `md-input_help-button_${inputId}` : undefined}
            >
              {helpText}
            </MdHelpText>
          </div>
        )}
        <div className={wrapperClassNames}>
          {prefixIcon && (
            <div
              aria-hidden="true"
              className={`${classnames('md-input__prefix', {
                'md-input__prefix--disabled': !!disabled,
              })}`}
            >
              {prefixIcon}
            </div>
          )}
          <input
            id={inputId}
            aria-describedby={helpText && helpText !== '' ? `md-input_help-text_${inputId}` : undefined}
            className={classNames}
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={!!disabled}
            readOnly={!!readOnly}
            ref={ref}
            {...otherProps}
          />

          <div className="md-input__suffix">
            {suffix}
            {error && !hideErrorIcon && (
              <div className="md-input__error-icon">
                <MdWarningIcon aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
        {error && errorText && errorText !== '' && <div className="md-input__error">{errorText}</div>}
      </div>
    );
  },
);
MdInput.displayName = 'MdInput';

export default MdInput;
