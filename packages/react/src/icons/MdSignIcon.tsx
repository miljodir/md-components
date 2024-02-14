import React from 'react';
import type MdIconProps from './icon.model';

const MdSignIcon: React.FunctionComponent<MdIconProps> = ({ className, ...otherProps }: MdIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...otherProps}
    >
      <path
        d="M23.9666 12.5342C23.9328 12.4498 23.8753 12.3777 23.8014 12.3271C23.7275 12.2765 23.6406 12.2497 23.5518 12.2502H15.7423V9.90475H21.2549C21.3136 9.9051 21.3718 9.89354 21.4261 9.87074C21.4804 9.84795 21.5299 9.81436 21.5715 9.7719L23.8685 7.41275C23.9103 7.37016 23.9434 7.3195 23.9661 7.26368C23.9887 7.20785 24.0004 7.14798 24.0004 7.08751C24.0004 7.02703 23.9887 6.96716 23.9661 6.91133C23.9434 6.85551 23.9103 6.80485 23.8685 6.76226L21.5715 4.40311C21.5299 4.36065 21.4804 4.32706 21.4261 4.30427C21.3718 4.28147 21.3136 4.26991 21.2549 4.27026H15.7423V2.0577C15.7423 1.9362 15.6953 1.81969 15.6117 1.73378C15.528 1.64787 15.4146 1.59961 15.2963 1.59961C15.178 1.59961 15.0646 1.64787 14.9809 1.73378C14.8973 1.81969 14.8503 1.9362 14.8503 2.0577V4.28859H6.85345C6.76486 4.28806 6.67813 4.31464 6.6043 4.36494C6.53048 4.41523 6.47292 4.48697 6.43895 4.57101C6.40498 4.65504 6.39614 4.74756 6.41356 4.83677C6.43099 4.92598 6.47389 5.00784 6.53679 5.07192L8.51258 7.08751L6.53233 9.12142C6.46943 9.18549 6.42653 9.26735 6.4091 9.35656C6.39168 9.44577 6.40051 9.53829 6.43449 9.62233C6.46846 9.70636 6.52602 9.7781 6.59984 9.8284C6.67367 9.8787 6.7604 9.90528 6.84899 9.90475H14.8503V12.2273H9.15036C9.09135 12.2275 9.03298 12.2398 8.97862 12.2634C8.92427 12.287 8.87501 12.3214 8.8337 12.3647L6.53679 14.7238C6.45372 14.8097 6.40709 14.9258 6.40709 15.0468C6.40709 15.1678 6.45372 15.2839 6.53679 15.3697L8.8337 17.7289C8.87501 17.7722 8.92427 17.8066 8.97862 17.8302C9.03298 17.8538 9.09135 17.8661 9.15036 17.8663H14.8503V30.3996H15.7423V17.8663H23.5518C23.6404 17.8668 23.7271 17.8403 23.8009 17.79C23.8748 17.7397 23.9323 17.6679 23.9663 17.5839C24.0003 17.4999 24.0091 17.4073 23.9917 17.3181C23.9743 17.2289 23.9314 17.1471 23.8685 17.083L21.8927 15.0445L23.8685 12.9923C23.9235 12.9321 23.9617 12.8577 23.9789 12.7771C23.9962 12.6965 23.9919 12.6125 23.9666 12.5342ZM9.46256 7.41275C9.50437 7.37016 9.53755 7.3195 9.56019 7.26368C9.58283 7.20785 9.59449 7.14798 9.59449 7.08751C9.59449 7.02703 9.58283 6.96716 9.56019 6.91133C9.53755 6.85551 9.50437 6.80485 9.46256 6.76226L7.92831 5.20476H21.072L22.9229 7.10583L21.072 9.00689H7.92831L9.46256 7.41275ZM20.9427 14.7422C20.8596 14.828 20.813 14.9441 20.813 15.0651C20.813 15.1861 20.8596 15.3022 20.9427 15.3881L22.4769 16.9685H9.33322L7.48231 15.0628L9.33322 13.1618H22.4769L20.9427 14.7422Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdSignIcon;
