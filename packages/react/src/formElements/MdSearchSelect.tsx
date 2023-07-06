import React, { useEffect, useState } from "react"
import classnames from "classnames"
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper'
import MdChevronIcon from '../icons/MdChevronIcon';
import MdXIcon from '../icons/MdXIcon';
import { v4 as uuidv4 } from 'uuid';

export interface MdSearchSelectOption {
    text: string;
    value: string;
};

export interface MdSearchSelectProps {
    label?: string | null;
    optionsLoader: (input: string) => Promise<MdSearchSelectOption[]>;
    id?: string | number | null | undefined;
    onSelected(e: MdSearchSelectOption): void;
    name?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: 'small' | 'medium';
    helpText?: string;
    error?: boolean;
    errorText?: string;
    onGetOptions: (input: string) => Promise<MdSearchSelectOption[]>;
}

const MdSearchSelect = ({
    label,
    value,
    optionsLoader,
    id = null,
    name,
    placeholder = 'Søk...',
    disabled = false,
    size,
    helpText,
    error = false,
    errorText,
    onSelected,
}: MdSearchSelectProps) => {

    const [open, setOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const uuid = id || uuidv4();
    const [inputValue, setInputValue] = useState(value);
    const [options, setOptions] = useState<MdSearchSelectOption[]>([]);

    const classNames = classnames('md-select', {
        'md-select--open': !!open,
        'md-select--error': !!error,
        'md-select--disabled': !!disabled,
        'md-select--medium': size === 'medium',
        'md-select--small': size === 'small'
    });

    const buttonClasseNames = classnames('md-select__button', {
        'md-select__button--open': !!open,
        'md-select__button--error': !!error
    });

    const optionClass = (option: MdSearchSelectOption) => {
        return classnames('md-select__dropdown-item', {
            'md-select__dropdown-item--selected': isSelectedOption(option)
        });
    }

    const isSelectedOption = (option: MdSearchSelectOption) => {
        return value && value !== '' && value == option.value;
    }

    const handleOptionClick = (option: MdSearchSelectOption) => {
        onSelected(option);
        setInputValue(option.text);
        setOptions([option])
        setOpen(false);
    }

    useEffect(() => {
        if (inputValue) {
            optionsLoader(inputValue)
                .then(result => {
                    setOptions(result);

                    console.log('result', result)

                    if (result) {
                        setOpen(true);
                    }
                });
        }
    }, [inputValue])

    return (
        <div className={classNames}>
            <div className="md-select__label">
                <div>{label}</div>
                {helpText && helpText !== '' &&
                    <div className="md-select__help-button">
                        <MdHelpButton
                            onClick={() => setHelpOpen(!helpOpen)}
                            expanded={helpOpen}
                        />
                    </div>
                }
            </div>

            {helpText && helpText !== '' &&
                <div className={`md-select__help-text ${helpOpen ? 'md-select__help-text--open' : ''}`}>
                    <MdHelpText>{helpText}</MdHelpText>
                </div>
            }

            <MdClickOutsideWrapper
                onClickOutside={() => setOpen(false)}
                className='md-select__container'
            >
                <input
                    className={buttonClasseNames}
                    type='text'
                    tabIndex={0}
                    onFocus={() => !disabled && setOpen(!open)}
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={(e) => setInputValue(e.target.value)}
                >
                </input>

                {options && options.length > 0 &&
                    <div className="md-select__dropdown">
                        {options.map(option => (
                            <button
                                key={`md-select-option-${uuid}-${option.value}`}
                                id={`md-select-option-${uuid}-${option.value}`}
                                type='button'
                                tabIndex={open ? 0 : -1}
                                className={optionClass(option)}
                                onClick={() => open && handleOptionClick(option)}
                            >
                                <div className="md-select__dropdown-item-text">{option.text}</div>
                                {isSelectedOption(option) &&
                                    <div className="md-select__dropdown-item-clear" title="Klikk for å fjerne valg">
                                        <MdXIcon />
                                    </div>
                                }
                            </button>
                        ))}
                    </div>
                }
            </MdClickOutsideWrapper>

            {error && errorText && errorText !== '' &&
                <div className="md-select__error">{errorText}</div>
            }
        </div>
    )
}

export default MdSearchSelect;