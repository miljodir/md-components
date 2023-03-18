import React from 'react';

export interface MdDeleteIconProps {
  className?: string;
  [otherProps: string]: unknown;
};

const MdDeleteIcon: React.FunctionComponent<MdDeleteIconProps> = ({
  className = '',
  ...otherProps
}: MdDeleteIconProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...otherProps}
    >
      <path d="M23.858 7.1502H19.362V5.5838C19.362 5.48085 19.3417 5.3789 19.3023 5.28378C19.2629 5.18866 19.2051 5.10223 19.1323 5.02943C19.0595 4.95663 18.9731 4.89888 18.878 4.85948C18.7829 4.82008 18.6809 4.7998 18.578 4.7998H14.0644C13.9614 4.7998 13.8594 4.82008 13.7643 4.85948C13.6692 4.89888 13.5828 4.95663 13.51 5.02943C13.4372 5.10223 13.3794 5.18866 13.34 5.28378C13.3006 5.3789 13.2804 5.48085 13.2804 5.5838V7.1502H8.78595C8.57802 7.1502 8.37861 7.2328 8.23158 7.37983C8.08455 7.52686 8.00195 7.72627 8.00195 7.9342V11.9598C8.00605 12.1665 8.08996 12.3635 8.23611 12.5096C8.38226 12.6558 8.57931 12.7397 8.78595 12.7438H9.25635V28.0158C9.25635 28.2237 9.33895 28.4231 9.48598 28.5702C9.63301 28.7172 9.83242 28.7998 10.0404 28.7998H22.578C22.7859 28.7998 22.9853 28.7172 23.1323 28.5702C23.2794 28.4231 23.362 28.2237 23.362 28.0158V12.7358H23.8324C24.039 12.7317 24.236 12.6478 24.3822 12.5016C24.5283 12.3555 24.6123 12.1585 24.6164 11.9518V7.93581C24.6169 7.73196 24.538 7.53592 24.3964 7.38927C24.2548 7.24261 24.0617 7.15686 23.858 7.1502ZM14.85 6.3662H17.7956V7.1502H14.8484L14.85 6.3662ZM9.56995 8.7166H23.074V11.1758H9.56835L9.56995 8.7166ZM21.8212 27.2334H10.8532V12.7358H21.8196L21.8212 27.2334Z" fill="currentColor"/>
      <path d="M14.0645 24.2418C14.2724 24.2418 14.4718 24.1593 14.6188 24.0122C14.7659 23.8652 14.8485 23.6658 14.8485 23.4579V16.1426C14.8532 16.0368 14.8365 15.9311 14.7993 15.8319C14.7621 15.7327 14.7052 15.6421 14.632 15.5655C14.5588 15.489 14.4708 15.428 14.3734 15.3864C14.276 15.3447 14.1712 15.3232 14.0653 15.3232C13.9593 15.3232 13.8545 15.3447 13.7571 15.3864C13.6597 15.428 13.5717 15.489 13.4985 15.5655C13.4253 15.6421 13.3684 15.7327 13.3312 15.8319C13.294 15.9311 13.2773 16.0368 13.2821 16.1426V23.4579C13.282 23.6655 13.3644 23.8647 13.5111 24.0117C13.6578 24.1586 13.8568 24.2414 14.0645 24.2418Z" fill="currentColor"/>
      <path d="M18.5763 24.2413C18.7843 24.2413 18.9837 24.1587 19.1307 24.0117C19.2777 23.8647 19.3603 23.6653 19.3603 23.4573V16.1421C19.3512 15.9406 19.2647 15.7502 19.1189 15.6108C18.973 15.4714 18.7789 15.3936 18.5771 15.3936C18.3753 15.3936 18.1813 15.4714 18.0354 15.6108C17.8896 15.7502 17.8031 15.9406 17.7939 16.1421V23.4573C17.7939 23.665 17.8763 23.8642 18.023 24.0112C18.1697 24.1581 18.3687 24.2409 18.5763 24.2413Z" fill="currentColor"/>
    </svg>

  );
};

export default MdDeleteIcon;