import React from 'react';
import MdIconProps from './icon.model';

const MdExpandIcon: React.FunctionComponent<MdIconProps> = ({
  className,
  ...otherProps
}: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <g>
        <polygon points="12.28 3.83 15.46 3.83 10.49 8.8 11.2 9.51 16.16 4.54 16.16 7.72 17.16 7.72 17.16 2.83 12.28 2.83 12.28 3.83" fill="currentColor" />
        <polygon points="8.8 10.49 3.83 15.46 3.83 12.28 2.83 12.28 2.83 17.16 7.72 17.16 7.72 16.16 4.54 16.16 9.51 11.2 8.8 10.49" fill="currentColor" />
      </g>
    </svg>
  );
};

export default MdExpandIcon;
