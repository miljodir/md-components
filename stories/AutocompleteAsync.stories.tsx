import { Title, Subtitle, Description, Primary, Controls, Markdown } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/autocomplete/README.md';
import MdAutocompleteAsync from '../packages/react/src/formElements/MdAutocompleteAsync';
import MdZoomIcon from '../packages/react/src/icons/MdZoomIcon';
import type {
  MdAutocompleteAsyncOptionProps,
  MdAutocompleteAsyncProps,
} from '../packages/react/src/formElements/MdAutocompleteAsync';

export default {
  title: 'Form/AutocompleteAsync',
  component: MdAutocompleteAsync,
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
          "A form component for autocomplete with load on demand options.<br/><br/>`import { MdAutocompleteAsync } from '@miljodirektoratet/md-react'`",
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
    optionsLoader: {
      type: { name: 'function', required: true },
      description: 'Function for asyncronously loading options',
      table: {
        type: {
          // eslint-disable-next-line quotes
          summary: "[{ value: string | number, text: 'string' }, { value: string | number, text: 'string' }, ...]",
        },
      },
    },
    value: {
      type: { name: 'string' },
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
    size: {
      description: 'Set size og autocomplete box',
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
    onChange: {
      type: { name: 'function' },
      description: 'The onChange handler for change events. Returns the clicked option, to handle as you please.',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    autoComplete: {
      description: 'Set built in autocomplete on and off',
      options: ['off', 'on'],
      table: {
        defaultValue: { summary: 'off' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    displayValueAndText: {
      description: 'If true then displays both the value and the text',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    required: {
      description: 'Sets the input field to required and adds an asterisk',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    prefixIcon: {
      description: 'Sets an icon at the beginning of the input field',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'React.ReactNode',
        },
      },
      control: { type: 'object' },
    },
    placeholder: {
      description: 'Text that is shown when no value is chosen or the dropdown is open',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
  },
};

const Template = (args: MdAutocompleteAsyncProps) => {
  const [, updateArgs] = useArgs();

  const handleSelect = (option: MdAutocompleteAsyncOptionProps) => {
    const newValue = args.value === option?.value ? '' : option?.value;
    updateArgs({ ...args, value: newValue });
  };
  const handleChange = (option: MdAutocompleteAsyncOptionProps) => {
    const newValue = args.value === option?.value ? '' : option?.value;
    updateArgs({ ...args, value: newValue });
  };

  const optionsLoader = async (input: string): Promise<MdAutocompleteAsyncOptionProps[]> => {
    const filteredOptions = [
      { value: 'optionA', text: 'A option' },
      { value: 'optionAB', text: 'AB option' },
      { value: 'optionB', text: 'B option' },
      { value: 'optionBC', text: 'BC option' },
    ].filter(({ text }) => {
      return text.toLocaleLowerCase().includes(input.toLocaleLowerCase());
    });

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(filteredOptions);
      }, 400);
    });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdAutocompleteAsync {...args} onSelected={handleSelect} optionsLoader={optionsLoader} onChange={handleChange} />
    </div>
  );
};

export const AutocompleteAsync = Template.bind({});
AutocompleteAsync.args = {
  label: 'Label',
  prefixIcon: <MdZoomIcon />,
  value: '',
  id: '',
  disabled: false,
  size: 'large',
  helpText: '',
  error: false,
  errorText: '',
  dropdownHeight: null,
};
