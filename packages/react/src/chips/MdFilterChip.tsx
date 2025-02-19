import classnames from 'classnames';
import React, { useId } from 'react';

import MdIconCheck from '../icons-material/MdIconCheck';

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
  const uuid = useId();
  const chipId = id && id !== '' ? id : uuid;
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
          <MdIconCheck />
        </div>
      )}
      <div className="md-chip__label">{label}</div>
    </button>
  );
};

export default MdFilterChip;
