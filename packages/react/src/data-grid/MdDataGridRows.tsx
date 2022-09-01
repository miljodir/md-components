import React from 'react';

interface MdDataGridRowsProps {
  children: React.ReactNode[] | React.ReactNode;
}

const MdDataGridRows: React.FunctionComponent<MdDataGridRowsProps> = ({
  children,
}: MdDataGridRowsProps) => {
  return <div className="md-data-grid__rows">{children}</div>;
};

export default MdDataGridRows;
