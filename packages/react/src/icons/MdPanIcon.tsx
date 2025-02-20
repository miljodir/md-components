import React from 'react';
import type MdIconProps from './icon.model';

const MdPanIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdPanIcon is deprecated and will be removed in a future release.');

  return (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path
        d="M13.47,5.22a1.5,1.5,0,0,0-.37,0V5.05a1.4,1.4,0,0,0-1.35-1.43,1.26,1.26,0,0,0-.51.11A1.34,1.34,0,0,0,10,2.94a1.37,1.37,0,0,0-1.26.91,1.18,1.18,0,0,0-.46-.09A1.39,1.39,0,0,0,7,5.19v2.6a1.24,1.24,0,0,0-1,0,1.31,1.31,0,0,0-.68,1.72l2.15,5.38a3.89,3.89,0,0,0,3.45,2.22A4,4,0,0,0,14.78,13l0-6.31A1.39,1.39,0,0,0,13.47,5.22Zm.31,7.72a3,3,0,0,1-2.89,3.12,2.89,2.89,0,0,1-2.54-1.63L6.22,9.1a.32.32,0,0,1,.12-.43h.08c.12,0,.25.1.33.3l.56.95h0L8.4,11.77h.29a1.52,1.52,0,0,1,1,.4,2,2,0,0,1,.47,1.43h1a2.88,2.88,0,0,0-.78-2.15A2.48,2.48,0,0,0,9,10.79l-.8-1.38L8,9V5.19a.39.39,0,0,1,.34-.43.4.4,0,0,1,.35.43V9.13l0,.5h1V4.37A.4.4,0,0,1,10,3.94a.39.39,0,0,1,.34.43V9.13l0,.5h1V5.05a.39.39,0,0,1,.34-.43.4.4,0,0,1,.35.43v4.1l0,.65h1V6.65a.4.4,0,0,1,.35-.43.39.39,0,0,1,.34.43Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdPanIcon;
