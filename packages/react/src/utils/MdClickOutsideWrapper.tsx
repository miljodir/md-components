import React, { useEffect, useRef } from 'react';

export interface MdClickOutsideWrapperProps {
  onClickOutside(e: React.MouseEvent): void;
  children: React.ReactNode;
  className?: any;
};

const MdClickOutsideWrapper: React.FunctionComponent<MdClickOutsideWrapperProps> = ({
  onClickOutside,
  children,
  className = '',
  ...otherProps
}: MdClickOutsideWrapperProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: React.MouseEvent) => {
      // @ts-ignore
      if (ref.current && !ref.current?.contains(event.target)) {
        onClickOutside && onClickOutside(event);
      }
    };
    // @ts-ignore
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      // @ts-ignore
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  return (
    <div ref={ref} className={className} {...otherProps}>
      {children}
    </div>
  );
};

export default MdClickOutsideWrapper;
