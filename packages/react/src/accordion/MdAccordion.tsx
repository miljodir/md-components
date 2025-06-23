'use client';

import React from 'react';
import type { MdAccordionItemProps } from './MdAccordionItem';

export interface MdAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string; // Used to group details elements in the DOM
  children: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'add';
  className?: string;
  hideCloseButton?: boolean;
  rounded?: boolean;
  disabled?: boolean;
}

export const MdAccordion: React.FunctionComponent<MdAccordionProps> = ({
  name,
  children,
  className = '',
  theme,
  hideCloseButton,
  rounded,
  disabled = false,
  ...otherProps
}: MdAccordionProps) => {
  return (
    <div className={`md-accordion ${className}`} {...otherProps}>
      {React.Children.map(children, child => {
        if (React.isValidElement<MdAccordionItemProps>(child)) {
          const newProps = { name, theme, hideCloseButton, rounded, disabled, ...child.props };
          return React.cloneElement(child, newProps);
        }
        return child;
      })}
    </div>
  );
};

export default MdAccordion;
