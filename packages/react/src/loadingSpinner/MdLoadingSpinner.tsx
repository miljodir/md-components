import classnames from 'classnames';
import React from 'react';
import MdLoadingSpinnerIcon from '../icons/MdLoadingSpinnerIcon';

export interface MdLoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  position?: string;
}

const MdLoadingSpinner: React.FC<MdLoadingSpinnerProps> = ({
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
    <div aria-label="Laster" className={classNames} {...otherProps}>
      <MdLoadingSpinnerIcon className="md-loading-spinner" width={size} height={size} />
    </div>
  );
};

export default MdLoadingSpinner;
