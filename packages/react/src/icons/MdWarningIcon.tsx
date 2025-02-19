import React from 'react';
import type MdIconProps from './icon.model';

const MdWarningIcon: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  // eslint-disable-next-line no-console
  console.warn('MdWarningIcon is deprecated and will be removed in a future release. Use MdIconWarning instead.');

  return (
    <svg viewBox="0 0 32 32" className={className} {...otherProps}>
      <path
        d="M16.7371 5.53484C16.6075 5.3103 16.4208 5.12398 16.1961 4.99474C15.9713 4.8655 15.7164 4.79792 15.4571 4.79884C15.2006 4.80072 14.9489 4.86963 14.7272 4.99873C14.5055 5.12783 14.3214 5.31264 14.1931 5.53484L3.39312 24.8788C3.26673 25.0977 3.2002 25.3461 3.2002 25.5988C3.2002 25.8516 3.26673 26.0999 3.39312 26.3188C3.51964 26.5414 3.7038 26.7257 3.92624 26.8524C4.14868 26.9791 4.40117 27.0435 4.65712 27.0388H26.3051C26.5611 27.0435 26.8136 26.9791 27.036 26.8524C27.2584 26.7257 27.4426 26.5414 27.5691 26.3188C27.6954 26.097 27.7617 25.8461 27.7617 25.5908C27.7617 25.3356 27.6954 25.0847 27.5691 24.8628L16.7371 5.53484ZM4.91312 25.5188L15.4891 6.54284L26.0651 25.5188H4.91312Z"
        fill="currentColor"
      />
      <path
        d="M15.4894 19.8703C15.3517 19.8766 15.2188 19.9231 15.1074 20.0042C14.9959 20.0853 14.9106 20.1973 14.8622 20.3263C14.8138 20.4554 14.8044 20.5958 14.835 20.7302C14.8657 20.8646 14.9352 20.987 15.0348 21.0823C15.1344 21.1776 15.2598 21.2415 15.3954 21.2662C15.531 21.2909 15.6709 21.2752 15.7977 21.2211C15.9245 21.167 16.0326 21.0769 16.1086 20.9619C16.1846 20.8469 16.2252 20.7121 16.2254 20.5743C16.2233 20.4797 16.2026 20.3865 16.1645 20.3C16.1264 20.2134 16.0716 20.1352 16.0032 20.0698C15.9349 20.0044 15.8543 19.9532 15.7662 19.9189C15.678 19.8847 15.5839 19.8682 15.4894 19.8703Z"
        fill="currentColor"
      />
      <path d="M16.0658 12.8643H15.0098V18.4963H16.0658V12.8643Z" fill="currentColor" />
    </svg>
  );
};

export default MdWarningIcon;
