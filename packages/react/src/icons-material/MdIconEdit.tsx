import React from 'react';
import type MdIconProps from './icon.model';

const MdIconEdit: React.FunctionComponent<MdIconProps> = ({ className, large = false, ...otherProps }: MdIconProps) => {
  if (large) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={className}
        {...otherProps}
      >
        <path d="M185.39-185.39h40.92l468.54-467.92-40.93-40.92-468.53 467.92v40.92ZM140-140v-104.54l593.54-593.69 105.69 105.31L244.54-140H140Zm634-593.92L734.54-773 774-733.92Zm-99.37 60.29-20.71-20.6 40.93 40.92-20.22-20.32Z" />
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
      <path d="M216-216h44.46l393.46-393.46-44.46-44.46L216-260.46V-216Zm-52 52v-118.38l534-535.54 120.31 118.77L282.38-164H164Zm580-534.77L698.77-744 744-698.77ZM631.3-631.3l-21.84-22.62 44.46 44.46-22.62-21.84Z" />
    </svg>
  );
};

export default MdIconEdit;
