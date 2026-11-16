import classnames from 'classnames';
import React from 'react';

export type MdTableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const MdTableBody: React.FC<MdTableBodyProps> = ({ className, children, ...otherProps }: MdTableBodyProps) => {
  return (
    <tbody className={classnames('md-table__body', className)} {...otherProps}>
      {children}
    </tbody>
  );
};

export default MdTableBody;
