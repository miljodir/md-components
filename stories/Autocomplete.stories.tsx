/* eslint-disable quotes */
import { Controls, Description, Markdown, Primary, Subtitle, Title } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/autocomplete/README.md';
import MdAutocomplete from '../packages/react/src/formElements/MdAutocomplete';
import MdZoomIcon from '../packages/react/src/icons/MdZoomIcon';
import type { MdAutocompleteOptionProps, MdAutocompleteProps } from '../packages/react/src/formElements/MdAutocomplete';

export default {
  title: 'Form/Autocomplete',
  component: MdAutocomplete,
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
          "A form component for single autocomplete. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdAutocomplete } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the autocomplete box.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    defaultOptions: {
      type: { name: 'array' },
      description: 'Array with data objects for default autocomplete options',
      table: {
        type: {
          summary: "[{ value: string | number, text: 'string' }, { value: string | number, text: 'string' }, ...]",
        },
      },
    },
    options: {
      type: { name: 'array', required: true },
      description: 'Array with data objects for searchable autocomplete options',
      table: {
        type: {
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
      description: 'Id for the autocomplete box. If not set, uses a random uuid',
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
    mode: {
      description: 'Set size-mode of autocomplete box',
      options: ['full', 'medium', 'small'],
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
      description: 'Help text for the autocomplete box',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    error: {
      description: 'Does autocomplete box contain error?',
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
      type: { name: 'function' },
      description: 'The onSelectOption handler for change events. Returns the clicked option, to handle as you please.',
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
        defaultValue: { summary: 'variable' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    amountOfElementsShown: {
      type: { name: 'number' },
      description: 'Set max number of elements shown in the dropdown',
      table: {
        defaultValue: { summary: 'variable' },
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
        "Ref to the input element that toggles the select dropdown, use for example to bring focus to the component when there's an error.",
    },
  },
};

const Template = (args: MdAutocompleteProps) => {
  const [, updateArgs] = useArgs();

  const handleChange = (option: MdAutocompleteOptionProps) => {
    const newValue = args.value === option?.value ? '' : option?.value;
    updateArgs({ ...args, value: newValue });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdAutocomplete {...args} onSelectOption={handleChange} />
    </div>
  );
};

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  label: 'Label',
  prefixIcon: <MdZoomIcon />,
  options: [
    { value: 'optionA', text: 'A option' },
    { value: 'optionAB', text: 'AB option' },
    { value: 'optionB', text: 'B option' },
    { value: 'optionBC', text: 'BC option' },
  ],
  defaultOptions: [
    { value: 'optionA', text: 'A option' },
    { value: 'optionB', text: 'B option' },
  ],
  value: 'optionA',
  id: '',
  disabled: false,
  size: 'large',
  helpText: '',
  error: false,
  errorText: '',
  dropdownHeight: null,
};
