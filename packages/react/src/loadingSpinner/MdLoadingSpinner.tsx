import classnames from 'classnames';
import React from 'react';
import MdLoadingSpinnerIcon from '../icons/MdLoadingSpinnerIcon';

export interface MdLoadingSpinnerProps {
  size?: number;
  position?: string;
  className?: string;
}

const MdLoadingSpinner: React.FC<MdLoadingSpinnerProps> = ({
  size,
  position = '',
  className = '',
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
    <div aria-label="Laster" className={classNames}>
      <MdLoadingSpinnerIcon className="md-loading-spinner" size={size} />
    </div>
  );
};

export default MdLoadingSpinner;
