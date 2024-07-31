import classnames from 'classnames';
import React, { useState } from 'react';

export interface MdTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Replaces previous content-prop for specifying the content of the tooltip.
   * Content-prop is reserved as a standard HTML attribute on div-elements.
   */
  tooltipContent: React.ReactNode;
  position?: 'top' | 'bottom' | 'right' | 'left';
  ['aria-label']: string;
  children?: React.ReactNode;
  tooltipClass?: string;
}

const MdTooltip: React.FC<MdTooltipProps> = ({
  tooltipContent,
  position = 'bottom',
  children,
  'aria-label': ariaLabel,
  tooltipClass,
  ...otherProps
}: MdTooltipProps) => {
  const [hover, setHover] = useState(false);
  const classNames = classnames('md-tooltip', {
    'md-tooltip--show': hover,
    'md-tooltip--bottom': position === 'bottom',
    'md-tooltip--top': position === 'top',
    'md-tooltip--right': position === 'right',
    'md-tooltip--left': position === 'left',
    tooltipClass,
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

  return (
    <div role="tooltip" aria-label={ariaLabel} {...otherProps}>
      <div aria-hidden="true" onMouseLeave={setHoverFalse} onMouseEnter={setHoverTrue} className="md-tooltip__child">
        {children}
      </div>
      <div className={classNames}>{tooltipContent}</div>
    </div>
  );
};

export default MdTooltip;
