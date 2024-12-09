import classnames from 'classnames';
import React, { useEffect, useId, useRef, useState } from 'react';
import { Button, ComboBox, Group, Input, Label, ListBox, ListBoxItem, Popover } from 'react-aria-components';
import MdHelpButton from '../help/MdHelpButton';
import MdHelpText from '../help/MdHelpText';
import MdChevronIcon from '../icons/MdChevronIcon';
import MdXIcon from '../icons/MdXIcon';

import type { Selection } from 'react-aria-components';
export interface MdComboBoxOption {
  id: string | number;
  value: string;
}
export interface MdComboBoxProps {
  label?: string | null;
  options: MdComboBoxOption[];
  mode?: 'large' | 'medium' | 'small';
  helpText?: string;
  error?: boolean;
  selected?: string[] | number[];
  errorText?: string;
  prefixIcon?: React.ReactNode;
  numberOfElementsShown?: number;
  selectionMode?: 'multiple' | 'single';
  onSelectOption(_e: MdComboBoxOption): void;
}

const MdComboBox = ({
  label,
  options,
  selected,
  mode = 'large',
  helpText,
  error,
  errorText,
  prefixIcon,
  numberOfElementsShown,
  selectionMode = 'single',
  onSelectOption,
}: MdComboBoxProps) => {
  // const selected = new Set(['cat', 'red panda']);

  const [selectedKeys, setSelectedKeys] = useState<Set<string | number>>(selected ? new Set([...selected]) : new Set());
  // const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([1, 4]));
  // const selectedKeys = new Set([1, 4]);
  // console.log('selected', selectedKeys);

  const wrapperClassName = classnames('md-combobox__wrapper', {
    'md-combobox__wrapper--medium': mode === 'medium',
    'md-combobox__wrapper--small': mode === 'small',
  });

  const inputClassNames = classnames('md-combobox__input', {
    'md-combobox__input--error': !!error,
    'md-combobox__input--has-prefix': prefixIcon !== null && prefixIcon !== '',
    'md-combobox--small': mode === 'small',
  });

  const handleSelectOption = (selection: Selection) => {
    console.log('selection', selection);
  };

  return (
    <div className={wrapperClassName}>
      <ComboBox className="md-combobox" menuTrigger="focus">
        {label && <Label className="md-combobox__label">{label}</Label>}
        <Group className="md-combobox__input-wrapper">
          <Input className={inputClassNames} />
          <Button className="md-combobox__toggle">
            <MdChevronIcon className="md-combobox__toggle-icon" />
          </Button>
        </Group>

        <Popover className="md-combobox__popover" offset={0}>
          <ListBox
            className=""
            selectionMode={selectionMode}
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectOption}
          >
            {options &&
              options.map(item => {
                // console.log('selectedKeys', selectedKeys);
                const isSelected = selectedKeys.has(item.id);
                return (
                  <ListBoxItem
                    key={item.id}
                    className={classnames('mb-combobox__item', { 'mb-combobox__item--selected': isSelected })}
                  >
                    <>
                      {item.value}
                      {isSelected && <MdXIcon className="md-combobox__item-icon" />}
                    </>
                  </ListBoxItem>
                );
              })}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};

export default MdComboBox;
