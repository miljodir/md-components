import React from 'react';
import MdIconProps from './icon.model';

const MdEditIcon: React.FunctionComponent<MdIconProps> = ({
  className,
  ...otherProps
}: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M52.83 14.0239C52.5988 12.2631 51.678 10.6661 50.27 9.58386C47.64 7.45386 44.06 7.47386 42.27 9.63386L38.94 13.6339L18.33 39.0639L18.41 39.1339L12 56.5139L27.75 46.6839L48.55 21.3939L51.83 17.3939C52.2114 16.9262 52.4961 16.3876 52.6678 15.8091C52.8394 15.2306 52.8946 14.6238 52.83 14.0239ZM17.5 46.8439L20.22 49.2539L15.56 52.1639L17.5 46.8439ZM21.83 48.2539L18.18 45.0339L19.9 40.3639L26.25 45.4939L21.83 48.2539ZM27.52 44.1739L20.91 38.8339L39.34 16.1539L46.12 21.5239L27.52 44.1739Z" fill="currentColor"/>
    </svg>

  );
};

export default MdEditIcon;
