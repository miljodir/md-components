import React from 'react';

interface MdDataGridProps {
  children: React.ReactNode[] | React.ReactNode;
}

const MdDataGrid: React.FunctionComponent<MdDataGridProps> = ({ children }: MdDataGridProps) => {
  return <div className="md-data-grid">{children}</div>;
};

export default MdDataGrid;
