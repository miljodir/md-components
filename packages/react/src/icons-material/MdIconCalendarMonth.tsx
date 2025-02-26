import React from 'react';
import type MdIconProps from './icon.model';

export const MdIconCalendarMonth: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M444.62-396.92v-70.77h70.76v70.77h-70.76Zm-160 0v-70.77h70.76v70.77h-70.76Zm320 0v-70.77h70.76v70.77h-70.76ZM444.62-240v-70.77h70.76V-240h-70.76Zm-160 0v-70.77h70.76V-240h-70.76Zm320 0v-70.77h70.76V-240h-70.76ZM140-100v-694.61h131.54v-70h50.38v70h317.69v-70h49.23v70H820V-100H140Zm45.39-45.39h589.22V-555H185.39v409.61Zm0-454.99h589.22v-148.85H185.39v148.85Zm0 0v-148.85 148.85Z" />
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
      <path d="M448.62-380.92v-62.77h62.76v62.77h-62.76Zm-156 0v-62.77h62.76v62.77h-62.76Zm312 0v-62.77h62.76v62.77h-62.76ZM448.62-240v-62.77h62.76V-240h-62.76Zm-156 0v-62.77h62.76V-240h-62.76Zm312 0v-62.77h62.76V-240h-62.76ZM164-116v-632h151.69v-100.61h53.54V-748h223.08v-100.61h52V-748H796v632H164Zm52-52h528v-347.69H216V-168Zm0-399.69h528V-696H216v128.31Zm0 0V-696v128.31Z" />
    </svg>
  );
};

export default MdIconCalendarMonth;
