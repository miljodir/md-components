import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';

import CheckIcon from '../icons/CheckIcon';

export interface MdFilterChipProps {
    label: string | null;
    id?: string | number;
    active?: boolean;
    disabled?: boolean;
    prefixIcon?: React.ReactNode;
    onClick?(e: React.MouseEventHandler<HTMLButtonElement>): void;
    className?: string;
}

const MdFilterChip: React.FunctionComponent<MdFilterChipProps> = ({
  label,
  id,
  active = false,
  disabled = false,
  prefixIcon = null,
  className = '',
  onClick,
  ...otherProps
}: MdFilterChipProps) => {
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
      // @ts-expect-error
      onClick={onClick}
      {...otherProps}
    >
      {prefixIcon && !active &&
        <div className="md-chip__left-icon">
          {prefixIcon}
        </div>
      }
      {active &&
        <div className="md-chip__left-icon">
          <CheckIcon />
        </div>
      }
      <div className="md-chip__label">{label}</div>
    </button>
  );
};

export default MdFilterChip;
