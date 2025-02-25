import React from 'react';
import type MdIconProps from './icon.model';

const MdIconDelete: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M220.62-140v-601.92H180v-45.39h171.08v-28.07h257.84v28.07H780v45.39h-40.62V-140H220.62ZM266-185.39h428v-556.53H266v556.53Zm115.23-84.46h45.39v-388.61h-45.39v388.61Zm152.15 0h45.39v-388.61h-45.39v388.61ZM266-741.92v556.53-556.53Z" />
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
      <path d="M260-164v-532h-48v-52h172v-43.38h192V-748h172v52h-48v532H260Zm52-52h336v-480H312v480Zm88.16-72h51.99v-336h-51.99v336Zm107.69 0h51.99v-336h-51.99v336ZM312-696v480-480Z" />
    </svg>
  );
};

export default MdIconDelete;
