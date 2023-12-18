import classnames from 'classnames';
import React from 'react';
import MdHelpIcon from '../icons/MdHelpIcon64';
import MdTooltip from '../tooltip/MdTooltip';

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

  const button = (
    <button {...otherProps} id={id} aria-label={ariaLabel} className={buttonClasses} onClick={onClick} type="button">
      <MdHelpIcon aria-hidden="true" className="md-helpbutton__icon" />
    </button>
  );

  return ariaLabel ? (
    <MdTooltip position="right" label={ariaLabel}>
      {button}
    </MdTooltip>
  ) : (
    button
  );
};

export default MdHelpButton;
