import classnames from 'classnames';
import React from 'react';

export interface MdTableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  bordered?: boolean;
  alignment?: 'left' | 'center' | 'right';
}

export const MdTableCell: React.FC<MdTableCellProps> = ({
  className,
  children,
  bordered = false,
  alignment = 'left',
  ...otherProps
}: MdTableCellProps) => {
  const classNames = classnames(
    'md-table__cell',
    {
      'md-table__cell--bordered': bordered,
      'md-table__cell--align-center': alignment === 'center',
      'md-table__cell--align-right': alignment === 'right',
    },
    className,
  );

  return (
    <td className={classNames} {...otherProps}>
      {children}
    </td>
  );
};

export default MdTableCell;
