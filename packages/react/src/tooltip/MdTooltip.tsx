import classnames from 'classnames';
import debounce from 'lodash.debounce';
import React, { useState, useCallback } from 'react';

export interface MdTooltipProps {
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'right' | 'left';
  ariaLabel: string;
  children?: React.ReactNode;
}

const MdTooltip: React.FC<MdTooltipProps> = ({ content, position = 'bottom', children, ariaLabel }: MdTooltipProps) => {
  const [hover, setHover] = useState(false);
  const classNames = classnames('md-tooltip', {
    'md-tooltip--show': hover,
    'md-tooltip--bottom': position === 'bottom',
    'md-tooltip--top': position === 'top',
    'md-tooltip--right': position === 'right',
    'md-tooltip--left': position === 'left',
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
    <div aria-label={ariaLabel}>
      <div
        aria-hidden="true"
        onMouseLeave={() => {
          setHoverFalse();
        }}
        onMouseEnter={debouncedSetHoverTrue}
        className="md-tooltip__child"
      >
        {children}
      </div>
      <div className={classNames}>{content}</div>
    </div>
  );
};

export default MdTooltip;
