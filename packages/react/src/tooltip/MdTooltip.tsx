'use client';

import { Tooltip, TooltipAnchor, TooltipProvider } from '@ariakit/react';
import React from 'react';

export interface MdTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * v2.0.0: Replaces previous 'content'-prop for specifying the content of the tooltip.
   * Content-prop is reserved as a standard HTML attribute on div-elements.
   * v5.1.x Removed support for ReactNode for tooltipContent, only string is supported.
   */
  tooltipContent: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'right' | 'left';
  ['aria-label']?: string;
  timeout?: number;
  mode?: 'small' | 'medium' | 'large';
  anchorClassName?: string;
  tooltipClassName?: string;
}

export const MdTooltip: React.FC<MdTooltipProps> = ({
  tooltipContent,
  children,
  position = 'bottom',
  'aria-label': ariaLabel,
  timeout = 250,
  mode = 'medium',
  anchorClassName = '',
  tooltipClassName = '',
  ...otherProps
}: MdTooltipProps) => {
  const classNames = `md-tooltip md-tooltip--${mode} ${tooltipClassName}`;

  return (
    <TooltipProvider placement={position} timeout={timeout}>
      <TooltipAnchor
        aria-label={ariaLabel || tooltipContent}
        className={`md-tooltip__anchor ${anchorClassName}`}
        {...otherProps}
      >
        {children}
      </TooltipAnchor>
      <Tooltip className={classNames}>{tooltipContent}</Tooltip>
    </TooltipProvider>
  );
};

export default MdTooltip;
