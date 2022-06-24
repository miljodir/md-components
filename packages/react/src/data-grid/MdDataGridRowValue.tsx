import React from 'react';

interface MdDataGridRowProps {
  children: React.ReactNode | React.ReactNode[];
}

const MdDataGridRowValue = ({ children }: MdDataGridRowProps) => {
  return <div className="md-data-grid__row__value">{children}</div>;
};

export default MdDataGridRowValue;
