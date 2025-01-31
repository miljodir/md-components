import { Title, Subtitle, Description, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import MdComboBox from '../packages/react/src/formElements/MdComboBox/MdComboBox';

import type { Args } from '@storybook/react';

export default {
  title: 'Form/Combobox2',
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
          "A component for combobox.<br/>Can handle single or mulitple selections. For single selection set `value` to a string, for multiselect, set `value` to an array of strings.<br/><br/>`import { MdComboBox } from '@miljodirektoratet/md-react'`",
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
      type: { name: 'array', required: true },
      description: 'Array with data objects for select options',
      table: {
        type: {
          summary: '[{ id: string | number, value: string }, ...]',
        },
      },
    },
    value: {
      type: { name: 'string[] | string', required: true },
      description:
        'The currently selected values. Either an array of numbers/strings or a single number/string. For multiselect, value needs to be an array.',
      table: {
        type: {
          summary: '[string] or string',
        },
      },
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
      type: { name: 'function', required: true },
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

  const handleSelect = (values: string[] | string) => {
    updateArgs({ ...args, value: values });
  };

  return (
    <div style={{ minHeight: '340px' }}>
      <MdComboBox
        {...args}
        value={args.value}
        options={args.options}
        onSelect={values => {
          handleSelect(values);
        }}
      />
    </div>
  );
};

export const Multi = Template.bind({});
export const Single = Template.bind({});

Multi.args = {
  label: 'Label',
  options: [
    { id: 'optionA', value: 'A option' },
    { id: 'optionB', value: 'B option' },
    { id: 'optionC', value: 'Et valg' },
    { id: 'optionD', value: 'Et annet valg som er litt langt' },
  ],
  value: ['optionA', 'optionC'],
  // value: '',
  disabled: false,
  size: 'large',
  helpText: 'This is a help text',
  errorText: '',
};

Single.args = {
  label: 'Label',
  options: [
    { id: 'optionA', value: 'A option' },
    { id: 'optionB', value: 'B option' },
    { id: 'optionC', value: 'Et valg' },
    { id: 'optionD', value: 'Et annet valg som er litt langt' },
  ],
  value: 'optionA',
  disabled: false,
  size: 'large',
  helpText: 'This is a help text',
  errorText: 'This is an example of an error text',
};
