'use client';

import classnames from 'classnames';
import React from 'react';
import MdIconButton from '../iconButton/MdIconButton';
import MdIconCheck from '../icons-material/MdIconCheck';
import MdIconClose from '../icons-material/MdIconClose';
import MdIconInfo from '../icons-material/MdIconInfo';
import MdIconWarning from '../icons-material/MdIconWarning';

export interface MdAlertMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'info' | 'confirm' | 'warning' | 'error';
  label?: string | React.ReactNode;
  hideIcon?: boolean;
  closable?: boolean;
  fullWidth?: boolean;
  onClose?(_e: React.MouseEvent): void;
  customIcon?: React.ReactNode | string;
  className?: string;
  alignContent?: 'start' | 'center' | 'end';
}

export const MdAlertMessage: React.FC<MdAlertMessageProps> = ({
  theme = 'info',
  label,
  hideIcon = false,
  closable = false,
  fullWidth = false,
  onClose,
  customIcon,
  className,
  alignContent,
  ...otherProps
}: MdAlertMessageProps) => {
  const classNames = classnames(
    'md-alert-message',
    {
      'md-alert-message--fullWidth': !!fullWidth,
      'md-alert-message--confirm': theme === 'confirm',
      'md-alert-message--warning': theme === 'warning',
      'md-alert-message--error': theme === 'error',
    },
    className,
  );

  const contentClassNames = classnames('md-alert-message__content', {
    'md-alert-message__content--start': alignContent === 'start',
    'md-alert-message__content--end': alignContent === 'end',
  });

  const renderIcon = () => {
    let icon = (
      <MdIconInfo className="md-alert-message__icon" aria-label="Info" width="20" height="20" />
    ) as React.ReactNode;
    if (customIcon) {
      icon = customIcon;
    } else if (theme === 'confirm') {
      icon = <MdIconCheck className="md-alert-message__icon" aria-label="Bekreft" width="20" height="20" />;
    } else if (theme === 'warning' || theme === 'error') {
      icon = <MdIconWarning className="md-alert-message__icon" aria-label="Advarsel" width="20" height="20" />;
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
      <div className={contentClassNames}>
        {!hideIcon && renderIcon()}
        {label}
      </div>

      {!!closable && onClose && (
        <MdIconButton
          className="md-alert-message__button"
          theme="plain"
          type="button"
          aria-label="Lukk"
          onClick={e => {
            return clickHandler(e);
          }}
        >
          <MdIconClose />
        </MdIconButton>
      )}
    </div>
  );
};

export default MdAlertMessage;
