'use client';

import classnames from 'classnames';
import React from 'react';
import MdIconHelp from '../icons-material/MdIconHelp';

export interface MdHelpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  expanded: boolean;
  hideArrow?: boolean;
}

export const MdHelpButton: React.FunctionComponent<MdHelpButtonProps> = ({
  className,
  expanded = false,
  hideArrow = false,
  ...otherProps
}: MdHelpButtonProps) => {
  const buttonClasses = classnames('md-helpbutton', className, {
    'md-helpbutton--expanded': !!expanded,
    'md-helpbutton--noarrow': !!hideArrow,
  });

  return (
    <button aria-label="Hjelpetekst" className={buttonClasses} type="button" {...otherProps}>
      <MdIconHelp aria-hidden="true" className="md-helpbutton__icon" />
    </button>
  );
};

export default MdHelpButton;
