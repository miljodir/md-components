'use client';

import * as Ariakit from '@ariakit/react';

import React, { useMemo, useState, useId, useTransition, useEffect, useCallback } from 'react';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdIconClose from '../icons-material/MdIconClose';
import MdIconKeyboardArrowDown from '../icons-material/MdIconKeyboardArrowDown';
import MdIconSearch from '../icons-material/MdIconSearch';
import MdLoadingSpinner from '../loadingSpinner/MdLoadingSpinner';
import MdCheckbox from './MdCheckbox';

import type { MdComboBoxBaseProps, MdComboBoxOption } from './MdComboBox';

export interface MdComboBoxGroupedOption {
  label: string;
  icon: React.ReactNode;
  values: MdComboBoxOption[];
}

export interface MdComboBoxGroupedProps extends React.InputHTMLAttributes<HTMLInputElement>, MdComboBoxBaseProps {
  options: MdComboBoxGroupedOption[];
  defaultOptions?: MdComboBoxGroupedOption[];
  value: string | string[];
  hideSeparatorLine?: boolean;
  onSelectOption(_value: string[] | string): void;
}

const MdComboBoxGrouped: React.FC<MdComboBoxGroupedProps> = React.forwardRef<HTMLInputElement, MdComboBoxGroupedProps>(
  (
    {
      id,
      label,
      options,
      defaultOptions,
      value,
      disabled = false,
      placeholder = 'Søk',
      numberOfElementsShown,
      mode = 'medium',
      helpText,
      error = false,
      errorText,
      noResultsText = 'Ingen treff',
      dropdownHeight,
      prefixIcon,
      isSearching = false,
      hidePrefixIcon = false,
      allowReset = false,
      flip = false,
      hideSeparatorLine = false,
      onSelectOption,
      unmountOnHide,
      ...otherProps
    },
    ref,
  ) => {
    const uuid = `combobox_${useId()}`;
    const comboBoxId = id || uuid;
    const isMultiSelect = Array.isArray(value);
    const [isPending, startTransition] = useTransition();
    const [searchValue, setSearchValue] = useState('');
    const [selectedValues, setSelectedValues] = useState<string[] | string>(value);
    const [helpOpen, setHelpOpen] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const store = Ariakit.useComboboxStore();

    useEffect(() => {
      setSelectedValues(value);
      if (!value) {
        setSearchValue('');
      }
    }, [value]);

    const matches = useMemo(() => {
      if (!searchValue && defaultOptions && defaultOptions.length > 0) {
        return defaultOptions;
      }

      const results = options
        .map(group => {
          // Filter the values within each group based on the searchValue
          const matchingValues = group.values.filter(value => {
            return value.value.toLowerCase().includes(searchValue.toLowerCase() || '');
          });

          // Return the group only if it has matching values
          if (matchingValues.length > 0) {
            return {
              ...group,
              values: matchingValues, // Include only the matching values
            };
          }

          return null; // Exclude groups with no matching values
        })
        .filter(group => {
          return group !== null;
        }); // Remove null groups
      return numberOfElementsShown ? results.slice(0, numberOfElementsShown) : results;
    }, [searchValue, defaultOptions, options, numberOfElementsShown]);

    const getValueById = useMemo(() => {
      return (value: string) => {
        let val = placeholder;
        options.forEach(option => {
          option.values.forEach(v => {
            if (v.value === value) {
              val = v.text;
            }
          });
        });
        return val;
      };
    }, [options, placeholder]);

    const onReset = () => {
      const newValue = isMultiSelect ? [] : '';
      setSearchValue('');
      if (value) {
        setSelectedValues(newValue);
        onSelectOption(newValue);
      }
    };

    let displayValue: string | string[] = placeholder;
    if (isMultiSelect) {
      displayValue = selectedValues.length > 0 ? getValueById(selectedValues[0]) : placeholder;
    } else if (selectedValues !== '') {
      displayValue = getValueById(selectedValues as string);
    }

    let ariaDescribedBy = helpText && helpText !== '' ? `md-combobox_help-text_${comboBoxId}` : undefined;
    ariaDescribedBy = error && errorText && errorText !== '' ? `md-combobox_error_${comboBoxId}` : ariaDescribedBy;

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    const setItemCallback = useCallback(() => {
      if (!isMultiSelect) {
        setSearchValue('');
      }
      return false;
    }, [isMultiSelect]);

    const getOpenState = () => {
      return store.getState().open;
    };

    return (
      <div
        className={`md-combobox md-combobox--${mode} ${
          error && errorText && errorText !== '' && 'md-combobox--has-error'
        } ${value && value !== '' && (isMultiSelect ? value.length > 0 : true) && 'md-combobox--has-value'}`}
      >
        <Ariakit.ComboboxProvider
          id={comboBoxId}
          selectedValue={selectedValues}
          includesBaseElement={false}
          store={store}
          setSelectedValue={values => {
            setSelectedValues(values);
            onSelectOption(values);
          }}
          setValue={val => {
            startTransition(() => {
              setSearchValue(val);
            });
          }}
          setOpen={() => {
            setPopoverOpen(getOpenState());
          }}
        >
          {showLabel && (
            <div className="md-combobox__label-wrapper">
              <div className="md-combobox__label">
                {label && label !== '' && <Ariakit.ComboboxLabel>{label}</Ariakit.ComboboxLabel>}
                {helpText && helpText !== '' && (
                  <div className="md-combobox__help-button">
                    <MdHelpButton
                      aria-label={`Hjelpetekst for ${label}`}
                      id={`md-combobox_help-button_${comboBoxId}`}
                      aria-expanded={helpOpen}
                      aria-controls={`md-combobox_help-text_${comboBoxId}`}
                      onClick={() => {
                        return setHelpOpen(!helpOpen);
                      }}
                      expanded={helpOpen}
                    />
                  </div>
                )}
              </div>

              {helpText && helpText !== '' && (
                <div className={`md-combobox__help-text ${helpOpen ? 'md-combobox__help-text--open' : ''}`}>
                  <MdHelpText
                    id={`md-combobox_help-text_${comboBoxId}`}
                    aria-labelledby={helpText && helpText !== '' ? `md-combobox_help-button_${comboBoxId}` : undefined}
                  >
                    {helpText}
                  </MdHelpText>
                </div>
              )}
            </div>
          )}

          <div className={`md-combobox__input-wrapper ${disabled ? 'md-combobox__input-wrapper--disabled' : ''}`}>
            {!hidePrefixIcon && (
              <div className="md-combobox__input--before">
                {isSearching ? <MdLoadingSpinner size={16} /> : prefixIcon ? prefixIcon : <MdIconSearch />}
              </div>
            )}
            <Ariakit.Combobox
              ref={ref}
              placeholder={displayValue}
              className={`md-combobox__input ${hidePrefixIcon && 'md-combobox__input--no-prefix-icon'}`}
              disabled={disabled}
              aria-describedby={ariaDescribedBy}
              value={searchValue}
              {...otherProps}
            />
            <div className="md-combobox__input--after">
              <div>{isMultiSelect && selectedValues.length > 0 && `+${selectedValues.length}`}</div>
              {allowReset && (selectedValues.length > 0 || searchValue !== '') && (
                <button
                  type="button"
                  className="md-combobox__reset"
                  onClick={() => {
                    return onReset();
                  }}
                  aria-label="Nullstill"
                >
                  <MdIconClose aria-hidden="true" />
                </button>
              )}
              <button
                key={`combobox_grouped_${comboBoxId}_toggle_button_${popoverOpen}`}
                type="button"
                className="md-combobox__toggle"
                onClick={() => {
                  store.setOpen(!popoverOpen);
                  setPopoverOpen(!popoverOpen);
                }}
                aria-label="Åpne/lukke liste"
              >
                <MdIconKeyboardArrowDown className="md-combobox__input-arrow" aria-hidden="true" />
              </button>
            </div>
          </div>

          <Ariakit.ComboboxPopover
            id={`${comboBoxId}_popover`}
            sameWidth
            slide={false}
            unmountOnHide={unmountOnHide}
            gutter={-1}
            flip={flip}
            className="md-combobox__popover"
            aria-busy={isPending}
            onClose={() => {
              setSearchValue('');
            }}
            style={{ maxHeight: dropdownHeight && `${dropdownHeight}px` }}
          >
            {matches &&
              matches.map((group, index: number) => {
                return (
                  <React.Fragment key={`combobox_group_fragment_${comboBoxId}_${group.label}_${index}`}>
                    {!hideSeparatorLine && index !== 0 && (
                      <div
                        className="md-combobox__group-separator"
                        key={`combobox_group_separator_${comboBoxId}_${index}`}
                      >
                        <hr className="" />
                      </div>
                    )}
                    <div
                      className={`md-combobox__group ${hideSeparatorLine ? 'md-combobox__group--no-separator' : ''}`}
                      key={`combobox_group_${comboBoxId}_${group.label}`}
                    >
                      <div className="md-combobox__group-label">
                        {group.icon && <div className="md-combobox__group-icon">{group.icon}</div>}
                        {group.label}
                      </div>
                      {group.values &&
                        group.values.map((option, i) => {
                          let isChecked = false;
                          if (isMultiSelect) {
                            isChecked = selectedValues.includes(option.value);
                          } else {
                            isChecked = selectedValues === option.value;
                          }
                          return (
                            <Ariakit.ComboboxItem
                              key={`combobox_group_item_${comboBoxId}_${group.label}_${option.value}_${i}`}
                              value={option.value}
                              focusOnHover
                              setValueOnClick={setItemCallback}
                              className="md-combobox__checkbox-item"
                              aria-selected={isChecked}
                            >
                              {isMultiSelect ? (
                                <MdCheckbox
                                  key={`checkbox_${option.value}_${selectedValues.toString()}`}
                                  defaultChecked={isChecked}
                                  label={option.text}
                                  tabIndex={-1}
                                />
                              ) : (
                                option.text
                              )}
                            </Ariakit.ComboboxItem>
                          );
                        })}
                    </div>
                  </React.Fragment>
                );
              })}
            {!matches.length && (
              <div className="md-combobox__checkbox-item md-combobox__checkbox-item--no-result">{noResultsText}</div>
            )}
          </Ariakit.ComboboxPopover>
        </Ariakit.ComboboxProvider>

        {error && errorText && errorText !== '' && (
          <div id={`md-combobox_error_${comboBoxId}`} className="md-combobox__error">
            {errorText}
          </div>
        )}
      </div>
    );
  },
);

MdComboBoxGrouped.displayName = 'MdComboBoxGrouped';

export default MdComboBoxGrouped;
