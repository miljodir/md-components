import React from 'react';
import { useArgs } from '@storybook/client-api';

import MdCheckboxGroup from '../packages/react/src/formElements/MdCheckboxGroup';

export default {
  title: 'Form/Checkbox',
  component: MdCheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: 'A checkbox component',
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: "The label for the checkbox group.",
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
      description: "Array with data for radio checkboxes in group",
      table: {
        type: {
          summary: "[{ value: number, text: 'string' }, { value: number, text: 'string' }, ...]",
        },
      },
    },
    selectedOptions: {
      type: { name: 'array', required: true },
      description: "Array with selected options. Corresponds with `value`s from options.",
      table: {
        type: {
          summary: "[ number | string, number | string, ... ]",
        },
      },
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
      description: "The unique id for checkbox group.",
      table: {
        defaultValue: { summary: 'uuidv4' },
        type: {
          summary: "number | string",
        },
      },
      control: { type: 'text' }
    },
    direction: {
      type: { name: 'string' },
      description: "The direction for checkboxes in group.",
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
      description: "Help text for the checkbox group",
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
      description: "Error text for the checkbox group",
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
      description: "The onChange handler for change events. Returns the `value` from clicked checkbox.",
      table: {
        type: {
          summary: "function",
        },
      },
      action: 'Change'
    }
  },
};

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleCheck = (e: React.ChangeEvent) => {
    const value = e.target?.value;
    let newSelected = args.selectedOptions;
    const found = newSelected.find((item: string | number) => item.toString() === value.toString());
    if (found) {
      newSelected = newSelected.filter((item: string | number) => item.toString() !== value.toString());
    } else {
      newSelected.push(value);
    }
    updateArgs({ ...args, selectedOptions: newSelected });
  }

  return (
    <MdCheckboxGroup
      {...args}
      onChange={handleCheck}
    />
  );
};

export const CheckboxGroup = Template.bind({})
CheckboxGroup.args = {
  options: [
    {
      value: 1,
      text: 'Option 1'
    },
    {
      value: 2,
      text: 'Option 2'
    },
    {
      value: 3,
      text: 'Option 3'
    }
  ],
  selectedOptions: [1],
  label: "Example checkbox group",
  id: "checkbox-group_id",
  disabled: false,
  direction: 'horizontal',
  helpText: 'This is a help text!',
  error: ''
};
