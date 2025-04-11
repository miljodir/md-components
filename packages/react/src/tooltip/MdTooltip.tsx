'use client';

import { Tooltip, TooltipAnchor, TooltipProvider } from '@ariakit/react';
import React from 'react';

export interface MdTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * v5.1.x Removed support for ReactNode for tooltipContent, only string is supported.
   */
  tooltipContent: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'right' | 'left';
  timeout?: number;
  mode?: 'small' | 'medium' | 'large';
  anchorClassName?: string;
  tooltipClassName?: string;
  /**
   * When `true`, the popover will be unmounted when it is hidden. This can be useful for performance reasons, but it may cause issues with animations or transitions.
   * @default false
   * @see https://ariakit.org/reference/tooltip#unmountonhide
   */
  unmountOnHide?: boolean;
}

export const MdTooltip: React.FC<MdTooltipProps> = ({
  tooltipContent,
  children,
  position = 'bottom',
  timeout = 250,
  mode = 'medium',
  anchorClassName = '',
  unmountOnHide,
  tooltipClassName = '',
  ...otherProps
}: MdTooltipProps) => {
  const classNames = `md-tooltip md-tooltip--${mode} ${tooltipClassName}`;

  return (
    <TooltipProvider placement={position} timeout={timeout}>
      <TooltipAnchor aria-label={tooltipContent} className={`md-tooltip__anchor ${anchorClassName}`} {...otherProps}>
        {children}
      </TooltipAnchor>
      <Tooltip unmountOnHide={unmountOnHide} className={classNames}>
        {tooltipContent}
      </Tooltip>
    </TooltipProvider>
  );
};

export default MdTooltip;
