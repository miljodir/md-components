import classnames from 'classnames';
import React from 'react';

export interface MdTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  theme?: 'primary' | 'secondary';
  striped?: boolean;
  /**
   * Border around the outer edge of the table. Defaults to `true`.
   * Does not affect inner borders: row bottom borders are set with `bordered` on `MdTableRow` (default `true`),
   * and cell borders with `bordered` on `MdTableCell` / `MdTableHeaderCell` (default `false`).
   */
  bordered?: boolean;
}

export const MdTable: React.FC<MdTableProps> = ({
  className,
  children,
  theme = 'primary',
  striped = false,
  bordered = true,
  ...otherProps
}: MdTableProps) => {
  const classNames = classnames(
    'md-table',
    {
      'md-table--secondary': theme === 'secondary',
      'md-table--striped': striped,
      'md-table--bordered': bordered,
    },
    className,
  );

  return (
    <table className={classNames} {...otherProps}>
      {children}
    </table>
  );
};

export default MdTable;
