import { Controls, Description, Markdown, Primary, Subtitle, Title } from '@storybook/addon-docs/blocks';

import React from 'react';
import { useArgs } from 'storybook/preview-api';
import Readme from '../packages/css/src/formElements/inputsearch/README.md';
import { MdInputSearch } from '../packages/react/src/formElements/MdInputSearch';

import type { Args } from '@storybook/react-webpack5';
import type { ChangeEvent } from 'react';

export default {
  title: 'Form/InputSearch',
  component: MdInputSearch,
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
          "Search field used in forms. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdInputSearch } from '@miljodirektoratet/md-react'`",
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
      description: 'Set input field width, possible values are "small", "medium" and "large"',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    button: {
      description: 'Turn on or off button',
      table: {
        defaultValue: { summary: 'true' },
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
    supportText: {
      type: { name: 'string' },
      description: 'Optional support text, will be replaced by error text if error is true and error text is set.',
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
    ref: {
      type: { name: 'Ref<HTMLInputElement>' },
      // eslint-disable-next-line quotes
      description: "Ref to the inner input element, use for example to bring focus to the input when there's an error.",
    },
    onSearch: {
      type: { name: 'function' },
      description:
        'Callback function triggered when the user submits a search, either by pressing Enter or clicking the search button. Receives the search term as a parameter.',
      action: 'Search',
    },    
  },
};

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateArgs({ ...args, value: e?.target?.value });
  };

  const onSearch = (searchTerm: string) => {
    if (typeof args.onSearch === 'function') args.onSearch(searchTerm);
  };

  return <MdInputSearch {...args} onChange={handleChange} onSearch={onSearch}/>;
};

export const Search = Template.bind({});
Search.args = {
  value: '',
  label: 'Label',
  mode: 'medium',
  helpText: '',
  supportText: '',
  outerWrapperClass: '',
  placeholder: 'Placeholder...',
  className: '',
  button: true,
};
