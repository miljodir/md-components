import React from 'react';
import type MdIconProps from './icon.model';

const MdCalendarIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn(
    'MdCalendarIcon is deprecated and will be removed in a future release. Use MdIconCalendarMonth instead.',
  );

  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M22.6395 13.5537H17.6475V15.2017H22.6395V13.5537Z" fill="currentColor" />
      <path d="M22.6395 19.0898H17.6475V20.7378H22.6395V19.0898Z" fill="currentColor" />
      <path d="M13.0399 13.5537H8.04785V15.2017H13.0399V13.5537Z" fill="currentColor" />
      <path d="M13.0399 19.0898H8.04785V20.7378H13.0399V19.0898Z" fill="currentColor" />
      <path
        d="M27.4082 6.17776H24.0162V4.80176H22.4162V6.17776H8.2722V4.80176H6.6722V6.17776H3.2002V25.7618H27.4882V6.17776H27.4082ZM4.8002 24.1618V11.0098H25.8882V24.1618H4.8002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdCalendarIcon;
