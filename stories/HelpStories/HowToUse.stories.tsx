import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs';
// eslint-disable-next-line import/named
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Readme from '../../packages/css/src/help/README.md';
import { MdHelpButton } from '../../packages/react/src/help/MdHelpButton';
import { MdHelpText } from '../../packages/react/src/help/MdHelpText';
import type { Args } from '@storybook/react';

export default {
  title: 'Components/Help',
  component: MdHelpButton,
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
          "Example of how to use MdHelpButton and MdHelpText to toggle help text.<br/><br/>`import { MdHelpButton } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    children: {
      type: { name: 'string | html' },
      description: 'Text to display',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string | html',
        },
      },
      control: { type: 'text' },
    },
    expanded: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    hideArrow: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    onClick: {
      type: { name: 'function' },
      description: 'The onClick handler for change events',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
};

const Template = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleExpanded = (exp: boolean) => {
    updateArgs({ ...args, expanded: exp });
  };

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '.45em', fontFamily: 'Open sans' }}>
        <div style={{ marginRight: '1em' }}>Click icon to toggle</div>
        <MdHelpButton
          expanded={args.expanded}
          hideArrow={args.hideArrow}
          onClick={() => {
            return handleExpanded(!args.expanded);
          }}
        />
      </div>
      <MdHelpText
        style={{
          display: args.expanded ? 'block' : 'none',
        }}
      >
        {args.children}
      </MdHelpText>
    </div>
  );
};

export const HelpButtonAndText = Template.bind({});
HelpButtonAndText.args = {
  children: 'This is a help text, which is toggled by clicking the help icon',
  expanded: false,
  hideArrow: false,
};
