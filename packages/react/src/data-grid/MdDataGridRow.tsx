import React from 'react';
import MdCheckbox, { MdCheckboxProps } from '../checkbox/MdCheckbox';

interface MdDataGridRowProps {
  checkboxProps: MdCheckboxProps;
  children: React.ReactNode | React.ReactNode[];
}

const MdDataGridRow = ({ checkboxProps, children }: MdDataGridRowProps) => {
  return (
    <div className="md-data-grid__row">
      <MdCheckbox label={null} {...checkboxProps} />
      <div className="md-data-grid__row__flexWrapper">{children}</div>
    </div>
  );
};

export default MdDataGridRow;
