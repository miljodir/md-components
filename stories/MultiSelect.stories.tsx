import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/multiselect/README.md';
import MdMultiSelect from '../packages/react/src/formElements/MdMultiSelect';
import type { MdMultiSelectOptionProps } from '../packages/react/src/formElements/MdMultiSelect';
import type { Args } from '@storybook/react';
import type { ChangeEvent } from 'react';

export default {
  title: 'Form/Multiselect',
  component: MdMultiSelect,
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
          "A form component for multi-select.<br/><br/>`import { MdMultiSelect } from '@miljodirektoratet/md-react'`",
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
          summary: '[{ value: string, text: string }, { value: string, text: string }, ...]',
        },
      },
    },
    selectedOptions: {
      type: { name: 'array' },
      description: 'The currently selected values. An array with `options`',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: '[{ value: string, text: string }, { value: string, text: string }, ...]',
        },
      },
    },
    id: {
      type: { name: 'string' },
      description: 'Unique id for the multi select box.',
      table: {
        defaultValue: { summary: 'uuid' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Is the multi select disabled?',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    mode: {
      description: 'Set width of select box',
      options: ['large', 'medium', 'small'],
      table: {
        defaultValue: { summary: 'large' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    helpText: {
      type: { name: 'string' },
      description: 'Help text for the select box',
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
      description: 'Does the multi select contain an error?',
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
      description: 'Error text for the select box, displayed if `error = true`',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    showChips: {
      type: { name: 'boolean' },
      description: 'Toggle whether chips with selected options are displayed or not.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    closeOnSelect: {
      type: { name: 'boolean' },
      description: 'Toggle whether the multi select should close when an option is toggled.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    onChange: {
      type: { name: 'function' },
      description: 'The onChange handler for change events. Returns the `ChangeEvent` from clicked option.',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    dropdownHeight: {
      type: { name: 'number' },
      description: 'Set max height of dropdown in pixels',
      table: {
        defaultValue: { summary: '350px' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
  },
};

const options = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option with quite a long text' },
  { value: 'option3', text: 'Option 3' },
  { value: 'option4', text: 'Option 4' },
];

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newSelected = args.selectedOptions && args.selectedOptions.length ? args.selectedOptions : [];
    const found =
      args.selectedOptions &&
      args.selectedOptions.find((item: MdMultiSelectOptionProps) => {
        return item.value === e?.target?.value;
      });
    if (found) {
      newSelected = args.selectedOptions.filter((item: MdMultiSelectOptionProps) => {
        return item.value !== e?.target?.value;
      });
    } else {
      if (e?.target?.value) {
        newSelected.push({ value: e.target.value, text: e.target?.dataset?.text });
      }
    }
    updateArgs({ ...args, selectedOptions: newSelected });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdMultiSelect {...args} onChange={handleChange} />
    </div>
  );
};

export const Multiselect = Template.bind({});
Multiselect.args = {
  label: 'Label',
  options: options,
  selectedOptions: [options[0]],
  disabled: false,
  showChips: false,
  closeOnSelect: true,
  mode: 'large',
  helpText: '',
  error: false,
  errorText: '',
  dropdownHeight: null,
};
