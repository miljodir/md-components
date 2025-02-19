import React from 'react';
import type MdIconProps from './icon.model';

const MdIconWarning: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M74.62-140 480-840l405.38 700H74.62Zm78.61-45.39h653.54L480-749.23 153.23-185.39Zm329.8-60.07q10.7 0 17.76-7.24 7.06-7.24 7.06-17.94 0-10.71-7.24-17.76-7.24-7.06-17.95-7.06-10.7 0-17.76 7.24-7.05 7.24-7.05 17.94 0 10.7 7.24 17.76 7.24 7.06 17.94 7.06Zm-22.88-97.92h45.39v-217.85h-45.39v217.85ZM480-467.31Z" />
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
      <path d="M82.62-164 480-824l397.38 660H82.62ZM175-216h610L480-724 175-216Zm304.79-55.69q11.94 0 20.23-8.08 8.29-8.08 8.29-20.02t-8.08-20.23q-8.08-8.29-20.02-8.29t-20.23 8.08q-8.29 8.08-8.29 20.02t8.08 20.23q8.08 8.29 20.02 8.29ZM454-376.31h52v-192h-52v192ZM480-470Z" />
    </svg>
  );
};

export default MdIconWarning;
