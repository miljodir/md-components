'use client';

import { VisuallyHidden } from '@ariakit/react';
import classnames from 'classnames';
import React from 'react';
import MdIconLoadingSpinner from '../icons-material/MdIconLoadingSpinner';

export interface MdLoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  position?: string;
}

export const MdLoadingSpinner: React.FC<MdLoadingSpinnerProps> = ({
  size,
  position = '',
  className = '',
  ...otherProps
}: MdLoadingSpinnerProps) => {
  const classNames = classnames(
    'md-loading-spinner__container',
    {
      'md-loading-spinner__container--left': position === 'left',
      'md-loading-spinner__container--right': position === 'right',
    },
    className,
  );

  return (
    <div className={classNames} {...otherProps}>
      <VisuallyHidden>Laster..</VisuallyHidden>
      <MdIconLoadingSpinner aria-hidden className="md-loading-spinner" width={size} height={size} />
    </div>
  );
};

export default MdLoadingSpinner;
