import React from 'react';
import MdIconProps from './icon.model';

const MdCommentFillIcon: React.FunctionComponent<MdIconProps> = ({
  className,
  ...otherProps
}: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M17.48,4.58a2.38,2.38,0,0,0-.65-1.65,2.28,2.28,0,0,0-1.64-.7H4.81a2.32,2.32,0,0,0-2.3,2.35v8.13a2.32,2.32,0,0,0,2.3,2.35h8.66l2.29,2.41a1,1,0,0,0,.73.3,1,1,0,0,0,.37-.07,1,1,0,0,0,.63-.93ZM7.55,9.49H6.06V7.94H7.55Zm3,0H9V7.94h1.48Zm3,0H12V7.94h1.48Z" fill='currentColor' />
    </svg>
  );
};

export default MdCommentFillIcon;
