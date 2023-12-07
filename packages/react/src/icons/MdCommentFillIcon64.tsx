import React from 'react';
import type MdIconProps from './icon.model';

const MdCommentFillIcon64: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
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
        d="M49.32,8.46,14.76,8.41h0a5.42,5.42,0,0,0-5.32,5.51L9.39,41a5.56,5.56,0,0,0,1.54,3.88,5.22,5.22,0,0,0,3.77,1.64h0l29.82,0,8.33,8.73a1,1,0,0,0,.72.31.94.94,0,0,0,.37-.07,1,1,0,0,0,.63-.93l0-40.62A5.41,5.41,0,0,0,49.32,8.46ZM24.26,30.9a.89.89,0,0,1-.89.9H18.93a.9.9,0,0,1-.9-.9V26.27a.9.9,0,0,1,.9-.9h4.44a.89.89,0,0,1,.89.9Zm9.87,0a.89.89,0,0,1-.89.9H28.8a.89.89,0,0,1-.89-.9V26.27a.89.89,0,0,1,.89-.9h4.44a.89.89,0,0,1,.89.9Zm9.87,0a.89.89,0,0,1-.89.9H38.67a.89.89,0,0,1-.89-.9V26.27a.89.89,0,0,1,.89-.9h4.44a.89.89,0,0,1,.89.9Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdCommentFillIcon64;
