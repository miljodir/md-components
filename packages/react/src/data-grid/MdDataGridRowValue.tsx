import React from 'react';

interface MdDataGridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

const MdDataGridRowValue = ({
  children,
  ...otherProps
}: MdDataGridRowProps) => {
  return (
    <div className="md-data-grid__row__value" {...otherProps}>
      {children}
    </div>
  );
};

export default MdDataGridRowValue;
