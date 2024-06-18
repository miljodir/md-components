import classnames from 'classnames';
import React from 'react';
export interface MdToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorText?: string | undefined;
  wrapperClass?: string;
}

const MdToggle: React.FunctionComponent<MdToggleProps> = ({
  checked = true,
  label,
  id = 'toggle_switch',
  disabled = false,
  error = false,
  errorText = undefined,
  wrapperClass = '',
  ...otherProps
}: MdToggleProps) => {
  const classNames = classnames('md-toggle__label', {
    'md-toggle__label--error': !!error,
    'md-toggle__label--checked': !!checked,
    'md-toggle__label--disabled': !!disabled,
  });

  const labelWrapperClassNames = classnames('md-toggle__label-wrapper', {
    'md-toggle__label-wrapper--disabled': !!disabled,
  });

  const outerWrapperClassNames = classnames('md-toggle__wrapper', wrapperClass);

  return (
    <div>
      <div className={outerWrapperClassNames}>
        <input
          tabIndex={0}
          className="md-toggle__checkbox"
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          {...otherProps}
        />
        <label className={labelWrapperClassNames} htmlFor={id}>
          <div className="md-toggle__label-text">{label}</div>
          <div className={classNames}>
            <span className="md-toggle__button" />
          </div>
        </label>
      </div>

      {error && errorText && errorText !== '' && <div className="md-toggle__error">{errorText}</div>}
    </div>
  );
};

export default MdToggle;
