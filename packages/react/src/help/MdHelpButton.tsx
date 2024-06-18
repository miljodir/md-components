import classnames from 'classnames';
import React from 'react';
import MdHelpIcon from '../icons/MdHelpIcon64';

export interface MdHelpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  expanded: boolean;
  hideArrow?: boolean;
  ariaLabel?: string;
}

const MdHelpButton: React.FunctionComponent<MdHelpButtonProps> = ({
  className,
  expanded = false,
  ariaLabel = 'Hjelpetekst',
  hideArrow = false,
  ...otherProps
}: MdHelpButtonProps) => {
  const buttonClasses = classnames('md-helpbutton', className, {
    'md-helpbutton--expanded': !!expanded,
    'md-helpbutton--noarrow': !!hideArrow,
  });

  return (
    <button aria-label={ariaLabel} className={buttonClasses} type="button" {...otherProps}>
      <MdHelpIcon aria-hidden="true" className="md-helpbutton__icon" />
    </button>
  );
};

export default MdHelpButton;
