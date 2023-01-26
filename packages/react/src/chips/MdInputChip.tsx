import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';

import MdXIcon from '../icons/MdXIcon';

export interface MdInputChipProps {
    label: string | null;
    id?: string | number;
    active?: boolean;
    disabled?: boolean;
    prefixIcon?: React.ReactNode;
    onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
    className?: string;
    hideCloseIcon?: boolean;
    solid?: boolean;
}

const MdInputChip: React.FunctionComponent<MdInputChipProps> = ({
  label,
  id,
  active = false,
  disabled = false,
  prefixIcon = null,
  className = '',
  hideCloseIcon = false,
  solid = false,
  ...otherProps
}: MdInputChipProps) => {
  const chipId = id && id !== '' ? id : uuidv4();
  const buttonClassNames = classnames('md-chip', className, {
    'md-chip--active': !!active,
    'md-chip--disabled': !!disabled,
    'md-chip--solid': !!solid
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
          <MdXIcon />
        </div>
      }
    </button>
  );
};

export default MdInputChip;
