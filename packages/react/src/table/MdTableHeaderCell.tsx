'use client';

import classnames from 'classnames';
import React from 'react';
import MdIconArrowDownward from '../icons-material/MdIconArrowDownward';
import MdIconArrowUpward from '../icons-material/MdIconArrowUpward';
import MdIconSwapVert from '../icons-material/MdIconSwapVert';

export type MdTableSortDirection = 'ascending' | 'descending' | 'none';

export interface MdTableHeaderCellSorting {
  /** Current sort direction of this column. Use `none` for sortable columns that are not currently sorted. */
  direction: MdTableSortDirection;
  /** Called when the header is activated. The parent is responsible for sorting the data and updating `direction`. */
  onSort: () => void;
}

export interface MdTableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  bordered?: boolean;
  alignment?: 'left' | 'center' | 'right';
  /** Makes the header sortable. Intended for column headers. */
  sorting?: MdTableHeaderCellSorting;
}

const sortIcons = {
  ascending: MdIconArrowUpward,
  descending: MdIconArrowDownward,
  none: MdIconSwapVert,
};

export const MdTableHeaderCell: React.FC<MdTableHeaderCellProps> = ({
  className,
  children,
  bordered = false,
  alignment = 'left',
  sorting,
  ...otherProps
}: MdTableHeaderCellProps) => {
  const classNames = classnames(
    'md-table__header-cell',
    {
      'md-table__header-cell--bordered': bordered,
      'md-table__header-cell--align-center': alignment === 'center',
      'md-table__header-cell--align-right': alignment === 'right',
    },
    className,
  );

  if (!sorting) {
    return (
      <th className={classNames} {...otherProps}>
        {children}
      </th>
    );
  }

  const SortIcon = sortIcons[sorting.direction];

  return (
    <th className={classNames} {...otherProps} aria-sort={sorting.direction === 'none' ? undefined : sorting.direction}>
      <button type="button" className="md-table__sort-button" onClick={sorting.onSort}>
        {children}
        <SortIcon className="md-table__sort-icon" aria-hidden="true" />
      </button>
    </th>
  );
};

export default MdTableHeaderCell;
