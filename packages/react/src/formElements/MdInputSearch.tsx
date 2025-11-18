'use client';

import classnames from 'classnames';
import React, { useId, useState } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdIconButton from '../iconButton/MdIconButton';
import MdIconSearch from '../icons-material/MdIconSearch';

export interface MdInputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  supportText?: string;
  helpText?: string;
  outerWrapperClass?: string;
  button?: boolean;
  mode?: 'small' | 'medium' | 'large';
  onSearch: (term: string) => void;
}

export const MdInputSearch = React.forwardRef<HTMLInputElement, MdInputSearchProps>(
  (
    {
      label,
      id,
      supportText,
      helpText,
      outerWrapperClass = '',
      className = '',
      mode = 'medium',
      button = true,
      value,
      onSearch,
      onChange,
      ...otherProps
    },
    ref,
  ) => {
    const [helpOpen, setHelpOpen] = useState(false);
    const uuid = useId();
    const inputId = id && id !== '' ? id : uuid;

    const classNames = classnames(
      'md-inputsearch',
      {
        'md-inputsearch--small': mode === 'small',
        'md-inputsearch--large': mode === 'large',
        'md-inputsearch--button': button,
        'md-inputsearch--has-prefix': !button,
      },
      className,
    );

    const wrapperClassNames = classnames('md-inputsearch__wrapper', {
      'md-inputsearch__wrapper--small': mode === 'small',
      'md-inputsearch__wrapper--large': mode === 'large',
    });

    const outerWrapperClasses = classnames(
      'md-inputsearch__outer-wrapper',
      {
        'md-inputsearch__outer-wrapper--small': mode === 'small',
        'md-inputsearch__outer-wrapper--large': mode === 'large',
      },
      outerWrapperClass,
    );

    // Build aria-describedby in order of priority: help → support
    const ariaDescribedBy =
      [
        helpText && helpText !== '' && `md-inputsearch_help-text_${inputId}`,
        supportText && supportText !== '' && `md-inputsearch_support_${inputId}`,
      ]
        .filter(Boolean)
        .join(' ') || undefined;

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    return (
      <div className={outerWrapperClasses}>
        {showLabel && (
          <div className="md-inputsearch__label-wrapper">
            <div className="md-inputsearch__label">
              {label && label !== '' && <label htmlFor={inputId}>{label}</label>}
              {helpText && helpText !== '' && (
                <div className="md-inputsearch__help-button">
                  <MdHelpButton
                    aria-label={`Hjelpetekst for ${label}`}
                    id={`md-inputsearch_help-button_${inputId}`}
                    aria-expanded={helpOpen}
                    aria-controls={`md-inputsearch_help-text_${inputId}`}
                    onClick={() => {
                      setHelpOpen(!helpOpen);
                    }}
                    expanded={helpOpen}
                  />
                </div>
              )}
            </div>

            {helpText && helpText !== '' && (
              <div className={`md-inputsearch__help-text ${helpOpen ? 'md-inputsearch__help-text--open' : ''}`}>
                <MdHelpText
                  id={`md-inputsearch_help-text_${inputId}`}
                  aria-labelledby={helpText && helpText !== '' ? `md-inputsearch_help-button_${inputId}` : undefined}
                >
                  {helpText}
                </MdHelpText>
              </div>
            )}
          </div>
        )}

        <form
          className={wrapperClassNames}
          onSubmit={e => {
            e.preventDefault();
            onSearch(String(value));
          }}
        >
          {!button && (
            <div aria-hidden="true" className="md-inputsearch__prefix">
              <MdIconSearch />
            </div>
          )}
          <input
            type="search"
            id={inputId}
            aria-describedby={ariaDescribedBy}
            className={classNames}
            ref={ref}
            onChange={onChange}
            {...otherProps}
          />
          {button && (
            <MdIconButton aria-label="Søk" type="submit" theme="filled">
              <MdIconSearch />
            </MdIconButton>
          )}
        </form>
        {supportText && supportText !== '' && (
          <div id={`md-inputsearch_support_${inputId}`} className="md-inputsearch__support-text">
            {supportText}
          </div>
        )}
      </div>
    );
  },
);
MdInputSearch.displayName = 'MdInputSearch';

export default MdInputSearch;
