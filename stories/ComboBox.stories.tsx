import { Title, Subtitle, Description, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import MdComboBox from '../packages/react/src/formElements/MdComboBox';

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
            {/* <Markdown>{Readme.toString()}</Markdown> */}
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A component for combobox.<br/>Can handle single or mulitple selections.<br/><br/>`import { MdComboBox } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the select box.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    options: {
      type: { name: 'array' },
      description: 'Array with data objects for select options',
      table: {
        defaultValue: { summary: '[]' },
        type: {
          summary: '[{ id: string | number, value: string }, ...]',
        },
      },
    },
    value: {
      type: { name: 'array | string | number' },
      description: 'The currently selected values. Either an array of numbers/strings or a single number/string',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: '[string|number, ...] or string|number',
        },
      },
    },
    multiple: {
      type: { name: 'boolean' },
      description: 'Allow mulitple selections',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
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
    size: {
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
    errorText: {
      type: { name: 'string' },
      description: 'Display error text, and style the combobox as an error state',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    onSelect: {
      type: { name: 'function' },
      description:
        'The onSelect handler for change events. Returns the clicked option: `{ id: string | number, value: string }`',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
};

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleSelect = (option: { id: string; value: string }) => {
    if (args.multiple) {
      let value = args.value || [];
      if (!Array.isArray(value)) {
        value = [value];
      }
      if (value.includes(option.id)) {
        value = value.filter((v: string) => {
          return v !== option.id.toString();
        });
      } else {
        value = [...value, option.id];
      }
      updateArgs({ ...args, value: value });
    } else {
      updateArgs({ ...args, value: option.id });
    }
  };

  return (
    <MdComboBox
      {...args}
      options={args.options}
      onSelect={option => {
        handleSelect(option);
      }}
    />
  );
};

export const Combobox = Template.bind({});

Combobox.args = {
  label: 'Label',
  options: [
    { id: 'optionA', value: 'A option' },
    { id: 'optionB', value: 'B option' },
    { id: 'optionC', value: 'C option' },
    { id: 'optionD', value: 'D option' },
  ],
  value: ['optionA'],
  multiple: true,
  autocomplete: true,
  disabled: false,
  size: 'large',
  errorText: '',
};
