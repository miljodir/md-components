import React from 'react';

interface MdColumnHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const MdColumnHeader = ({ children, ...otherProps }: MdColumnHeaderProps) => {
  return (
    <div className="md-data-grid__columnHeaders__item" {...otherProps}>
      {children}
    </div>
  );
};

export default MdColumnHeader;
