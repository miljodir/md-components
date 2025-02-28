import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconBarChart: React.FunctionComponent<MdIconProps> = ({
  className,
  large = false,
  ...otherProps
}: MdIconProps) => {
  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="M100-147.31v-45.38h760v45.38H100Zm40-115.38V-500h85.39v237.31H140Zm197.54 0V-700h85.38v437.31h-85.38Zm198.54 0V-580h85.38v317.31h-85.38Zm198.53 0V-820H820v557.31h-85.39Z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      className={className}
      {...otherProps}
    >
      <path d="M116-164v-52h728v52H116Zm48-115.39V-508h76v228.61h-76Zm185.08 0V-700h76v420.61h-76Zm185.46 0V-580h76v300.61h-76Zm185.46 0V-796h76v516.61h-76Z" />
    </svg>
  );
};

export default MdIconBarChart;
