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
import type { MdComboBoxBaseProps } from './MdComboBox';
import type { MdComboBoxGroupedOption } from './MdComboBoxGrouped';

interface Labels {
  helpTextFor?: string;
  reset?: string;
  openClose?: string;
}

export interface MdComboBoxNestedProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>, MdComboBoxBaseProps {
  options: MdComboBoxGroupedOption[];
  defaultOptions?: MdComboBoxGroupedOption[];
  value: string[][];
  hideSeparatorLine?: boolean;
  onSelectOption(_value: string[][]): void;
}

function normalizeString(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getTextByValue(
  options: MdComboBoxGroupedOption[],
  value: string,
  fallback: string,
): string {
  for (const group of options) {
    for (const v of group.values) {
      if (v.value === value) return v.text;
    }
  }
  return fallback;
}

function flattenValue(value: string[][]): string[] {
  return ([] as string[]).concat(...value);
}

function unflattenValue(flat: string[], options: MdComboBoxGroupedOption[]): string[][] {
  const selected = new Set(flat);
    return options.map(group => {
        return group.values.filter(v => {
            return selected.has(v.value)
        }).map(v => { 
            return v.value
        })}
  );
}

function filterGroupedOptions(
  options: MdComboBoxGroupedOption[],
  searchValue: string,
  defaultOptions?: MdComboBoxGroupedOption[],
  numberOfElementsShown?: number,
): (MdComboBoxGroupedOption & { _originalIndex: number })[] {
  if (!searchValue && defaultOptions && defaultOptions.length > 0) {
    return defaultOptions.map((g, i) => {return { ...g, _originalIndex: i }});
  }

  const normalizedSearch = normalizeString(searchValue || '');

  const results = options
    .map((group, groupIndex) => {
      const matchingValues = group.values.filter(v => {
        const nt = normalizeString(v.text || '');
        const nv = normalizeString(v.value || '');
        return nt.includes(normalizedSearch) || nv.includes(normalizedSearch);
      });

      const groupLabelMatches = normalizeString(group.label || '').includes(normalizedSearch);

      if (matchingValues.length > 0 || groupLabelMatches) {
        return {
          ...group,
          values: groupLabelMatches ? group.values : matchingValues,
          _originalIndex: groupIndex,
        };
      }
      return null;
    })
    .filter((g): g is MdComboBoxGroupedOption & { _originalIndex: number } => {return g !== null});

  return numberOfElementsShown ? results.slice(0, numberOfElementsShown) : results;
}

export function toggleGroupSelection(
  groupIndex: number,
  options: MdComboBoxGroupedOption[],
  currentFlat: string[],
): string[] {
  const group = options[groupIndex];
  if (!group) return currentFlat;

  const groupValues = group.values.map(v => {return v.value});
  const allSelected = groupValues.every(v => {return currentFlat.includes(v)});

  if (allSelected) {
    const groupSet = new Set(groupValues);
    return currentFlat.filter(v => {return !groupSet.has(v)});
  } else {
    const existing = new Set(currentFlat);
    groupValues.forEach(v => {return existing.add(v)});
    return Array.from(existing);
  }
}

export function computeNestedDisplayValue(
  selectedFlat: string[],
  options: MdComboBoxGroupedOption[],
  getTextByValue: (val: string) => string,
  placeholder: string,
): string {
  if (selectedFlat.length === 0) return placeholder;

  const fullySelectedGroup = options.find(
    group => {
        return group.values.length > 0 && group.values.every(v => {
            return selectedFlat.includes(v.value)
        })
    });
  if (fullySelectedGroup) return fullySelectedGroup.label;

  return getTextByValue(selectedFlat[0]);
}

const MdComboBoxNested = React.forwardRef<HTMLInputElement, MdComboBoxNestedProps>(
  (
    {
      id,
      label,
      labels = {},
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
    const uuid = `combobox_nested_${useId()}`;
    const comboBoxId = id || uuid;
    const [isPending, startTransition] = useTransition();
    const [searchValue, setSearchValue] = useState('');
    const [selectedFlat, setSelectedFlat] = useState<string[]>(() => {return flattenValue(value)});
    const [helpOpen, setHelpOpen] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [pendingSearchClear, setPendingSearchClear] = useState(false);
    const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set());
    const store = Ariakit.useComboboxStore();

    const defaultLabels: Required<Labels> = {
      helpTextFor: 'Hjelpetekst for',
      reset: 'Nullstill',
      openClose: 'Åpne/lukke liste',
    };
    const mergedLabels: Required<Labels> = { ...defaultLabels, ...labels };

    useEffect(() => {
      setSelectedFlat(flattenValue(value));
    }, [value]);

    useEffect(() => {
      if (!pendingSearchClear) return;
      const checkAnimationEnd = () => {
        const state = store.getState();
        if (!state.animating && !state.open) {
          setSearchValue('');
          setPendingSearchClear(false);
        } else {
          requestAnimationFrame(checkAnimationEnd);
        }
      };
      requestAnimationFrame(checkAnimationEnd);
    }, [store, pendingSearchClear]);

    const matches = useMemo(
      () => {return filterGroupedOptions(options, searchValue, defaultOptions, numberOfElementsShown)},
      [searchValue, defaultOptions, options, numberOfElementsShown],
    );

    const resolveText = useCallback(
      (val: string) => {return getTextByValue(options, val, placeholder)},
      [options, placeholder],
    );

    const emitChange = useCallback((newFlat: string[]) => {
      setSelectedFlat(newFlat);
      onSelectOption(unflattenValue(newFlat, options));
    }, [onSelectOption, options]);

    const toggleGroup = useCallback(
      (groupIndex: number) => {return emitChange(toggleGroupSelection(groupIndex, options, selectedFlat))},
      [options, selectedFlat, emitChange],
    );

    const toggleExpanded = useCallback((groupIndex: number) => {
      setExpandedGroups(prev => {
        const next = new Set(prev);
        if (next.has(groupIndex)) {
          next.delete(groupIndex);
        } else {
          next.add(groupIndex);
        }
        return next;
      });
    }, []);

    const onReset = () => {
      setSearchValue('');
      emitChange([]);
    };

    const displayValue = useMemo(
      () => {return computeNestedDisplayValue(selectedFlat, options, resolveText, placeholder)},
      [selectedFlat, options, resolveText, placeholder],
    );

    let ariaDescribedBy = helpText && helpText !== '' ? `md-combobox_help-text_${comboBoxId}` : undefined;
    ariaDescribedBy = error && errorText && errorText !== '' ? `md-combobox_error_${comboBoxId}` : ariaDescribedBy;

    const showLabel = (label && label !== '') || (helpText && helpText !== '');

    const getOpenState = () => {return store.getState().open};

    return (
      <div
        className={`md-combobox md-combobox--${mode} ${
          error && errorText && errorText !== '' && 'md-combobox--has-error'
        } ${selectedFlat.length > 0 && 'md-combobox--has-value'}`}
      >
        <Ariakit.ComboboxProvider
          id={comboBoxId}
          includesBaseElement={false}
          selectedValue={selectedFlat}
          store={store}
          setSelectedValue={(values: string | readonly string[]) => {
            const flat = Array.isArray(values) ? Array.from(values) as string[] : [values as string];
            emitChange(flat);
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
                      aria-label={`${mergedLabels.helpTextFor} ${label}`}
                      id={`md-combobox_help-button_${comboBoxId}`}
                      aria-expanded={helpOpen}
                      aria-controls={`md-combobox_help-text_${comboBoxId}`}
                      onClick={() => {return setHelpOpen(!helpOpen)}}
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
              className={`md-combobox__input ${hidePrefixIcon && 'md-combobox__input--no-prefix-icon'} ${!allowReset && 'md-combobox__input--no-reset-button'}`}
              disabled={disabled}
              aria-describedby={ariaDescribedBy}
              value={searchValue}
              {...otherProps}
            />
            <div className="md-combobox__input--after">
              <div>{selectedFlat.length > 0 && `+${selectedFlat.length}`}</div>
              {allowReset && (selectedFlat.length > 0 || searchValue !== '') && (
                <button
                  type="button"
                  className="md-combobox__reset"
                  onClick={() => {return onReset()}}
                  aria-label={mergedLabels.reset}
                >
                  <MdIconClose aria-hidden="true" />
                </button>
              )}
              <button
                key={`combobox_nested_${comboBoxId}_toggle_button_${popoverOpen}`}
                type="button"
                className="md-combobox__toggle"
                onClick={() => {
                  store.setOpen(!popoverOpen);
                  setPopoverOpen(!popoverOpen);
                }}
                aria-label={mergedLabels.openClose}
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
            style={{ maxHeight: dropdownHeight && `${dropdownHeight}px` }}
            onClose={() => {return setPendingSearchClear(true)}}
          >
            {matches &&
              matches.map((group, index) => {
                const groupIndex = group._originalIndex;
                const groupValues = group.values.map(v => {return v.value});
                const selectedInGroup = groupValues.filter(v => {return selectedFlat.includes(v)});
                const allGroupSelected = groupValues.length > 0 && selectedInGroup.length === groupValues.length;
                const someGroupSelected = selectedInGroup.length > 0 && !allGroupSelected;
                const isExpanded = expandedGroups.has(groupIndex) || searchValue !== '';

                return (
                  <React.Fragment key={`combobox_nested_group_${comboBoxId}_${groupIndex}`}>
                    {!hideSeparatorLine && index !== 0 && (
                      <div className="md-combobox__group-separator">
                        <hr />
                      </div>
                    )}
                    <div className="md-combobox__popover-groupedwrapper">
                      <div className={`md-combobox__group ${hideSeparatorLine ? 'md-combobox__group--no-separator' : ''}`}>
                        <Ariakit.ComboboxItem
                          key={`combobox_nested_group_item_${comboBoxId}_${groupIndex}`}
                          className="md-combobox__checkbox-item md-combobox__group-label"
                          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', userSelect: 'none' }}
                          focusOnHover
                          setValueOnClick={() => {return false}}
                          aria-selected={allGroupSelected}
                          onClick={() => {return toggleExpanded(groupIndex)}}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleGroup(groupIndex);
                            } else if (e.key === 'ArrowRight') {
                              e.preventDefault();
                              if (!isExpanded) toggleExpanded(groupIndex);
                            } else if (e.key === 'ArrowLeft') {
                              e.preventDefault();
                              if (isExpanded) toggleExpanded(groupIndex);
                            }
                          }}
                        >
                          <MdCheckbox
                            key={`nested_group_cb_${groupIndex}_${selectedInGroup.length}`}
                            checked={allGroupSelected}
                            indeterminate={someGroupSelected}
                            label={group.label}
                            onChange={() => {return toggleGroup(groupIndex)}}
                            tabIndex={-1}
                          />
                          {selectedInGroup.length > 0 && (
                            <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                              {selectedInGroup.length}/{groupValues.length}
                            </span>
                          )}
                          <MdIconKeyboardArrowDown
                            aria-hidden="true"
                            style={{
                              width: 16,
                              height: 16,
                              transition: 'transform 0.2s',
                              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          />
                        </Ariakit.ComboboxItem>
                        {isExpanded &&
                          group.values.map((option, i) => {
                            const isChecked = selectedFlat.includes(option.value);

                            return (
                              <Ariakit.ComboboxItem
                                key={`combobox_nested_item_${comboBoxId}_${groupIndex}_${option.value}_${i}`}
                                value={option.value}
                                focusOnHover
                                setValueOnClick={() => {return false}}
                                className="md-combobox__checkbox-item"
                                aria-selected={isChecked}
                                style={{ paddingLeft: '2rem' }}
                              >
                                <MdCheckbox
                                  key={`nested_cb_${option.value}_${isChecked}`}
                                  defaultChecked={isChecked}
                                  label={option.text}
                                  tabIndex={-1}
                                />
                              </Ariakit.ComboboxItem>
                            );
                          })}
                      </div>
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

MdComboBoxNested.displayName = 'MdComboBoxNested';

export default MdComboBoxNested;
