import React, { useEffect, useRef } from 'react';

interface MdClickOutsideWrapperProps {
  onClickOutside(): any;
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
    const handleClickOutside = (event) => {
      // @ts-expect-error
      if (ref.current && !ref.current?.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
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
