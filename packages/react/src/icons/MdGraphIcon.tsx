import React from 'react';
import type MdIconProps from './icon.model';

const MdGraphIcon: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        d="M14.0098 48.0995H25.0098V34.1895H14.0098V48.0995ZM16.0098 36.1895H23.0098V46.0995H16.0098V36.1895Z"
        fill="currentColor"
      />
      <path
        d="M39.0303 48.0988H50.0303V26.2588H39.0303V48.0988ZM41.0303 28.2588H48.0303V46.0988H41.0303V28.2588Z"
        fill="currentColor"
      />
      <path
        d="M40.453 21.014L47.253 24.253L56 16.47L54.718 15.034L46.93 21.964L40.048 18.687L37.282 21.463V15H26.68V31.116L20.049 25.979L19.461 26.461C15.124 30.027 8.49198 35.406 8.00098 35.781L8.54098 36.581L9.07098 37.381C9.58198 37.044 17.389 30.634 20.088 28.436L26.719 33.544V48.099H37.319V24.186L40.453 21.014ZM35.353 16.927V23.385L28.606 30.132V16.932L35.353 16.927ZM35.353 46.17H28.607V32.831L35.354 26.084L35.353 46.17Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdGraphIcon;
