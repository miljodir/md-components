import React, { ChangeEvent } from 'react';
import classnames from 'classnames';

export interface MdToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  id: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string | undefined;
  wrapperClass?: string;
};

const MdToggle: React.FunctionComponent<MdToggleProps> = ({
  checked = true,
  label,
  id = 'toggle_switch',
  disabled = false,
  error = false,
  errorText = undefined,
  wrapperClass = '',
  onChange
}: MdToggleProps) => {
  const classNames = classnames('md-toggle__label', {
    'md-toggle__label--error': !!error,
    'md-toggle__label--checked': !!checked,
    'md-toggle__label--disabled': !!disabled
  });

  const labelWrapperClassNames = classnames('md-toggle__label-wrapper', {
    'md-toggle__label-wrapper--disabled': !!disabled
  });

  const outerWrapperClassNames = classnames('md-toggle__wrapper', wrapperClass);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }

  return (
    <div>
      <div className={outerWrapperClassNames}>
        <input
          tabIndex={0}
          className="md-toggle__checkbox"
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          disabled={disabled}
        />
        <label
          className={labelWrapperClassNames}
          htmlFor={id}
        >
          <div className="md-toggle__label-text">{label}</div>
          <div
            className={classNames}
          >
            <span className="md-toggle__button" />
          </div>
        </label>
      </div>

      {error && errorText && errorText !== '' &&
        <div className="md-toggle__error">{errorText}</div>
      }
    </div>
  );
}

export default MdToggle;
