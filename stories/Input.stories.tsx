import { Controls, Description, Markdown, Primary, Subtitle, Title } from '@storybook/addon-docs';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/input/README.md';
import { MdInput } from '../packages/react/src/formElements/MdInput';
import { MdIconAccountCircle } from '../packages/react/src/icons-material/MdIconAccountCircle';

import type { Args } from '@storybook/react';
import type { ChangeEvent } from 'react';

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
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "Input field used in forms. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdInput } from '@miljodirektoratet/md-react'`",
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
    mode: {
      description: 'Set input field width, possible values are "normal" and "small"',
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
      description: 'Id for the input field. If not set, uses a random uuid',
      table: {
        defaultValue: { summary: 'useId()' },
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
          summary: 'string | DomElement | image | ReactNode',
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
    ref: {
      type: { name: 'Ref<HTMLInputElement>' },
      // eslint-disable-next-line quotes
      description: "Ref to the inner input element, use for example to bring focus to the input when there's an error.",
    },
  },
};

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateArgs({ ...args, value: e?.target?.value });
  };

  return <MdInput {...args} onChange={handleChange} />;
};

export const Input = Template.bind({});
Input.args = {
  value: '',
  label: 'Label',
  type: 'text',
  mode: 'normal',
  disabled: false,
  readOnly: false,
  error: false,
  errorText: '',
  hideErrorIcon: false,
  helpText: '',
  outerWrapperClass: '',
  placeholder: 'Placeholder...',
  suffix: '',
  hideNumberArrows: false,
};

export const InputWithPrefix = Template.bind({});
InputWithPrefix.args = {
  value: '',
  label: 'Label',
  type: 'text',
  mode: 'normal',
  disabled: false,
  readOnly: false,
  error: false,
  errorText: '',
  hideErrorIcon: false,
  helpText: '',
  outerWrapperClass: '',
  placeholder: 'Placeholder...',
  suffix: '',
  prefixIcon: <MdIconAccountCircle />,
  hideNumberArrows: false,
};

export const InputWithSuffix = Template.bind({});
InputWithSuffix.args = {
  value: '',
  label: 'Label',
  type: 'text',
  mode: 'normal',
  disabled: false,
  readOnly: false,
  error: false,
  errorText: '',
  hideErrorIcon: false,
  helpText: '',
  outerWrapperClass: '',
  placeholder: 'Placeholder...',
  suffix: <button>Clear</button>,
  prefixIcon: <MdIconAccountCircle />,
  hideNumberArrows: false,
};
