import React from 'react';
import MdCheckbox, { MdCheckboxProps } from '../formElements/MdCheckbox';

interface MdDataGridColumnHeadersProps {
  children: React.ReactNode[];
  checkboxProps: MdCheckboxProps;
}

const MdDataGridColumnHeaders: React.FunctionComponent<MdDataGridColumnHeadersProps> =
  ({ children, checkboxProps }: MdDataGridColumnHeadersProps) => {
    return (
      <div className="md-data-grid__columnHeaders">
        <MdCheckbox label={null} {...checkboxProps} />
        <div className="md-data-grid__columnHeaders__flexWrapper">
          {children}
        </div>
      </div>
    );
  };

export default MdDataGridColumnHeaders;
