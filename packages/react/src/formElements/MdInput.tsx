import classnames from 'classnames';
import React, { useId, useState } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdIconWarning from '../icons-material/MdIconWarning';

export interface MdInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorText?: string;
  hideErrorIcon?: boolean;
  helpText?: string;
  outerWrapperClass?: string;
  suffix?: string | React.ReactNode;
  prefixIcon?: React.ReactNode;
  hideNumberArrows?: boolean;
  /**
   * v2.0.0: Replaces previous 'size'-prop for selecting overall width of whole component as normal or small.
   * Size-prop is now reserved as a standard prop on the inner html input element to specify its width.
   */
  mode?: 'normal' | 'small';
}

const MdInput = React.forwardRef<HTMLInputElement, MdInputProps>(
  (
    {
      label,
      id,
      error = false,
      errorText,
      hideErrorIcon = false,
      helpText,
      outerWrapperClass = '',
      suffix = undefined,
      prefixIcon = null,
      hideNumberArrows = false,
      disabled = false,
      readOnly = false,
      mode = 'normal',
      ...otherProps
    },
    ref,
  ) => {
    const [helpOpen, setHelpOpen] = useState(false);
    const uuid = useId();
    const inputId = id && id !== '' ? id : uuid;

    const classNames = classnames('md-input', {
      'md-input--small': mode === 'small',
      'md-input--disabled': !!disabled,
      'md-input--readonly': !!readOnly,
      'md-input--error': !!error,
      'md-input--has-suffix': suffix && suffix !== '',
      'md-input--has-prefix': prefixIcon !== null && prefixIcon !== '',
      'md-input--hide-number-arrows': !!hideNumberArrows,
    });

    const wrapperClassNames = classnames('md-input__wrapper', {
      'md-input__wrapper--small': mode === 'small',
    });

    const outerWrapperClasses = classnames(
      'md-input__outer-wrapper',
      {
        'md-input__outer-wrapper--small': mode === 'small',
      },
      outerWrapperClass,
    );

    let ariaDescribedBy = helpText && helpText !== '' ? `md-input_help-text_${inputId}` : undefined;
    ariaDescribedBy = error && errorText && errorText !== '' ? `md-input_error_${inputId}` : ariaDescribedBy;

    return (
      <div className={outerWrapperClasses}>
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
        {error && errorText && errorText !== '' && (
          <div id={`md-input_error_${inputId}`} className="md-input__error">
            {errorText}
          </div>
        )}
      </div>
    );
  },
);
MdInput.displayName = 'MdInput';

export default MdInput;
