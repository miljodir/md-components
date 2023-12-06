import React from 'react';
import type MdIconProps from './icon.model';

const MdEnvelopeIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
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
        d="M54.64,27.38,32.71,8.26a1,1,0,0,0-1.31,0L9.36,27.5l0,0,0,0a1.77,1.77,0,0,0-.12.17.77.77,0,0,0-.17.54H9V55a1,1,0,0,0,.3.7,1,1,0,0,0,.7.3l44,0a1,1,0,0,0,1-1V28.13A1,1,0,0,0,54.64,27.38ZM11,30.69,22.56,42.35,11,52.43Zm21.05,6,6.65,5.8a.9.9,0,0,0,.21.31.84.84,0,0,0,.41.23L51.86,54,12.28,54ZM41.15,42,53,30V52.31ZM32.06,10.34l20.19,17.6L39.64,40.67l-6.93-6a1,1,0,0,0-1.31,0L24.07,41,11.47,28.31Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdEnvelopeIcon64;
