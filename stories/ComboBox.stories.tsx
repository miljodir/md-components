import { Title, Subtitle, Description, Controls, Primary, Markdown } from '@storybook/addon-docs';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/combobox/README.md';
import MdComboBox from '../packages/react/src/formElements/MdComboBox';
import MdIconSearch from '../packages/react/src/icons-material/MdIconSearch';
import MdIconCalendarMonth from '../packages/react/src/icons-material/MdIconCalendarMonth';
import type { Args } from '@storybook/react';

export default {
  title: 'Form/Combobox',
  component: MdComboBox,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A component for combobox.<br/>Can handle single or mulitple selections. For single selection set `value` to a string, for multiselect, set `value` to an array of strings.<br/><br/>`import { MdComboBox } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    options: {
      type: { name: 'array', required: true },
      description: 'Array with data objects for select options',
      table: {
        type: {
          summary: '[{ value: string | number, text: string }, ...]',
        },
      },
    },
    defaultOptions: {
      type: { name: 'array' },
      description: 'Array with data objects for default autocomplete options',
      table: {
        type: {
          summary: '[{ value: string | number, text: string }, ...]',
        },
      },
    },
    value: {
      type: { name: 'string[] | string', required: true },
      description:
        'The currently selected values. Either an array of strings or a single string. For multiselect, value needs to be an array.',
      table: {
        type: {
          summary: '[string, string, ...] or string',
        },
      },
    },
    onSelectOption: {
      type: { name: 'function', required: true },
      description:
        'The handler for change events. Returns an array of strings for multiselect, or a single string value for single select.',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    label: {
      type: { name: 'string' },
      description: 'The label for the combobox.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Is the Combobox disabled?',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    mode: {
      description: 'Set size of combobox',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    helpText: {
      type: { name: 'string' },
      description: 'Help text for the combobox',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    error: {
      type: { name: 'boolean' },
      description: 'Whether the combobox is in an error state',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    errorText: {
      type: { name: 'string' },
      description: 'Display error text if `error` is set, and style the combobox as an error state',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    noResultsText: {
      type: { name: 'string' },
      description: 'The text to display when no results are found',
      table: {
        defaultValue: { summary: 'Ingen treff' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    dropdownHeight: {
      type: { name: 'number' },
      description: 'Set max height of dropdown in pixels. Deafults to `300px` if not set.',
      table: {
        defaultValue: { summary: 'variable' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    numberOfElementsShown: {
      type: { name: 'number' },
      description: 'Set max number of elements shown in dropdown. Note: ALL elements in list are still searchable.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    allowReset: {
      type: { name: 'boolean' },
      description: 'Show reset button in combobox when value is set',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    resetButtonTitle: {
      type: { name: 'string' },
      description: 'The text to show when hovering over the reset button',
      table: {
        defaultValue: { summary: 'Nullstill' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    flip: {
      type: { name: 'boolean' },
      description: 'Allow popover to flip to the opposite side when it overflows',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  },
};

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleSelect = (values: string[] | string) => {
    updateArgs({ ...args, value: values });
  };

  return (
    <div style={{ minHeight: '340px' }}>
      <MdComboBox
        {...args}
        value={args.value}
        options={args.options}
        onSelectOption={values => {
          handleSelect(values);
        }}
        aria-required="true"
      />
    </div>
  );
};

export const Multi = Template.bind({});
export const Single = Template.bind({});

Multi.args = {
  options: [
    { value: 'optionA', text: 'A option' },
    { value: 'optionB', text: 'B option' },
    { value: 'optionC', text: 'Et valg' },
    { value: 'optionD', text: 'Et annet valg som er litt langt' },
  ],
  value: ['optionA', 'optionC'],
  onSelectOption: () => {},
  defaultOptions: [],
  label: 'Label',
  disabled: false,
  mode: 'medium',
  helpText: 'This is a help text',
  prefixIcon: <MdIconSearch />,
  errorText: '',
  error: false,
  hidePrefixIcon: false,
  allowReset: true,
  flip: false,
};

Single.args = {
  options: [
    { value: 'optionA', text: 'A option' },
    { value: 'optionB', text: 'B option' },
    { value: 'optionC', text: 'Et valg' },
    { value: 'optionD', text: 'Et annet valg som er litt langt' },
  ],
  value: 'optionA',
  onSelectOption: () => {},
  defaultOptions: [
    { value: 'optionB', text: 'B option' },
    { value: 'optionD', text: 'Et annet valg som er litt langt' },
  ],
  label: 'Label',
  disabled: false,
  mode: 'medium',
  helpText: 'This is a help text',
  prefixIcon: <MdIconCalendarMonth />,
  errorText: 'This is an example of an error text',
  error: true,
  allowReset: true,
  flip: false,
};
