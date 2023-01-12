import React, { useState } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';

export interface MdTextAreaProps {
  value?: string | undefined;
  rows?: number;
  label?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorText?: string;
  helpText?: string;
  outerWrapperClass?: string;
};

const MdTextArea: React.FunctionComponent<MdTextAreaProps> = ({
  label,
  id,
  rows = 10,
  value = '',
  placeholder,
  disabled = false,
  readOnly = false,
  error = false,
  errorText,
  helpText,
  outerWrapperClass = '',
  ...otherProps
}: MdTextAreaProps) => {
  const [helpOpen, setHelpOpen] = useState(false);
  const textAreaId = id && id !== '' ? id : uuidv4();

  const classNames = classnames('md-textarea', {
    'md-textarea--disabled': !!disabled,
    'md-textarea--readonly': !!readOnly,
    'md-textarea--error': !!error
  });

  return (
    <div className={`md-textarea__outer-wrapper ${outerWrapperClass}`}>
      <div className="md-textarea__label">
        {label && label !== '' &&
          <label htmlFor={`md-textarea_${textAreaId}`}>
            {label}
          </label>
        }
        {helpText && helpText !== '' &&
          <div className="md-textarea__help-button">
            <MdHelpButton
              onClick={() => setHelpOpen(!helpOpen)}
              expanded={helpOpen}
            />
          </div>
        }
      </div>

      {helpText && helpText !== '' &&
        <div className={`md-textarea__help-text ${helpOpen ? 'md-textarea__help-text--open' : ''}`}>
          <MdHelpText>{ helpText }</MdHelpText>
        </div>
      }
      <div className="md-textarea__wrapper">
        <textarea
          id={`md-textarea_${textAreaId}`}
          value={value}
          rows={rows}
          className={classNames}
          placeholder={placeholder}
          disabled={!!disabled}
          readOnly={!!readOnly}
          {...otherProps}
        />
      </div>
      {error && errorText && errorText !== '' &&
        <div className="md-textarea__error">{errorText}</div>
      }
    </div>
  );
};

export default MdTextArea;
