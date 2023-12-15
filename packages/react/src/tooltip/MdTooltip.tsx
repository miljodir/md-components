import classnames from 'classnames';
import { debounce } from 'lodash';
import React, { useState, useRef, useCallback } from 'react';

export interface MdTooltipProps {
  label: string;
  children?: React.ReactNode;
}

const MdTooltip: React.FC<MdTooltipProps> = ({ label, children }: MdTooltipProps) => {
  const [hover, setHover] = useState(false);
  const child = useRef(null);
  const classNames = classnames('md-tooltip', {
    'md-tooltip--show': hover,
  });

  const setHoverTrue = () => {
    setHover(true);
  };

  const debouncedSetHoverTrue = useCallback(debounce(setHoverTrue, 400), []);

  return (
    <div>
      <div
        className="md-tooltip__child"
        onMouseEnter={debouncedSetHoverTrue}
        onMouseLeave={() => {
          setHover(false);
        }}
        ref={child}
      >
        {children}
      </div>
      <div className={classNames}>{label}</div>
    </div>
  );
};

export default MdTooltip;
