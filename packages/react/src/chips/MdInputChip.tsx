import React, { ClickEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';

import XIcon from '../icons/XIcon';

export interface MdInputChipProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
    label: string | null;
    id: string | number;
    active?: boolean;
    disabled?: boolean;
    prefixIcon?: React.ReactNode;
    onClick;
    className?: string;
    hideCloseIcon?: boolean;
}

const MdInputChip: React.FunctionComponent<MdInputChipProps> = ({
  label,
  id,
  active = false,
  disabled = false,
  prefixIcon = null,
  className = '',
  hideCloseIcon = false,
  ...otherProps
}: MdInputChipProps) => {
  const chipId = id && id !== '' ? id : uuidv4();
  const buttonClassNames = classnames('md-chip', className, {
    'md-chip--active': !!active,
    'md-chip--disabled': !!disabled
  });

  return (
    <button
      className={buttonClassNames}
      id={chipId}
      disabled={disabled}
      {...otherProps}
    >
      {prefixIcon &&
        <div className="md-chip__left-icon">
          {prefixIcon}
        </div>
      }
      <div className="md-chip__label">{label}</div>
      {!hideCloseIcon &&
        <div className="md-chip__right-icon">
          <XIcon />
        </div>
      }
    </button>
  );
};

export default MdInputChip;
