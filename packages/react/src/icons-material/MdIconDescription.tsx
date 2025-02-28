import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconDescription: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M329.39-257.31h301.22v-45.38H329.39v45.38Zm0-167.31h301.22V-470H329.39v45.38ZM180-100v-760h405.23L780-665.23V-100H180Zm382.54-544.77v-169.84H225.39v669.22h509.22v-499.38H562.54ZM225.39-814.61v169.84-169.84 669.22-669.22Z" />
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
      <path d="M346-250h268v-52H346v52Zm0-144h268v-52H346v52ZM212-116v-728h374l162 162v566H212Zm336-528v-148H264v624h432v-476H548ZM264-792v169-169 624-624Z" />
    </svg>
  );
};

export default MdIconDescription;
