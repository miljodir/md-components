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
  });
  const parentClassNames = classnames('md-tooltip__parent', {
    'md-tooltip__parent--show': hover,
    'md-tooltip__parent--right': position === 'right',
    'md-tooltip__parent--top': position === 'top',
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
      <div onMouseEnter={debouncedSetHoverTrue} className="md-tooltip__child">
        {children}
      </div>
      <div className={parentClassNames}>
        <div className={classNames}>{label}</div>
      </div>
    </div>
  );
};

export default MdTooltip;
