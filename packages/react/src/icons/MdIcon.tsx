import React from 'react';

import 'material-symbols/sharp.css';

interface MdIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: string;
  className?: string;
  style?: React.CSSProperties;
  size?: string;
}

const MdIcon: React.FunctionComponent<MdIconProps> = ({ icon, className = '', style, size, ...rest }: MdIconProps) => {
  if (!icon) {
    return null;
  }

  const iconStyle = size
    ? {
        ...style,
        fontSize: `${size}rem`,
      }
    : style;

  return (
    <span className={`md-icon ${className}`} style={iconStyle} {...rest}>
      {icon}
    </span>
  );
};

export default MdIcon;
