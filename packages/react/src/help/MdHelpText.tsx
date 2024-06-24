import classNames from 'classnames';
import React from 'react';

export interface MdHelpTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[] | React.ReactNode | string;
}

const MdHelpText: React.FunctionComponent<MdHelpTextProps> = ({
  children,
  className,
  ...otherProps
}: MdHelpTextProps) => {
  const combinedClasses = classNames('md-helptext', className);
  return (
    <div className={combinedClasses} {...otherProps}>
      {children}
    </div>
  );
};

export default MdHelpText;
