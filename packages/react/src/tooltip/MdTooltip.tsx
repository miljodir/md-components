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

  const keydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setHoverFalse();
    }
  };

  const setHoverTrue = () => {
    document.addEventListener('keydown', keydown);
    setHover(true);
  };

  const setHoverFalse = () => {
    document.removeEventListener('keydown', keydown);
    setHover(false);
  };

  const debouncedSetHoverTrue = useCallback(debounce(setHoverTrue, 400), []);

  return (
    <div
      onMouseLeave={() => {
        setHoverFalse();
      }}
    >
      <div className="md-tooltip__child" onMouseEnter={debouncedSetHoverTrue} ref={child}>
        {children}
      </div>
      <div className={classNames}>{label}</div>
    </div>
  );
};

export default MdTooltip;
