import classnames from 'classnames';
import React from 'react';

export type MdTableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const MdTableHead: React.FC<MdTableHeadProps> = ({ className, children, ...otherProps }: MdTableHeadProps) => {
  return (
    <thead className={classnames('md-table__head', className)} {...otherProps}>
      {children}
    </thead>
  );
};

export default MdTableHead;
