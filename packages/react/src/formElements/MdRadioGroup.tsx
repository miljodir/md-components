import React, { ChangeEvent, useState } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

// Components
import MdHelpText from '../help/MdHelpText';
import MdHelpButton from '../help/MdHelpButton';

export interface MdRadioGroupOption {
  id: string | number,
  text: string
};

export interface MdRadioGroupProps {
  options: MdRadioGroupOption[];
  selectedOption?: string | number;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  label?: string;
  id?: string | number;
  disabled?: boolean;
  direction?: string;
  className?: string;
  error?: string;
  helpText?: string;
};

const MdRadioGroup: React.FunctionComponent<MdRadioGroupProps> = ({
  options,
  selectedOption,
  id,
  disabled,
  direction,
  className,
  onChange,
  label,
  helpText,
  error,
  ...otherProps
}: MdRadioGroupProps) => {
  const radioId = React.useMemo(() => id || uuidv4(), []);
  const [helpOpen, setHelpOpen] = useState(false);

  const classNames = classnames(
    'md-radiogroup', {
      'md-radiogroup--disabled': !!disabled
    },
    className
  );

  const optionsClassNames = classnames(
    'md-radiogroup__options', {
      'md-radiogroup__options--vertical': direction === 'vertical'
    }
  )

  const optionIsSelected = (option: number | string) => {
    if (selectedOption) {
		  return option.toString() === selectedOption.toString();
    }

    return false;
	}

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <div className={classNames} {...otherProps}>
      <div className="md-radiogroup__label">
        {label && label !== '' &&
          <div>{label}</div>
        }

        {helpText && helpText !== '' &&
          <MdHelpButton
            onClick={() => setHelpOpen(!helpOpen)}
            expanded={helpOpen}
          />
        }
      </div>

      {helpText && helpText !== '' &&
        <div className={`md-radiogroup__help-text ${helpOpen ? 'md-radiogroup__help-text--open' : ''}`}>
          <MdHelpText>{helpText}</MdHelpText>
        </div>
      }

      <div className={optionsClassNames}>
        {options.map(option => (
          <label
            htmlFor={`radio_${radioId}_${option.id}`}
            key={`radio_${radioId}_${option.id}`}
            className="md-radiogroup-option"
          >
            <span className="md-radiogroup-option__check-area" id={`dot_${radioId}_${option.id}`}>
              {optionIsSelected(option.id) &&
                <span className="md-radiogroup-option__selected-dot" ></span>
              }
            </span>
            <input
              id={`radio_${radioId}_${option.id}`}
              type="radio"
              value={option.id}
              checked={optionIsSelected(option.id)}
              onChange={handleChange}
              disabled={disabled}
            />
            <span className="md-radiogroup-option__text">
              {option.text}
            </span>
          </label>
        ))}
      </div>

      {error && error !== '' &&
        <div className="md-radiogroup__error">{error}</div>
      }
    </div>
  )
};

export default MdRadioGroup;
