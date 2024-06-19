import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/checkboxgroup/README.md';
import MdCheckboxGroup from '../packages/react/src/formElements/MdCheckboxGroup';
import type { Args } from '@storybook/react';

export default {
  title: 'Form/Checkbox/CheckboxGroup',
  component: MdCheckboxGroup,
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
          "A component for grouped checkboxes.<br/><br/>`import { MdCheckboxGroup } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the checkbox group.',
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
      description: 'Array with data for radio checkboxes in group',
      table: {
        type: {
          summary: '[{ value: string, text: string }, { value: string, text: string }, ...]',
        },
      },
    },
    selectedOptions: {
      type: { name: 'array', required: true },
      description: 'Array with selected options. Corresponds with element from options-array.',
      table: {
        type: {
          summary: '[{ value: string, text: string }, { value: string, text: string }, ...]',
        },
      },
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
      type: { name: 'string' },
      description: 'The unique id for checkbox group.',
      table: {
        defaultValue: { summary: 'uuidv4' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    direction: {
      type: { name: 'string' },
      description: 'The direction for checkboxes in group.',
      options: ['horizontal', 'vertical', 'grid'],
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
      description: 'Help text for the checkbox group',
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
      description: 'Error text for the checkbox group',
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
      description: 'The onChange handler for change events. Returns the `ChangeEvent` from clicked checkbox.',
      table: {
        type: {
          summary: 'function',
        },
      },
      action: 'Change',
    },
    columns: {
      type: { name: 'number' },
      description: 'Number of columns in options grid',
      table: {
        defaultValue: { summary: 2 },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
  },
};

type SelectedOptionType = {
  value: string;
  text?: string;
};

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleCheck = (e: React.ChangeEvent<HTMLElement>) => {
    const dataset = e.target?.dataset;
    let newSelected = args.selectedOptions;
    const found = newSelected.find((item: SelectedOptionType) => {
      return item.value.toString() === (dataset.value as string);
    });
    if (found) {
      newSelected = newSelected.filter((item: SelectedOptionType) => {
        return item.value.toString() !== (dataset.value as string);
      });
    } else {
      newSelected.push({ ...dataset });
    }
    updateArgs({ ...args, selectedOptions: newSelected });
  };

  return <MdCheckboxGroup {...args} onChange={handleCheck} />;
};

export const CheckboxGroup = Template.bind({});
CheckboxGroup.args = {
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
  selectedOptions: [
    {
      value: '2',
      text: 'Option 2',
    },
  ],
  label: 'Example checkbox group',
  id: 'checkbox-group_id',
  disabled: false,
  direction: 'horizontal',
  helpText: 'This is a help text!',
  error: '',
  columns: 3,
};
