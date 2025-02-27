import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconTable: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M140-140v-680h680v680H140Zm317.31-239.23H185.39v193.84h271.92v-193.84Zm45.38 0v193.84h271.92v-193.84H502.69Zm-45.38-45.38v-194.62H185.39v194.62h271.92Zm45.38 0h271.92v-194.62H502.69v194.62Zm-317.3-240h589.22v-110H185.39v110Z" />
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
      <path d="M164-164v-632h632v632H164Zm290-219.92H216V-216h238v-167.92Zm52 0V-216h238v-167.92H506Zm-52-52v-168.7H216v168.7h238Zm52 0h238v-168.7H506v168.7ZM216-656.61h528V-744H216v87.39Z" />
    </svg>
  );
};

export default MdIconTable;
