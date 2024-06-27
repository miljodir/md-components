/* eslint-disable quotes */
import { Controls, Description, Markdown, Primary, Subtitle, Title } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/multiautocomplete/README.md';
import MdMultiAutocomplete from '../packages/react/src/formElements/MdMultiAutocomplete';
import MdZoomIcon from '../packages/react/src/icons/MdZoomIcon';
import type {
  MdMultiAutocompleteOption,
  MdMultiAutocompleteProps,
} from '../packages/react/src/formElements/MdMultiAutocomplete';

export default {
  title: 'Form/MultiAutocomplete',
  component: MdMultiAutocomplete,
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
          "A form component for multi-autocomplete. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdMultiAutocomplete } from '@miljodirektoratet/md-react'`",
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
          summary: "[{ value: string, text: 'string' }, { value: string, text: 'string' }, ...]",
        },
      },
    },
    selectedOptions: {
      type: { name: 'array' },
      description: 'The currently selected values. An array with `options`',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: '[{ value: string, text: string }, { value: string, text: string }, ...]',
        },
      },
    },
    options: {
      type: { name: 'array', required: true },
      description: 'Array with data objects for searchable autocomplete options',
      table: {
        type: {
          summary: "[{ value: string, text: 'string' }, { value: string, text: 'string' }, ...]",
        },
      },
    },
    id: {
      type: { name: 'string' },
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
      description: 'Set width of autocomplete box',
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
    numberOfElementsShown: {
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

const Template = (args: MdMultiAutocompleteProps) => {
  const [, updateArgs] = useArgs();

  const handleChange = (option: MdMultiAutocompleteOption) => {
    let newSelected = args.selectedOptions && args.selectedOptions.length ? args.selectedOptions : [];
    const found =
      args.selectedOptions &&
      args.selectedOptions.find((item: MdMultiAutocompleteOption) => {
        return item.value === option.value;
      });
    if (found) {
      newSelected = args.selectedOptions
        ? args.selectedOptions.filter((item: MdMultiAutocompleteOption) => {
            return item.value !== option.value;
          })
        : [];
    } else {
      if (option.value) {
        newSelected.push({ value: option.value, text: option.text });
      }
    }
    updateArgs({ ...args, selectedOptions: newSelected });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdMultiAutocomplete {...args} onSelectOption={handleChange} />
    </div>
  );
};

const options = [
  { value: 'optionA', text: 'A option' },
  { value: 'optionAB', text: 'AB option' },
  { value: 'optionB', text: 'B option' },
  { value: 'optionBC', text: 'BC option' },
];

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  label: 'Label',
  prefixIcon: <MdZoomIcon />,
  options,
  defaultOptions: [
    { value: 'optionA', text: 'A option' },
    { value: 'optionB', text: 'B option' },
  ],
  disabled: false,
  selectedOptions: [options[0]],
  showChips: true,
  mode: 'large',
  helpText: '',
  closeOnSelect: false,
  error: false,
  errorText: '',
  dropdownHeight: null,
};
