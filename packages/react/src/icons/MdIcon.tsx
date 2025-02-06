import React from 'react';

import 'material-symbols/sharp.css';

interface MdIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: string;
  className?: string;
}

const MdIcon: React.FunctionComponent<MdIconProps> = ({ icon, className = '', ...rest }: MdIconProps) => {
  if (!icon) {
    return null;
  }

  return (
    <span className={`md-icon ${className}`} {...rest}>
      {icon}
    </span>
  );
};

export default MdIcon;
