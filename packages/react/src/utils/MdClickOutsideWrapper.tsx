/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from 'react';

export interface MdClickOutsideWrapperProps {
  onClickOutside(_e: React.MouseEvent): void;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: any;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

const MdClickOutsideWrapper = React.forwardRef<HTMLDivElement, MdClickOutsideWrapperProps>(
  ({ onClickOutside, children, className = '', ...otherProps }, ref) => {
    const innerRef = useRef(null);

    /**
     * Combine ref from parent via props with internal ref
     */
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(innerRef.current);
      } else {
        ref.current = innerRef.current;
      }
    });

    useEffect(() => {
      const handleClickOutside = (event: React.MouseEvent) => {
        // @ts-ignore
        if (innerRef.current && !innerRef.current?.contains(event.target)) {
          onClickOutside && onClickOutside(event);
        }
      };
      // @ts-ignore
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        // @ts-ignore
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [onClickOutside]);

    return (
      <div ref={innerRef} className={className} {...otherProps}>
        {children}
      </div>
    );
  },
);
MdClickOutsideWrapper.displayName = 'MdClickOutsideWrapper';

export default MdClickOutsideWrapper;
