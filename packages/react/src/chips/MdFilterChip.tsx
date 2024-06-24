import classnames from 'classnames';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import MdCheckIcon from '../icons/MdCheckIcon';

export interface MdFilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | null;
  active?: boolean;
  prefixIcon?: React.ReactNode;
  className?: string;
}

const MdFilterChip: React.FunctionComponent<MdFilterChipProps> = ({
  label,
  id,
  active = false,
  disabled = false,
  prefixIcon = null,
  className = '',
  ...otherProps
}: MdFilterChipProps) => {
  const chipId = id && id !== '' ? id : uuidv4();
  const buttonClassNames = classnames('md-chip', className, {
    'md-chip--active': !!active,
    'md-chip--disabled': !!disabled,
  });

  return (
    <button
      type="button"
      aria-pressed={active}
      className={buttonClassNames}
      id={chipId || undefined}
      disabled={disabled}
      {...otherProps}
    >
      {prefixIcon && !active && (
        <div aria-hidden="true" className="md-chip__left-icon">
          {prefixIcon}
        </div>
      )}
      {active && (
        <div aria-hidden="true" className="md-chip__left-icon">
          <MdCheckIcon />
        </div>
      )}
      <div className="md-chip__label">{label}</div>
    </button>
  );
};

export default MdFilterChip;
