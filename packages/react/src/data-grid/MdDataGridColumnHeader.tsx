import React from 'react';

interface MdDataGridColumnHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const MdDataGridColumnHeader: React.FunctionComponent<MdDataGridColumnHeaderProps> = ({
  children,
  ...otherProps
}: MdDataGridColumnHeaderProps) => {
  return (
    <div className="md-data-grid__columnHeaders__item" {...otherProps}>
      {children}
    </div>
  );
};

export default MdDataGridColumnHeader;
