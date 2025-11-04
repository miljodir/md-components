'use client';

import classnames from 'classnames';
import React, { useId, useState } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdIconWarning from '../icons-material/MdIconWarning';

export interface MdInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorText?: string;
  supportText?: string;
  hideErrorIcon?: boolean;
  helpText?: string;
  outerWrapperClass?: string;
  suffix?: string | React.ReactNode;
  prefixIcon?: React.ReactNode;
  hideNumberArrows?: boolean;
  /**
   * v6.x.x: The mode "normal" is deprecated and will be removed in a future version. Please use "medium" instead
   */
  mode?: 'small' | 'medium' | 'large' | 'normal';
}

export const MdInput = React.forwardRef<HTMLInputElement, MdInputProps>(
  (
    {
      label,
      id,
      error = false,
      errorText,
      supportText,
      hideErrorIcon = false,
      helpText,
      outerWrapperClass = '',
      className = '',
      suffix = undefined,
      prefixIcon = null,
      hideNumberArrows = false,
      disabled = false,
      readOnly = false,
      mode = 'medium',
      ...otherProps
    },
    ref,
  ) => {
    const [helpOpen, setHelpOpen] = useState(false);
    const uuid = useId();
    const inputId = id && id !== '' ? id : uuid;

    const classNames = classnames(
      'md-input', {
        'md-input--small': mode === 'small',
        'md-input--large': mode === 'large',
        'md-input--disabled': !!disabled,
        'md-input--readonly': !!readOnly,
        'md-input--error': !!error,
        'md-input--has-suffix': suffix && suffix !== '',
        'md-input--has-prefix': prefixIcon !== null && prefixIcon !== '',
        'md-input--hide-number-arrows': !!hideNumberArrows,
      },
      className
    );

    const wrapperClassNames = classnames('md-input__wrapper', {
      'md-input__wrapper--small': mode === 'small',
      'md-input__wrapper--large': mode === 'large',
    });

    const outerWrapperClasses = classnames(
      'md-input__outer-wrapper',
      {
        'md-input__outer-wrapper--small': mode === 'small',
        'md-input__outer-wrapper--large': mode === 'large',
      },
      outerWrapperClass,
    );

    // Build aria-describedby in order of priority: error → support → help text
    const ariaDescribedBy = [
      helpText && helpText !== '' && `md-input_help-text_${inputId}`,
      error && errorText && errorText !== '' && `md-input_error_${inputId}`,
      supportText && supportText !== '' && `md-input_support-text_${inputId}`,
    ].filter(Boolean).join(' ') || undefined;

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    /* Log warning if mode = 'normal' */
    if (mode === 'normal') {
      console.warn(
        'MdInput: The mode "normal" is deprecated and will be removed in a future version. Please use "medium" instead.',
      );
    }

    return (
      <div className={outerWrapperClasses}>
        {showLabel && (
          <div className="md-input__label-wrapper">
            <div className="md-input__label">
              {label && label !== '' && <label htmlFor={inputId}>{label}</label>}
              {helpText && helpText !== '' && (
                <div className="md-input__help-button">
                  <MdHelpButton
                    aria-label={`Hjelpetekst for ${label}`}
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
            aria-describedby={ariaDescribedBy}
            className={classNames}
            ref={ref}
            disabled={!!disabled}
            readOnly={!!readOnly}
            {...otherProps}
          />

          <div className="md-input__suffix">
            {suffix}
            {error && !hideErrorIcon && (
              <div className="md-input__error-icon">
                <MdIconWarning aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
        {error && errorText && errorText !== '' ? (
          <div id={`md-input_error_${inputId}`} className="md-input__error">
            {errorText}
          </div>
        ) : supportText && supportText !== '' ? (
          <div id={`md-input_support_${inputId}`} className="md-input__support-text">
            {supportText}
          </div>
        ) : null}
      </div>
    );
  },
);
MdInput.displayName = 'MdInput';

export default MdInput;
