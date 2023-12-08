import classnames from 'classnames';
import React from 'react';

import MdHelpIcon from '../icons/MdHelpIcon64';

export interface MdHelpButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  expanded: boolean;
  hideArrow?: boolean;
  id?: string;
  ariaLabel?: string;
  className?: string;
}

const MdHelpButton: React.FunctionComponent<MdHelpButtonProps> = ({
  onClick,
  className,
  expanded = false,
  id,
  ariaLabel,
  hideArrow = false,
  ...otherProps
}: MdHelpButtonProps) => {
  const buttonClasses = classnames('md-helpbutton', className, {
    'md-helpbutton--expanded': !!expanded,
    'md-helpbutton--noarrow': !!hideArrow,
  });

  return (
    <button
      {...otherProps}
      id={id}
      aria-hidden
      aria-label={ariaLabel || 'Hjelpetekst'}
      className={buttonClasses}
      onClick={onClick}
      type="button"
    >
      <MdHelpIcon className="md-helpbutton__icon" />
    </button>
  );
};

export default MdHelpButton;
