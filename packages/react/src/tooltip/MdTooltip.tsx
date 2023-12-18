import classnames from 'classnames';
import { debounce } from 'lodash';
import React, { useState, useCallback } from 'react';

export interface MdTooltipProps {
  label: string;
  position?: 'top' | 'bottom' | 'right';
  children?: React.ReactNode;
}

const MdTooltip: React.FC<MdTooltipProps> = ({ label, position = 'bottom', children }: MdTooltipProps) => {
  const [hover, setHover] = useState(false);
  const classNames = classnames('md-tooltip', {
    'md-tooltip--show': hover,
    'md-tooltip--bottom': position === 'bottom',
    'md-tooltip--top': position === 'top',
    'md-tooltip--right': position === 'right',
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
    <>
      <div
        onMouseLeave={() => {
          setHoverFalse();
        }}
        onMouseEnter={debouncedSetHoverTrue}
        className="md-tooltip__child"
      >
        {children}
      </div>
      <div className={classNames}>{label}</div>
    </>
  );
};

export default MdTooltip;
