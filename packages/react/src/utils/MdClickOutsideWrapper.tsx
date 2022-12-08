import React, { useEffect, useRef, ClickEvent } from 'react';

interface MdClickOutsideWrapperProps {
  onClickOutside(): any;
  children: React.ReactNode
};

const MdClickOutsideWrapper: React.FunctionComponent<MdClickOutsideWrapperProps> = ({
  onClickOutside,
  children,
  ...otherProps
}: MdClickOutsideWrapperProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  return (
    <div ref={ref} {...otherProps}>
      {children}
    </div>
  );
};

export default MdClickOutsideWrapper;
