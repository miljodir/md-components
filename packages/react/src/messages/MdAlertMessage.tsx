import classnames from 'classnames';
import React from 'react';

import MdCheckIcon from '../icons/MdCheckIcon';
import MdInfoIcon from '../icons/MdInfoIcon';
import MdWarningIcon from '../icons/MdWarningIcon';
import MdXIcon from '../icons/MdXIcon';

export interface MdAlertMessageProps {
  theme?: 'info' | 'confirm' | 'warning' | 'error';
  label?: string;
  hideIcon?: boolean;
  closable?: boolean;
  fullWidth?: boolean;
  onClose?(_e: React.MouseEvent): void;
  customIcon?: React.ReactNode | string;
}

const MdAlertMessage: React.FC<MdAlertMessageProps> = ({
  theme = 'info',
  label,
  hideIcon = false,
  closable = false,
  fullWidth = false,
  onClose,
  customIcon,
}: MdAlertMessageProps) => {
  const classNames = classnames('md-alert-message', {
    'md-alert-message--fullWidth': !!fullWidth,
    'md-alert-message--confirm': theme === 'confirm',
    'md-alert-message--warning': theme === 'warning',
    'md-alert-message--error': theme === 'error',
  });

  const renderIcon = () => {
    let icon = (<MdInfoIcon aria-label="Info" width="20" height="20" />) as React.ReactNode;
    if (customIcon) {
      icon = customIcon;
    } else if (theme === 'confirm') {
      icon = <MdCheckIcon aria-label="Bekreft" width="20" height="20" />;
    } else if (theme === 'warning' || theme === 'error') {
      icon = <MdWarningIcon aria-label="Advarsel" width="20" height="20" />;
    }
    return icon;
  };

  const clickHandler = (e: React.MouseEvent) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <div className={classNames}>
      <div className="md-alert-message__content">
        {!hideIcon && renderIcon()}
        {label}
      </div>

      {!!closable && onClose && (
        <button
          type="button"
          aria-label="Lukk"
          className="md-alert-message__button"
          onClick={e => {
            return clickHandler(e);
          }}
        >
          <MdXIcon aria-hidden="true" width="16" height="16" />
        </button>
      )}
    </div>
  );
};

export default MdAlertMessage;
