import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconOpenInNew: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M140-140v-680h309.38v45.39H185.39v589.22h589.22v-263.99H820V-140H140Zm244.31-211.69-32-32.62 390.31-390.3H530.15V-820H820v289.85h-45.39V-742l-390.3 390.31Z" />
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
      <path d="M164-164v-632h300.61v52H216v528h528v-248.61h52V-164H164Zm223.77-186.62-37.15-37.15L706.85-744H576v-52h220v220h-52v-130.85L387.77-350.62Z" />
    </svg>
  );
};

export default MdIconOpenInNew;
