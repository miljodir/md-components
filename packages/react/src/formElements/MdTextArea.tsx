import classnames from 'classnames';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';

export interface MdTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  errorText?: string;
  helpText?: string;
  outerWrapperClass?: string;
}

const MdTextArea = React.forwardRef<HTMLTextAreaElement, MdTextAreaProps>(
  (
    {
      label,
      id,
      rows = 10,
      value = '',
      disabled = false,
      readOnly = false,
      error = false,
      errorText,
      helpText,
      outerWrapperClass = '',
      className,
      ...otherProps
    },
    ref,
  ) => {
    const [helpOpen, setHelpOpen] = useState(false);
    const textAreaId = id && id !== '' ? id : uuidv4();

    const classNames = classnames(
      'md-textarea',
      {
        'md-textarea--disabled': !!disabled,
        'md-textarea--readonly': !!readOnly,
        'md-textarea--error': !!error,
      },
      className,
    );

    return (
      <div className={`md-textarea__outer-wrapper ${outerWrapperClass}`}>
        <div className="md-textarea__label">
          {label && label !== '' && <label htmlFor={textAreaId}>{label}</label>}
          {helpText && helpText !== '' && (
            <div className="md-textarea__help-button">
              <MdHelpButton
                ariaLabel={`Hjelpetekst for ${label}`}
                id={`md-textarea_help-button_${textAreaId}`}
                aria-expanded={helpOpen}
                aria-controls={`md-textarea_help-text_${textAreaId}`}
                onClick={() => {
                  return setHelpOpen(!helpOpen);
                }}
                expanded={helpOpen}
              />
            </div>
          )}
        </div>

        {helpText && helpText !== '' && (
          <div className={`md-textarea__help-text ${helpOpen ? 'md-textarea__help-text--open' : ''}`}>
            <MdHelpText
              id={`md-textarea_help-text_${textAreaId}`}
              aria-labelledby={helpText && helpText !== '' ? `md-textarea_help-button_${textAreaId}` : undefined}
            >
              {helpText}
            </MdHelpText>
          </div>
        )}
        <div className="md-textarea__wrapper">
          <textarea
            id={textAreaId}
            aria-describedby={helpText && helpText !== '' ? `md-textarea_help-text_${textAreaId}` : undefined}
            value={value}
            rows={rows}
            className={classNames}
            disabled={!!disabled}
            readOnly={!!readOnly}
            ref={ref}
            {...otherProps}
          />
        </div>
        {error && errorText && errorText !== '' && <div className="md-textarea__error">{errorText}</div>}
      </div>
    );
  },
);
MdTextArea.displayName = 'MdTextArea';
export default MdTextArea;
