'use client';

import classnames from 'classnames';
import React, { useId } from 'react';
import MdIconClose from '../icons-material/MdIconClose';

export interface MdInputChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | null;
  active?: boolean;
  prefixIcon?: React.ReactNode;
  hideCloseIcon?: boolean;
  solid?: boolean;
}

export const MdInputChip: React.FunctionComponent<MdInputChipProps> = ({
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
  const uuid = useId();
  const chipId = id && id !== '' ? id : uuid;
  const buttonClassNames = classnames('md-chip', className, {
    'md-chip--active': !!active,
    'md-chip--disabled': !!disabled,
    'md-chip--solid': !!solid,
  });

  return (
    <button type="button" className={buttonClassNames} id={chipId || undefined} disabled={disabled} {...otherProps}>
      {prefixIcon && (
        <div aria-hidden="true" className="md-chip__left-icon">
          {prefixIcon}
        </div>
      )}
      <div className="md-chip__label">{label}</div>
      {!hideCloseIcon && (
        <div aria-hidden="true" className="md-chip__right-icon">
          <MdIconClose />
        </div>
      )}
    </button>
  );
};

export default MdInputChip;
