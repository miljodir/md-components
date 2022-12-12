import React, { useState, ChangeEvent } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

// Components
import MdHelpText from '../help/MdHelpText';
import MdHelpButton from '../help/MdHelpButton';
import MdCheckbox from './MdCheckbox';

export interface MdCheckboxGroupOptionProps {
  value: string | number,
  text: string
};

export interface MdCheckboxGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: MdCheckboxGroupOptionProps[];
  selectedOptions?: any[];
  onChange(e: ChangeEvent<HTMLInputElement>): string;
  label?: string;
  id?: string | number;
  disabled?: boolean;
  direction?: string;
  className?: string;
  error?: string;
  helpText?: string;
};

const MdCheckboxGroup: React.FunctionComponent<MdCheckboxGroupProps> = ({
  options,
  selectedOptions,
  onChange,
  label,
  id,
  disabled = false,
  direction,
  className = '',
  error,
  helpText,
  ...otherProps
}: MdCheckboxGroupProps) => {
  const groupId = React.useMemo(() => id || uuidv4(), []);
  const [helpOpen, setHelpOpen] = useState(false);

  const classNames = classnames(
    'md-checkboxgroup', {
      'md-checkboxgroup--disabled': !!disabled
    },
    className
  );

  const optionsClassNames = classnames(
    'md-checkboxgroup__options', {
      'md-checkboxgroup__options--vertical': direction === 'vertical'
    }
  )

  const optionIsSelected = (option: MdCheckboxGroupOptionProps) => {
    if (selectedOptions) {
      const find = selectedOptions.find(item => item.toString() === option.value.toString())
      return find !== undefined;
    }

    return false;
	}

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e?.target?.value)
  }

  return (
    <div className={classNames} {...otherProps}>
      <div className="md-checkboxgroup__label">
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
        <div className={`md-checkboxgroup__help-text ${helpOpen ? 'md-checkboxgroup__help-text--open' : ''}`}>
          <MdHelpText>{helpText}</MdHelpText>
        </div>
      }

      <div className={optionsClassNames}>
        {options.map(option => (
          <MdCheckbox
            key={`key_${groupId}_${option.value}`}
            id={`${groupId}_${option.value}`}
            label={option.text}
            checked={optionIsSelected(option)}
            value={option.value}
            onChange={handleChange}
          />
        ))}
      </div>

      {error && error !== '' &&
        <div className="md-radiogroup__error">{error}</div>
      }
    </div>
  );
};

export default MdCheckboxGroup;
