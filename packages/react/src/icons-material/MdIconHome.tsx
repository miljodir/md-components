import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconHome: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M225.39-185.39h155.76v-244.99h197.7v244.99h155.76v-381.92L480-759.23 225.39-567.44v382.05ZM180-140v-450l300-225.77L780-590v450H533.46v-245H426.54v245H180Zm300-332.62Z" />
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
      <path d="M264-216h109.85v-237.69h212.3V-216H696v-348L480-726.77 264-564v348Zm-52 52v-426l268-201.77L748-590v426H534.15v-237.69h-108.3V-164H212Zm268-307.38Z" />
    </svg>
  );
};

export default MdIconHome;
