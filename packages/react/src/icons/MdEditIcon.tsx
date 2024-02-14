import React from 'react';
import type MdIconProps from './icon.model';

const MdEditIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path
        d="M26.2558 6.45286C26.1918 5.98171 26.0343 5.52812 25.7925 5.11872C25.5507 4.70931 25.2295 4.35237 24.8478 4.06886C24.2543 3.51086 23.4704 3.2002 22.6558 3.2002C21.8412 3.2002 21.0573 3.51086 20.4638 4.06886L19.0238 5.74886L8.1598 18.8529L8.2718 18.9489L4.7998 28.1009L13.3598 22.8849L24.3198 9.89286L25.6638 8.29286C26.094 7.78045 26.3065 7.11999 26.2558 6.45286ZM7.9358 24.3089L9.5358 19.9249L12.0158 21.8289L7.9358 24.3089ZM13.2158 20.7409L10.4478 18.5489L19.2478 8.00486L22.0958 10.1969L13.2158 20.7409Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdEditIcon;
