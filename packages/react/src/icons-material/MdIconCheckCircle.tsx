import React from 'react';
import type MdIconProps from './icon.model';

const MdIconCheckCircle: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M421-311.46 690.54-581l-34.85-34.23L421-380.15 302.54-498.61l-33.85 34.23L421-311.46ZM480.07-100q-78.22 0-147.4-29.92t-120.99-81.71q-51.81-51.79-81.75-120.94Q100-401.71 100-479.93q0-78.84 29.92-148.21t81.71-120.68q51.79-51.31 120.94-81.25Q401.71-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.22-29.92 147.4t-81.21 120.99q-51.29 51.81-120.63 81.75Q558.9-100 480.07-100Zm-.07-45.39q139.69 0 237.15-97.76 97.46-97.77 97.46-236.85 0-139.69-97.46-237.15-97.46-97.46-237.15-97.46-139.08 0-236.85 97.46-97.76 97.46-97.76 237.15 0 139.08 97.76 236.85 97.77 97.76 236.85 97.76ZM480-480Z" />
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
      <path d="m428.23-349.85 224.92-223.92L616-610.92 428.23-424.15l-85-84L306.08-471l122.15 121.15ZM480.07-116q-74.84 0-141.21-28.42t-116.18-78.21q-49.81-49.79-78.25-116.13Q116-405.1 116-479.93q0-75.84 28.42-141.71t78.21-115.68q49.79-49.81 116.13-78.25Q405.1-844 479.93-844q75.84 0 141.71 28.42t115.68 78.21q49.81 49.79 78.25 115.63Q844-555.9 844-480.07q0 74.84-28.42 141.21t-78.21 116.18q-49.79 49.81-115.63 78.25Q555.9-116 480.07-116Zm-.07-52q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
    </svg>
  );
};

export default MdIconCheckCircle;
