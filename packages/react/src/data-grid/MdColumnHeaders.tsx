import React from 'react';
import MdCheckbox, { MdCheckboxProps } from '../checkbox/MdCheckbox';

interface MdColumnHeadersProps {
  children: React.ReactNode[];
  checkboxProps: MdCheckboxProps;
}

const MdColumnHeaders = ({ children, checkboxProps }: MdColumnHeadersProps) => {
  return (
    <div className="md-data-grid__columnHeaders">
      <MdCheckbox label={null} {...checkboxProps} />
      <div className="md-data-grid__columnHeaders__flexWrapper">{children}</div>
    </div>
  );
};

export default MdColumnHeaders;
