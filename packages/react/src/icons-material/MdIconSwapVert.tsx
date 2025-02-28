import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconSwapVert: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M340.16-445.85v-298.23L224.77-628.69 188-665.85 366.15-844l178.16 178.15-36.77 37.16-115.39-115.39v298.23h-51.99ZM593.46-116 415.31-294.15l36.77-37.16 115.38 115.39v-298.23h52v298.23l115.39-115.39 36.76 37.16L593.46-116Z" />
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
      <path d="M338.39-461.15v-312.54L212-646.92l-32-32L361.08-860l181.07 181.08-32 32-126.38-126.77v312.54h-45.38ZM598.54-100 417.46-281.08l32-32 126.39 126.77v-312.54h45.38v312.54L748-313.08l31.61 32L598.54-100Z" />
    </svg>
  );
};

export default MdIconSwapVert;
