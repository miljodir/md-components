'use client';

import classnames from 'classnames';
import React, { useId, useState } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';

export interface MdTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  errorText?: string;
  helpText?: string;
  outerWrapperClass?: string;
}

export const MdTextArea = React.forwardRef<HTMLTextAreaElement, MdTextAreaProps>(
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
    const uuid = useId();
    const textAreaId = id && id !== '' ? id : uuid;
    const [helpOpen, setHelpOpen] = useState(false);

    const classNames = classnames(
      'md-textarea',
      {
        'md-textarea--disabled': !!disabled,
        'md-textarea--readonly': !!readOnly,
        'md-textarea--error': !!error,
      },
      className,
    );

    let ariaDescribedBy = helpText && helpText !== '' ? `md-textarea_help-text_${textAreaId}` : undefined;
    ariaDescribedBy = error && errorText && errorText !== '' ? `md-textarea_error_${textAreaId}` : ariaDescribedBy;

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    return (
      <div className={`md-textarea__outer-wrapper ${outerWrapperClass}`}>
        {showLabel && (
          <div className="md-textarea__label-wrapper">
            <div className="md-textarea__label">
              {label && label !== '' && <label htmlFor={textAreaId}>{label}</label>}
              {helpText && helpText !== '' && (
                <div className="md-textarea__help-button">
                  <MdHelpButton
                    aria-label={`Hjelpetekst for ${label}`}
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
          </div>
        )}

        <textarea
          id={textAreaId}
          aria-describedby={ariaDescribedBy}
          value={value}
          rows={rows}
          className={classNames}
          disabled={!!disabled}
          readOnly={!!readOnly}
          ref={ref}
          {...otherProps}
        />

        {error && errorText && errorText !== '' && (
          <div id={`md-textarea_error_${textAreaId}`} className="md-textarea__error">
            {errorText}
          </div>
        )}
      </div>
    );
  },
);
MdTextArea.displayName = 'MdTextArea';
export default MdTextArea;
