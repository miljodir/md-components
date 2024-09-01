import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/radiogroup/README.md';
import MdRadioGroup from '../packages/react/src/formElements/MdRadioGroup';
import type { MdRadioGroupProps } from '../packages/react/src/formElements/MdRadioGroup';

export default {
  title: 'Form/Radio/RadioGroup',
  component: MdRadioGroup,
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
          "A form component for a group of radio buttons. Can also be used outside of a form.<br/><br/>`import { MdRadioGroup } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the radio group.',
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
      description: 'Array with data for radio buttons',
      table: {
        type: {
          summary: '[{ value: string, text: string }, { value: string, text: string }, ...]',
        },
      },
    },
    value: {
      type: { name: 'string' },
      description: 'The selected option',
      table: {
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
    id: {
      type: { name: 'number' },
      description: 'The unique id for radiogroup.',
      table: {
        defaultValue: { summary: 'uuidv4' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'text' },
    },
    direction: {
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: { summary: 'horizontal' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    helpText: {
      type: { name: 'string' },
      description: 'Help text for the radio group',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    error: {
      type: { name: 'string' },
      description: 'Error text for the radio group',
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
      description: 'The onChange handler for change events',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
};

const Template = (args: MdRadioGroupProps) => {
  const [, updateArgs] = useArgs();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateArgs({ ...args, value: e.target.value });
  };

  return <MdRadioGroup {...args} value={args.value} onChange={handleChange} />;
};

export const RadioGroup = Template.bind({});
RadioGroup.args = {
  options: [
    {
      value: '1',
      text: 'Option 1',
    },
    {
      value: '2',
      text: 'Option 2',
    },
    {
      value: '3',
      text: 'Option 3',
    },
  ],
  label: 'Example radio group',
  value: '2',
  id: 'radio_group',
  disabled: false,
  direction: 'horizontal',
  helpText: 'This is a help text!',
  error: '',
};
