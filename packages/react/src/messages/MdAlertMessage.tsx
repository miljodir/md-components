'use client';

import classnames from 'classnames';
import React, { useState } from 'react';
import MdIconButton from '../iconButton/MdIconButton';
import MdIconCheckCircle from '../icons-material/MdIconCheckCircle';
import MdIconClose from '../icons-material/MdIconClose';
import MdIconDangerous from '../icons-material/MdIconDangerous';
import MdIconInfo from '../icons-material/MdIconInfo';
import MdIconWarning from '../icons-material/MdIconWarning';
import MdIconKeyboardArrowDown from '../icons-material/MdIconKeyboardArrowDown';
import MdIconKeyboardArrowUp from '../icons-material/MdIconKeyboardArrowUp';

interface Labels {
  info?: string;
  confirm?: string;
  error?: string;
  warning?: string;
  closeButton?: string;
  showMore?: string;
  showLess?: string;
}

export interface MdAlertMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string | React.ReactNode;
  labels?: Labels;
  theme?: 'info' | 'success' | 'warning' | 'error' | 'info-box';
  description?: string | React.ReactNode;
  hideIcon?: boolean;
  closable?: boolean;
  fullWidth?: boolean;
  onClose?(_e: React.MouseEvent): void;
  customIcon?: React.ReactNode | string;
  className?: string;
  alignContent?: 'start' | 'center' | 'end';
  expandable?: boolean;
  defaultExpanded?: boolean;
}

export const MdAlertMessage: React.FC<MdAlertMessageProps> = ({
  theme = 'info',
  label,
  labels = {},
  description,
  hideIcon = false,
  closable = false,
  fullWidth = false,
  expandable = false,
  onClose,
  customIcon,
  className,
  alignContent,
  defaultExpanded = false,
  ...otherProps
}: MdAlertMessageProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const defaultLabels: Required<Labels> = {
    info: 'Info',
    confirm: 'Bekreft',
    error: 'Feil',
    warning: 'Advarsel',
    closeButton: 'Lukk',
    showMore: 'Vis mer',
    showLess: 'Vis mindre',
  };
  const mergedLabels: Required<Labels> = { ...defaultLabels, ...labels };

  const classNames = classnames(
    'md-alert-message',
    {
      'md-alert-message--fullWidth': !!fullWidth,
      'md-alert-message--success': theme === 'success',
      'md-alert-message--warning': theme === 'warning',
      'md-alert-message--error': theme === 'error',
      'md-alert-message--info-box': theme === 'info-box',
    },
    className,
  );

  const contentClassNames = classnames('md-alert-message__content', {
    'md-alert-message__content--center': alignContent === 'center',
    'md-alert-message__content--end': alignContent === 'end',
  });

  const renderIcon = () => {
    let icon = (
      <MdIconInfo className="md-alert-message__icon" aria-label={mergedLabels.info} width="24" height="24" />
    ) as React.ReactNode;
    if (customIcon) {
      icon = customIcon;
    } else if (theme === 'success') {
      icon = (
        <MdIconCheckCircle
          className="md-alert-message__icon"
          aria-label={mergedLabels.confirm}
          width="24"
          height="24"
        />
      );
    } else if (theme === 'error') {
      icon = (
        <MdIconDangerous className="md-alert-message__icon" aria-label={mergedLabels.error} width="24" height="24" />
      );
    } else if (theme === 'warning') {
      icon = (
        <MdIconWarning className="md-alert-message__icon" aria-label={mergedLabels.warning} width="24" height="24" />
      );
    }
    return icon;
  };

  const clickHandler = (e: React.MouseEvent) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <div className={classNames} {...otherProps}>
      {!hideIcon && renderIcon()}
      <div className={contentClassNames}>
        {label && <div className="md-alert-message__label">{label}</div>}
        {description && (
          <div
            className={classnames('md-alert-message__description', {
              'md-alert-message__description--collapsed': expandable && !isExpanded,
            })}
          >
            {description}
          </div>
        )}
        {expandable && description && (
          <button
            type="button"
            className="md-alert-message__expand-button"
            onClick={() => setIsExpanded(prev => !prev)}
            aria-expanded={isExpanded}
            
          >
            <span className="md-alert-message__expand-icon" aria-hidden="true">
              <MdIconKeyboardArrowUp className="md-alert-message__expand-icon__open" />
              <MdIconKeyboardArrowDown className="md-alert-message__expand-icon__close" /> 
            </span>
            
            {isExpanded ? mergedLabels.showLess : mergedLabels.showMore}
          </button>
        )}
      </div>

      {!!closable && onClose && (
        <div className="md-alert-message__button-wrapper">
          <MdIconButton
            className="md-alert-message__button"
            theme="plain"
            type="button"
            label={mergedLabels.closeButton}
            onClick={e => {
              return clickHandler(e);
            }}
          >
            <MdIconClose />
          </MdIconButton>
        </div>
      )}
    </div>
  );
};

export default MdAlertMessage;
