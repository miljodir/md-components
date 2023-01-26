import React from 'react';
import { useArgs } from '@storybook/client-api';
import MdSelect from '../packages/react/src/formElements/MdSelect';

export default {
  title: 'Form/Select',
  component: MdSelect,
  parameters: {
    docs: {
      description: {
        component: "A form component for single select.<br/><br/>`import { MdSelect } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: "The label for the selct box.",
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
      description: "Array with data objects for select options",
      table: {
        type: {
          summary: "[{ value: string | number, text: 'string' }, { value: string | number, text: 'string' }, ...]",
        },
      },
    },
    value: {
      type: { name: 'string | number' },
      description: "The currently selected value. This corresponds to `value` from selected `option`",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
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
      description: "Help text for the select box",
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
      description: "The onChange handler for change events. Returns the clicked option, to handle as you please.",
      table: {
        type: {
          summary: "function",
        },
      },
    }
  }
};

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleChange = (option) => {
    const newValue = args.value === option?.value ? '' : option?.value;
    updateArgs({ ...args, value: newValue });
  }

  return (
    <MdSelect
      {...args}
      onChange={handleChange}
    />
  );
};

export const Select = Template.bind({});
Select.args = {
  label: 'Label',
  options: [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
    { value: 'option4', text: 'Option 4' },
    { value: 'option20', text: 'Option 1' },
    { value: 'option5', text: 'Option 2' },
    { value: 'option6', text: 'Option 3' },
    { value: 'option7', text: 'Option 4' },
    { value: 'option8', text: 'Option 1' },
    { value: 'option9', text: 'Option 2' },
    { value: 'option10', text: 'Option 3' },
    { value: 'option11', text: 'Option 4' },
    { value: 'option12', text: 'Option 1' },
    { value: 'option13', text: 'Option 2' },
    { value: 'option14', text: 'Option 3' },
    { value: 'option15', text: 'Option 4' },
    { value: 'option16', text: 'Option 1' },
    { value: 'option17', text: 'Option 2' },
    { value: 'option18', text: 'Option 3' },
    { value: 'option19', text: 'Option 4' },
  ],
  value: 'option2',
  disabled: false,
  size: 'large',
  helpText: ''
};
