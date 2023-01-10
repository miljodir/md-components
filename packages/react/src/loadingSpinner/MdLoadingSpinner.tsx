import React from 'react';
import MdLoadingSpinnerIcon from '../icons/MdLoadingSpinnerIcon';

interface MdLoadingSpinnerProps {
  size?: number;
};

const MdLoadingSpinner: React.FC<MdLoadingSpinnerProps> = ({
  size
}: MdLoadingSpinnerProps) => {
  return (
    <MdLoadingSpinnerIcon className="md-loading-spinner" size={size} />
  );
};

export default MdLoadingSpinner;
