import { Controls, Description, Markdown, Primary, Subtitle, Title } from '@storybook/addon-docs';
// eslint-disable-next-line import/named
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/select/README.md';
import { MdSelect } from '../packages/react/src/formElements/MdSelect';

import type { Args } from '@storybook/react';

export default {
  title: 'Form/Select',
  component: MdSelect,
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
          "A form component for select.<br/>Can handle single or mulitple selections. For single selection set `value` to a string (can be empty string for no pre-selected value), for multiselect, set `value` to an array of strings (can be empty array for no pre-selected value).<br/><br/>`import { MdSelect } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the selct box.',
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
          // eslint-disable-next-line quotes
          summary: "[{ value: string, text: 'string' }, { value: string, text: 'string' }, ...]",
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
    id: {
      type: { name: 'string' },
      description: 'Id for the select box. If not set, uses a random uuid',
      table: {
        defaultValue: { summary: 'useId()' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    disabled: {
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
      description: 'Does selectbox contain error?',
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
      description: 'Text to display if error',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
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
    dropdownHeight: {
      type: { name: 'number' },
      description: 'Set max height of dropdown in pixels',
      table: {
        defaultValue: { summary: '350' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    ref: {
      type: { name: 'Ref<HTMLButtonElement>' },
      description:
        // eslint-disable-next-line quotes
        "Ref to the button element that toggles the select dropdown, use for example to bring focus to the component when there's an error.",
    },
  },
};

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleSelect = (values: string[] | string) => {
    updateArgs({ ...args, value: values });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdSelect {...args} value={args.value} onSelectOption={handleSelect} />
    </div>
  );
};

export const Select = Template.bind({});
export const MultiSelect = Template.bind({});
Select.args = {
  label: 'Label',
  options: [
    { value: 'optionA', text: 'A option' },
    { value: 'optionB', text: 'B option' },
    { value: 'optionC', text: 'C option' },
    { value: 'optionD', text: 'D option' },
  ],
  value: 'optionB',
  disabled: false,
  mode: 'medium',
  helpText: '',
  error: false,
  errorText: '',
  allowReset: true,
};

MultiSelect.args = {
  label: 'Label',
  options: [
    { value: 'optionA', text: 'A option' },
    { value: 'optionB', text: 'B option' },
    { value: 'optionC', text: 'C option' },
    { value: 'optionD', text: 'D option' },
  ],
  value: ['optionB'],
  disabled: false,
  mode: 'medium',
  helpText: 'This is some very helpful text',
  error: false,
  errorText: '',
  dropdownHeight: null,
  allowReset: true,
};
