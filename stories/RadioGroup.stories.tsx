import React from 'react';
import { useArgs } from '@storybook/client-api';
import MdRadioGroup from '../packages/react/src/formElements/MdRadioGroup';

export default {
  title: 'Form/RadioGroup',
  component: MdRadioGroup,
  parameters: {
    docs: {
      description: {
        component: "A form component for a group of radio buttons. Can also be used outside of a form.<br/><br/>`import { MdRadioGroup } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: "The label for the radio group.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    options: {
      type: { name: 'array', required: true },
      description: "Array with data for radio buttons",
      table: {
        type: {
          summary: "[{ id: number, text: 'string' }, { id: number, text: 'string' }, ...]",
        },
      },
    },
    selectedOption: {
      type: { name: 'number | string' },
      description: "The selected options id",
      table: {
        type: {
          summary: "number | string",
        },
      },
      control: { type: 'text' }
    },
    disabled: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    id: {
      type: { name: 'number | string' },
      description: "The unique id for radiogroup.",
      table: {
        defaultValue: { summary: 'uuidv4' },
        type: {
          summary: "number | string",
        },
      },
      control: { type: 'text' }
    },
    direction: {
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: { summary: 'horizontal' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'inline-radio' },
    },
    helpText: {
      type: { name: 'string' },
      description: "Help text for the radio group",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    error: {
      type: { name: 'string' },
      description: "Error text for the radio group",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    onChange: {
      type: { name: 'function' },
      description: "The onChange handler for change events",
      table: {
        type: {
          summary: "function",
        },
      },
    }
  },
};

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    updateArgs({ ...args, selectedOption: target.value });
  }

  return (
    <MdRadioGroup
      {...args}
      selectedOption={args.selectedOption}
      onChange={(e: React.ChangeEvent) => {
        handleChange(e)
      }}
    />
  );
}

export const RadioGroup = Template.bind({})
RadioGroup.args = {
  options: [
    {
      id: 1,
      text: 'Option 1'
    },
    {
      id: 2,
      text: 'Option 2'
    },
    {
      id: 3,
      text: 'Option 3'
    }
  ],
  label: 'Select an option',
  selectedOption: "",
  id: "radio_group",
  disabled: false,
  direction: 'horizontal',
  helpText: 'This is a help text!',
  error: ''
};
