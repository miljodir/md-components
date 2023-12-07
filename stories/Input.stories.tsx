import { ArgsTable, Description, PRIMARY_STORY, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
// @ts-ignore
import Readme from '../packages/css/src/formElements/input/README.md';

import MdInput from '../packages/react/src/formElements/MdInput';
import MdUserIcon from '../packages/react/src/icons/MdUserIcon';

export default {
  title: 'Form/Input',
  component: MdInput,
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
        component: "Input field used in forms.<br/><br/>`import { MdInput } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the input field.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    value: {
      type: { name: 'string' },
      description: 'Inputs value',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    type: {
      type: { name: 'string' },
      description: 'Inputs type',
      options: ['text', 'email', 'number', 'date', 'datetime-local', 'hidden', 'password', 'tel', 'url'],
      table: {
        defaultValue: { summary: 'text' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    placeholder: {
      type: { name: 'string' },
      description: 'Inputs placeholder value when not no value is given',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    size: {
      description: 'Set input field size',
      options: ['normal', 'small'],
      table: {
        defaultValue: { summary: 'normal' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    disabled: {
      description: 'Is the input field disabled or not',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    readOnly: {
      description: 'Is the input field readonly or not',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    error: {
      description: 'Has validation for input field failed?',
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
      description: 'Optional text to display if error. Will only display if error is `true`',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    hideErrorIcon: {
      description: 'Show or hide the error icon if error = `true`',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    helpText: {
      type: { name: 'string' },
      description: 'Optional helper text, will also add a help icon which toggles help text box.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    outerWrapperClass: {
      type: { name: 'string' },
      description: 'Class names to apply to the inputs outer most wrapper.',
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
      description: 'Assign id to input field',
      table: {
        defaultValue: { summary: 'random uuidv4 string' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    suffix: {
      type: { name: 'string' },
      description: 'Suffix to apply to end of input field',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    prefixIcon: {
      type: { name: 'ReactNode' },
      description: 'Prefix to apply to start of input field. Will render a 16px x 16px container with icon passed.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: { type: 'html' },
    },
    hideNumberArrows: {
      description: 'If type = "number", hide or show browsers default arrows',
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
      description: 'The onChange handler for change events',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    onBlur: {
      type: { name: 'function' },
      description: 'The onBlur handler for blur events on input',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    onFocus: {
      type: { name: 'function' },
      description: 'The onFocus handler for focus events on input',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    onKeyDown: {
      type: { name: 'function' },
      description: 'The onKeyDown handler for key down events on input',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    minLength: {
      type: { name: 'number' },
      description: 'The minimum length of input value',
      table: {
        type: { summary: 'number' },
      },
    },
    maxLength: {
      type: { name: 'number' },
      description: 'The maximum length of input value',
      table: {
        type: { summary: 'number' },
      },
    },
    inputRef: {
      type: { name: 'Ref<HTMLInputElement>' },
      description: "Ref to the inner input element, use for example to bring focus to the input when there's an error.",
    },
  },
};

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleChange = (e: any) => {
    updateArgs({ ...args, value: e?.target?.value });
  };

  return <MdInput {...args} onChange={handleChange} />;
};

export const Input = Template.bind({});
Input.args = {
  value: '',
  label: 'Label',
  type: 'text',
  size: 'normal',
  disabled: false,
  readOnly: false,
  error: false,
  errorText: '',
  hideErrorIcon: false,
  helpText: '',
  outerWrapperClass: '',
  placeholder: 'Placeholder...',
  id: '',
  suffix: '',
  hideNumberArrows: false,
};

export const InputWithPrefix = Template.bind({});
InputWithPrefix.args = {
  value: '',
  label: 'Label',
  type: 'text',
  size: 'normal',
  disabled: false,
  readOnly: false,
  error: false,
  errorText: '',
  hideErrorIcon: false,
  helpText: '',
  outerWrapperClass: '',
  placeholder: 'Placeholder...',
  id: '',
  suffix: '',
  prefixIcon: <MdUserIcon />,
  hideNumberArrows: false,
};
