'use client';

import React, { useEffect, useRef } from 'react';

export interface MdClickOutsideWrapperProps {
  onClickOutside(_e: React.MouseEvent): void;
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const MdClickOutsideWrapper: React.FunctionComponent<MdClickOutsideWrapperProps> = ({
  onClickOutside,
  children,
  className = '',
  ref,
  ...otherProps
}) => {
  const innerRef = useRef<HTMLDivElement>(null);

  /**
   * Combine ref from parent via props with internal ref
   */
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = innerRef.current;
    }
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (innerRef.current && !innerRef.current?.contains(event.target as Node)) {
        onClickOutside && onClickOutside(event as unknown as React.MouseEvent);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div ref={innerRef} className={className} {...otherProps}>
      {children}
    </div>
  );
};

export default MdClickOutsideWrapper;
