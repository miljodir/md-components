'use client';

import classnames from 'classnames';
import React, { useId } from 'react';

export interface MdRadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const MdRadioButton: React.FunctionComponent<MdRadioButtonProps> = ({
  id,
  disabled,
  className,
  label,
  checked,
  ...otherProps
}: MdRadioButtonProps) => {
  const uuid = useId();
  const radioGroupId = id || uuid;

  const classNames = classnames(
    'md-radiobutton',
    {
      'md-radiobutton--disabled': !!disabled,
    },
    className,
  );

  return (
    <div className={classNames}>
      <span className="md-radiobutton__check-area">{checked && <span className="md-radiobutton__selected-dot" />}</span>
      <input id={radioGroupId} type="radio" checked={checked} disabled={disabled} {...otherProps} />
      <label className="md-radiobutton__label" htmlFor={radioGroupId}>
        {label && label !== '' && label}
      </label>
    </div>
  );
};

export default MdRadioButton;
