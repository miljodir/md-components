import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconSignpost: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M457.31-100v-181.92H242.69L140-384.62l102.69-102.69h214.62v-87.3H180V-780h277.31v-80h45.38v80h214.62L820-677.31l-102.69 102.7H502.69v87.3H780v205.39H502.69V-100h-45.38ZM225.39-620h473.07l57.31-57.31-57.31-57.3H225.39V-620Zm36.15 292.69h473.07v-114.61H261.54l-57.31 57.3 57.31 57.31ZM225.39-620v-114.61V-620Zm509.22 292.69v-114.61 114.61Z" />
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
      <path d="M454-116v-192H250l-86-98 86-98h204v-72H212v-196h242v-72h52v72h204l86 98-86 98H506v72h242v196H506v192h-52ZM264-628h422.46l42-46-42-46H264v92Zm9.54 268H696v-92H273.54l-42 46 42 46ZM264-628v-92 92Zm432 268v-92 92Z" />
    </svg>
  );
};

export default MdIconSignpost;
