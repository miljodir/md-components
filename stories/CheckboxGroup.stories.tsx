import React from 'react';
import { useArgs } from '@storybook/client-api';

import MdCheckboxGroup from '../packages/react/src/formElements/MdCheckboxGroup';

export default {
  title: 'Form/Checkbox/CheckboxGroup',
  component: MdCheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: 'A component for grouped checkboxes',
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
          summary: "[{ value: string | number, text: string | number }, { value: string | number, text: string | number }, ...]",
        },
      },
    },
    selectedOptions: {
      type: { name: 'array', required: true },
      description: "Array with selected options. Corresponds with element from options-array.",
      table: {
        type: {
          summary: "[{ value: string | number, text: string | number }, { value: string | number, text: string | number }, ...]",
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
      description: "The onChange handler for change events. Returns the `ChangeEvent` from clicked checkbox.",
      table: {
        type: {
          summary: "function",
        },
      },
      action: 'Change'
    }
  },
};

type SelectedOptionType = {
  value: string | number,
  text?: string | number
};

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleCheck = (e: React.ChangeEvent) => {
    // @ts-ignore
    const dataset = e.target?.dataset;
    let newSelected = args.selectedOptions;
    const found = newSelected.find((item: SelectedOptionType) => item.value.toString() === dataset.value.toString());
    if (found) {
      newSelected = newSelected.filter((item: SelectedOptionType) => item.value.toString() !== dataset.value.toString());
    } else {
      newSelected.push({...dataset});
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
  selectedOptions: [{
    value: 2,
    text: 'Option 2'
  }],
  label: "Example checkbox group",
  id: "checkbox-group_id",
  disabled: false,
  direction: 'horizontal',
  helpText: 'This is a help text!',
  error: ''
};
