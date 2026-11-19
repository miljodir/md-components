import classnames from 'classnames';
import React from 'react';

export interface MdTableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Scroll horizontally when the table is wider than the container. Makes the container a focusable region,
   * so give it an accessible name with `aria-label` or `aria-labelledby`. Defaults to `false`.
   */
  horizontalScroll?: boolean;
}

export const MdTableContainer: React.FC<MdTableContainerProps> = ({
  className,
  children,
  horizontalScroll = false,
  ...otherProps
}: MdTableContainerProps) => {
  const classNames = classnames(
    'md-table-container',
    { 'md-table-container--horizontal-scroll': horizontalScroll },
    className,
  );

  return (
    <div
      className={classNames}
      role={horizontalScroll ? 'region' : undefined}
      // Focusable so keyboard users can scroll the content
      tabIndex={horizontalScroll ? 0 : undefined}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default MdTableContainer;
