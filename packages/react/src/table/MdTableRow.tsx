import classnames from 'classnames';
import React from 'react';

export interface MdTableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  bordered?: boolean;
}

export const MdTableRow: React.FC<MdTableRowProps> = ({
  className,
  children,
  bordered = true,
  ...otherProps
}: MdTableRowProps) => {
  return (
    <tr className={classnames('md-table__row', { 'md-table__row--bordered': bordered }, className)} {...otherProps}>
      {children}
    </tr>
  );
};

export default MdTableRow;
