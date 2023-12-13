import {
  ArgsTable,
  Description,
  Primary,
  Markdown,
  Stories,
  Subtitle,
  Title,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/select/README.md';
import MdSelect from '../packages/react/src/formElements/MdSelect';
import type { MdSelectOptionProps } from '../packages/react/src/formElements/MdSelect';
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
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A form component for single select.<br/><br/>`import { MdSelect } from '@miljodirektoratet/md-react'`",
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
          summary: "[{ value: string | number, text: 'string' }, { value: string | number, text: 'string' }, ...]",
        },
      },
    },
    value: {
      type: { name: 'string | number' },
      description: 'The currently selected value. This corresponds to `value` from selected `option`',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    id: {
      type: { name: 'string | number' },
      description: 'Id for the select box. If not set, uses a random uuid',
      table: {
        defaultValue: { summary: 'uuid()' },
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
    size: {
      description: 'Set size og select box',
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
    onChange: {
      type: { name: 'function' },
      description: 'The onChange handler for change events. Returns the clicked option, to handle as you please.',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    selectRef: {
      type: { name: 'Ref<HTMLButtonElement>' },
      description:
        // eslint-disable-next-line quotes
        "Ref to the button element that toggles the select dropdown, use for example to bring focus to the component when there's an error.",
    },
  },
};

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleChange = (option: MdSelectOptionProps) => {
    const newValue = args.value === option?.value ? '' : option?.value;
    updateArgs({ ...args, value: newValue });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdSelect {...args} onChange={handleChange} />
    </div>
  );
};

export const Select = Template.bind({});
Select.args = {
  label: 'Label',
  options: [
    { value: 'optionA', text: 'A option' },
    { value: 'optionB', text: 'B option' },
    { value: 'optionC', text: 'C option' },
    { value: 'optionD', text: 'D option' },
  ],
  value: 'optionB',
  id: '',
  disabled: false,
  size: 'large',
  helpText: '',
  error: false,
  errorText: '',
};
