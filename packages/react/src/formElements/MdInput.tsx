import React, { useState } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdWarningIcon from '../icons/MdWarningIcon';

export interface MdInputProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string | undefined;
  id?: string;
  size?: 'normal' | 'small';
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorText?: string;
  hideErrorIcon: boolean;
  helpText?: string;
  outerWrapperClass?: string;
  suffix?: string;
  prefixIcon?: React.ReactNode;
};

const MdInput: React.FunctionComponent<MdInputProps> = ({
  label,
  id,
  value = '',
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
  ...otherProps
}: MdInputProps) => {
  const [helpOpen, setHelpOpen] = useState(false);
  const inputId = id && id !== '' ? id : uuidv4();

  const classNames = classnames('md-input', {
    'md-input--small': size === 'small',
    'md-input--disabled': !!disabled,
    'md-input--readonly': !!readOnly,
    'md-input--error': !!error,
    'md-input--has-suffix': suffix && suffix !== '',
    'md-input--has-prefix': prefixIcon !== null && prefixIcon !== ''
  });

  const wrapperClassNames = classnames('md-input__wrapper', {
    'md-input__wrapper--small': size === 'small'
  });

  return (
    <div className={`md-input__outer-wrapper ${outerWrapperClass}`}>
      <div className="md-input__label">
        {label && label !== '' &&
          <label htmlFor={`md-input_${inputId}`}>
            {label}
          </label>
        }
        {helpText && helpText !== '' &&
          <div className="md-input__help-button">
            <MdHelpButton
              onClick={() => setHelpOpen(!helpOpen)}
              expanded={helpOpen}
            />
          </div>
        }
      </div>

      {helpText && helpText !== '' &&
        <div className={`md-input__help-text ${helpOpen ? 'md-input__help-text--open' : ''}`}>
          <MdHelpText>{ helpText }</MdHelpText>
        </div>
      }
      <div className={wrapperClassNames}>
        {prefixIcon &&
          <div className={`${classnames('md-input__prefix', {
            'md-input__prefix--disabled': !!disabled
          })}`}>
            {prefixIcon}
          </div>
        }
        <input
          id={`md-input_${inputId}`}
          className={classNames}
          value={value}
          placeholder={placeholder}
          disabled={!!disabled}
          readOnly={!!readOnly}
          {...otherProps}
        />

        <div className="md-input__suffix">
          {suffix &&
            <div className="md-input__suffix-content">
              {suffix}
            </div>
          }
          {error && !hideErrorIcon &&
            <div className="md-input__error-icon">
              <MdWarningIcon />
            </div>
          }
        </div>
      </div>
      {error && errorText && errorText !== '' &&
        <div className="md-input__error">{errorText}</div>
      }
    </div>
  );
}

export default MdInput;
