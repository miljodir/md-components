import classnames from 'classnames';
import React from 'react';

export type MdTableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>;

export const MdTableCaption: React.FC<MdTableCaptionProps> = ({
  className,
  children,
  ...otherProps
}: MdTableCaptionProps) => {
  return (
    <caption className={classnames('md-table__caption', className)} {...otherProps}>
      {children}
    </caption>
  );
};

export default MdTableCaption;
