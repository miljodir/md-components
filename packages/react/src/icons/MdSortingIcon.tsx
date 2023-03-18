import React from 'react';
import MdIconProps from './icon.model';

const MdSortingIcon: React.FunctionComponent<MdIconProps> = ({
  className,
  ...otherProps
}: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path d="M22.9517 19.9684L16.8877 26.4804L10.2957 19.9684H22.9517ZM24.0557 18.3684H9.12771C8.90849 18.3715 8.695 18.4388 8.5137 18.5621C8.33241 18.6854 8.19127 18.8591 8.1078 19.0619C8.02432 19.2646 8.00218 19.4873 8.04412 19.7025C8.08605 19.9177 8.19022 20.1159 8.34371 20.2724L16.0397 27.9684C16.2491 28.1736 16.5306 28.2884 16.8237 28.2884C16.977 28.2915 17.1291 28.2617 17.2699 28.2009C17.4107 28.1402 17.5368 28.05 17.6397 27.9364L24.7917 20.2404C24.944 20.0832 25.0461 19.8844 25.0852 19.669C25.1242 19.4537 25.0983 19.2316 25.0109 19.031C24.9234 18.8304 24.7783 18.6603 24.594 18.5423C24.4097 18.4244 24.1945 18.3638 23.9757 18.3684H24.0557Z" fill="currentColor"/>
      <path d="M16.2961 6.60802L22.8081 13.12H10.2321L16.2961 6.60802ZM16.2961 4.80002C16.1428 4.79694 15.9907 4.82676 15.8499 4.88748C15.7092 4.9482 15.5831 5.03841 15.4801 5.15202L8.31212 12.848C8.15984 13.0052 8.0577 13.2041 8.01867 13.4194C7.97965 13.6347 8.0055 13.8568 8.09294 14.0574C8.18039 14.258 8.32548 14.4281 8.5098 14.5461C8.69411 14.6641 8.90933 14.7246 9.12812 14.72H23.9761C24.1953 14.7169 24.4088 14.6496 24.5901 14.5263C24.7714 14.4031 24.9126 14.2293 24.996 14.0266C25.0795 13.8238 25.1016 13.6011 25.0597 13.3859C25.0178 13.1707 24.9136 12.9726 24.7601 12.816L17.0641 5.12002C16.8547 4.91487 16.5733 4.79998 16.2801 4.80002H16.2961Z" fill="currentColor"/>
    </svg>
  );
};

export default MdSortingIcon;