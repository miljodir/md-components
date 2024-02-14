import React from 'react';

export interface MdHelpTextProps {
  children: React.ReactNode[] | React.ReactNode | string;
  [otherProps: string]: unknown;
}

const MdHelpText: React.FunctionComponent<MdHelpTextProps> = ({ children, ...otherProps }: MdHelpTextProps) => {
  return (
    <div className="md-helptext" {...otherProps}>
      {children}
    </div>
  );
};

export default MdHelpText;
