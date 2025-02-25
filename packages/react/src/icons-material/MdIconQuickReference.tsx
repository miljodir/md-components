import React from 'react';
import type MdIconProps from './icon.model';

const MdIconQuickReference: React.FunctionComponent<MdIconProps> = ({
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
        <path d="M185.39-814.61v285.3-2.61V-145.39v-669.22 169.84-169.84Zm104 389.99h174.63q8.67-12.76 18.59-24.11 9.93-11.35 22.08-21.27h-215.3v45.38Zm0 167.31h142.15q-1.94-11.15-3.01-22.69-1.07-11.54-.45-22.69H289.39v45.38ZM140-100v-760h405.23L740-665.23v149.77q-10.54-4.69-22.08-8.16-11.54-3.46-23.31-5.69v-115.46H522.54v-169.84H185.39v669.22h302.3q14.95 15.53 32.74 26.73 17.8 11.2 38.72 18.66H140Zm520.08-86.54q48.07 0 80.73-32.73 32.65-32.73 32.65-80.81 0-48.07-32.73-80.73-32.73-32.65-80.81-32.65-48.07 0-80.73 32.73-32.65 32.73-32.65 80.81 0 48.07 32.73 80.73 32.73 32.65 80.81 32.65ZM864-64.39 754.98-173.31q-20.13 14.77-44.12 23.46-23.99 8.7-50.86 8.7-66.19 0-112.52-46.38-46.33-46.37-46.33-112.61 0-66.24 46.38-112.47 46.37-46.24 112.61-46.24 66.24 0 112.47 46.33 46.24 46.33 46.24 112.52 0 26.87-8.7 50.86-8.69 23.99-23.46 44.12L895.61-96 864-64.39Z" />
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
      <path d="M216-792v624-624 148-148Zm82 398h165.92q7.47-14.23 16.89-27.04 9.42-12.81 19.81-24.96H298v52Zm0 144h143.23q-2.31-13-3-26t.54-26H298v52ZM164-116v-728h374l162 162v159.38q-13.39-1.69-26.39-1.15T648-520.85V-644H500v-148H216v624h255.31q7.71 14.75 18.35 27.91 10.65 13.17 23.72 24.09H164Zm507.85-69.85q42.84 0 72.57-29.58 29.73-29.58 29.73-72.42t-29.64-72.57q-29.65-29.73-72.59-29.73-34.61 0-68.34 25.8-33.73 25.81-33.73 76.43 0 42.93 29.58 72.5t72.42 29.57ZM861-62.23l-99.54-100.54q-19.23 13.77-41.87 21.35-22.65 7.57-47.09 7.57-64.73 0-109.69-44.96-44.96-44.96-44.96-109.19 0-64.23 44.96-109.19 44.96-44.96 109.19-44.96 64.23 0 109.19 44.96 44.96 44.96 44.96 109.19 0 24.61-7.57 47.42-7.58 22.81-21.35 42.04L897.77-99 861-62.23Z" />
    </svg>
  );
};

export default MdIconQuickReference;
