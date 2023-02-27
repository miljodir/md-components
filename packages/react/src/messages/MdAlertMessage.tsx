import React from "react";
import classnames from 'classnames';

import MdInfoIcon from "../icons/MdInfoIcon";
import MdWarningIcon from "../icons/MdWarningIcon";
import MdCheckIcon from "../icons/MdCheckIcon";
import MdXIcon from "../icons/MdXIcon";

interface MdAlertMessageProps {
  theme?: 'info' | 'confirm' | 'warning' | 'error';
  label?: string;
  hideIcon?: boolean;
  closable?: boolean;
  fullWidth?: boolean;
  onClose?(e: React.MouseEvent): void;
};

const MdAlertMessage: React.FC<MdAlertMessageProps> = ({
  theme = 'info',
  label,
  hideIcon = false,
  closable = false,
  fullWidth = false,
  onClose
}: MdAlertMessageProps) => {
  const classNames = classnames('md-alert-message', {
    'md-alert-message--fullWidth': !!fullWidth,
    'md-alert-message--confirm': theme === 'confirm',
    'md-alert-message--warning': theme === 'warning',
    'md-alert-message--error': theme === 'error',
  });

  const renderIcon = () => {
    let icon = <MdInfoIcon width="20" height="20" />
    if (theme === 'confirm') {
      icon = <MdCheckIcon width="20" height="20" />
    } else if (theme === 'warning' || theme === 'error') {
      icon = <MdWarningIcon width="20" height="20" />
    }
    return icon;
  }

  const clickHandler = (e: React.MouseEvent) => {
    // console.log(e);
    if (onClose) {
      onClose(e);
    }
  }

  return (
    <div className={classNames}>
      <div className="md-alert-message__content">
        {!hideIcon && renderIcon()}
        {label}
      </div>

      {!!closable && onClose &&
        <button
          className="md-alert-message__button"
          onClick={(e) => clickHandler(e)}
        >
          <MdXIcon width="16" height="16" />
        </button>
      }
    </div>
  );
};

export default MdAlertMessage;
