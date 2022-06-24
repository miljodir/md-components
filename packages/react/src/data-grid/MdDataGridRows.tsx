import React from 'react';

interface MdDataGridRowsProps {
  children: React.ReactNode[] | React.ReactNode;
}

const MdDataGridRows = ({ children }: MdDataGridRowsProps) => {
  return <div className="md-data-grid__rows">{children}</div>;
};

export default MdDataGridRows;
