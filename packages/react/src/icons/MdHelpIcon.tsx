import React from 'react';

export interface MdHelpIconProps {
  className?: string;
  [otherProps: string]: unknown;
}

const MdHelpIcon: React.FunctionComponent<MdHelpIconProps> = ({ className = '', ...otherProps }: MdHelpIconProps) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <circle cx="15.74" cy="15.74" r="14" />
      <path
        d="M15.7439 3.2002C12.8421 3.20004 10.03 4.20592 7.78669 6.0465C5.54333 7.88708 4.00748 10.4485 3.44078 13.2944C2.87407 16.1403 3.31157 19.0947 4.67873 21.6542C6.04589 24.2138 8.25815 26.2202 10.9387 27.3316C13.6192 28.443 16.6021 28.5908 19.3793 27.7497C22.1565 26.9085 24.5562 25.1306 26.1696 22.7187C27.783 20.3067 28.5103 17.4101 28.2276 14.5221C27.9449 11.6341 26.6696 8.93344 24.6191 6.88019C23.4542 5.71368 22.0707 4.78824 20.5478 4.15679C19.0249 3.52535 17.3925 3.20029 15.7439 3.2002ZM15.7439 26.6722C13.578 26.6722 11.4609 26.0295 9.66046 24.8256C7.86004 23.6216 6.45734 21.9105 5.62997 19.9089C4.80259 17.9072 4.58774 15.7051 5.01262 13.5813C5.43749 11.4575 6.48299 9.50756 8.01674 7.9783C9.55049 6.44903 11.5035 5.40925 13.6285 4.99059C15.7536 4.57194 17.9551 4.79324 19.9542 5.62647C21.9534 6.45971 23.6604 7.8674 24.8591 9.67134C26.0578 11.4753 26.6943 13.5943 26.6879 15.7602C26.6795 18.6572 25.5227 21.4326 23.4712 23.4781C21.4197 25.5236 18.6409 26.6722 15.7439 26.6722Z"
        fill="currentColor"
      />
      <path
        d="M15.8401 8.65601C15.2761 8.64725 14.7161 8.75242 14.1937 8.96521C13.6712 9.17801 13.1971 9.49406 12.7997 9.89443C12.4024 10.2948 12.0899 10.7713 11.881 11.2953C11.6721 11.8193 11.5711 12.3801 11.5841 12.944H13.2961C13.2918 12.262 13.5564 11.6058 14.0326 11.1177C14.5088 10.6295 15.1583 10.3486 15.8401 10.336C16.1472 10.3213 16.4538 10.3723 16.7396 10.4856C17.0254 10.5989 17.2837 10.7719 17.4972 10.993C17.7108 11.2141 17.8747 11.4783 17.978 11.7679C18.0812 12.0574 18.1215 12.3656 18.0961 12.672C18.0849 13.1862 17.9141 13.6841 17.6073 14.0969C17.3006 14.5097 16.8731 14.8169 16.3841 14.976L15.7441 15.216C15.0921 15.3789 14.5223 15.7748 14.1421 16.3289C13.7619 16.883 13.5976 17.5571 13.6801 18.224V19.056H15.4401V18.224C15.4401 17.232 16.0641 16.944 16.9281 16.624C17.793 16.3694 18.5527 15.8427 19.0946 15.1222C19.6364 14.4016 19.9315 13.5256 19.9361 12.624C19.9479 12.0888 19.849 11.5568 19.6457 11.0616C19.4423 10.5663 19.1388 10.1184 18.7543 9.74587C18.3698 9.37335 17.9125 9.08427 17.411 8.89673C16.9095 8.70919 16.3747 8.62724 15.8401 8.65601Z"
        fill="currentColor"
      />
      <path
        d="M14.4959 20.832C14.249 20.8445 14.0112 20.9291 13.8119 21.0754C13.6127 21.2217 13.4607 21.4232 13.3747 21.6549C13.2888 21.8867 13.2727 22.1386 13.3285 22.3795C13.3842 22.6203 13.5094 22.8395 13.6885 23.0099C13.8675 23.1803 14.0926 23.2945 14.3359 23.3383C14.5792 23.3821 14.83 23.3536 15.0572 23.2564C15.2845 23.1591 15.4783 22.9973 15.6145 22.7911C15.7508 22.5848 15.8236 22.3432 15.8239 22.096C15.8219 21.9251 15.7857 21.7564 15.7174 21.5997C15.6492 21.4431 15.5502 21.3017 15.4265 21.1839C15.3027 21.0661 15.1566 20.9743 14.9968 20.9138C14.837 20.8534 14.6666 20.8255 14.4959 20.832Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdHelpIcon;
