import React from 'react';
import type MdIconProps from './icon.model';

const MdHomeIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdHomeIcon is deprecated and will be removed in a future release. Use MdIconHome instead.');

  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path
        d="M50.34 55.756H37.67C37.4048 55.756 37.1504 55.6507 36.9629 55.4631C36.7754 55.2756 36.67 55.0212 36.67 54.756V39.026H26.67V54.756C26.67 55.0212 26.5646 55.2756 26.3771 55.4631C26.1896 55.6507 25.9352 55.756 25.67 55.756H13C12.7348 55.756 12.4804 55.6507 12.2929 55.4631C12.1054 55.2756 12 55.0212 12 54.756V28.256C12.001 27.9986 12.1013 27.7514 12.28 27.566L30.95 8.30603C31.0433 8.20924 31.1551 8.13226 31.2788 8.07968C31.4025 8.0271 31.5356 8 31.67 8C31.8044 8 31.9375 8.0271 32.0612 8.07968C32.1849 8.13226 32.2967 8.20924 32.39 8.30603L51.06 27.556C51.2411 27.7439 51.3416 27.9951 51.34 28.256V54.756C51.34 55.0212 51.2346 55.2756 51.0471 55.4631C50.8596 55.6507 50.6052 55.756 50.34 55.756ZM38.67 53.756H49.34V28.656L31.67 10.436L14 28.666V53.756H24.67V38.026C24.67 37.7608 24.7754 37.5065 24.9629 37.3189C25.1504 37.1314 25.4048 37.026 25.67 37.026H37.67C37.9352 37.026 38.1896 37.1314 38.3771 37.3189C38.5646 37.5065 38.67 37.7608 38.67 38.026V53.756Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdHomeIcon64;
