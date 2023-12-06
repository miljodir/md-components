import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
// @ts-ignore
import Readme from '../packages/css/src/formElements/multiselect/README.md';

import MdMultiSelect from '../packages/react/src/formElements/MdMultiSelect';

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
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <Description markdown={Readme} />
          </>
        );
      },
      description: {
        component:
          "A form component for multi-select.<br/><br/>`import { MdMultiSelect } from '@miljodirektoratet/md-react'`",
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
      type: { name: 'array' },
      description: 'Array with data objects for select options',
      table: {
        defaultValue: { summary: '[]' },
        type: {
          summary:
            '[{ value: string | number, text: string | number }, { value: string | number, text: string | number }, ...]',
        },
      },
    },
    selected: {
      type: { name: 'array' },
      description: 'The currently selected values. An array with `options`',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary:
            '[{ value: string | number, text: string | number }, { value: string | number, text: string | number }, ...]',
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
  },
};

const options = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option with quite a long text' },
  { value: 'option3', text: 'Option 3' },
  { value: 'option4', text: 'Option 4' },
];

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleChange = (e: React.ChangeEvent) => {
    let newSelected = args.selected && args.selected.length ? args.selected : [];
    // @ts-ignore
    const found =
      args.selected &&
      args.selected.find((item: any) => {
        // @ts-ignore
        return item.value === e?.target?.value;
      });
    if (found) {
      newSelected = args.selected.filter((item: any) => {
        // @ts-ignore
        return item.value !== e?.target?.value;
      });
    } else {
      // @ts-ignore
      if (e?.target?.value) {
        // @ts-ignore
        newSelected.push({ value: e.target.value, text: e.target?.dataset?.text });
      }
    }
    updateArgs({ ...args, selected: newSelected });
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
  selected: [options[0]],
  disabled: false,
  showChips: false,
  closeOnSelect: true,
  size: 'large',
  helpText: '',
  error: false,
  errorText: '',
};
