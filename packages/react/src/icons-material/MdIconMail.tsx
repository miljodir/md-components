import React from 'react';
import type MdIconProps from './icon.model';

const MdIconMail: React.FunctionComponent<MdIconProps> = ({ className, large = false, ...otherProps }: MdIconProps) => {
  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="M100-180v-600h760v600H100Zm380-293.92L145.39-695.39v470h669.22v-470L480-473.92Zm0-47.7 325.61-212.99H155.39L480-521.62ZM145.39-695.39v-39.22 509.22-470Z" />
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
      <path d="M116-212v-536h728v536H116Zm364-237.69L168-633.31V-264h624v-369.31L480-449.69Zm0-66.31 304.85-180h-608.7L480-516ZM168-633.31V-696v432-369.31Z" />
    </svg>
  );
};

export default MdIconMail;
