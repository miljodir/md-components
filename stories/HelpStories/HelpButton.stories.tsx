import {
  ArgTypes,
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Markdown,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../../packages/css/src/help/README.md';
import MdHelpButton from '../../packages/react/src/help/MdHelpButton';
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
            <ArgTypes of={PRIMARY_STORY} />
            <Stories />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "Button for help text. Mainly used in conjunction with MdHelpText.<br/><br/>`import { MdHelpButton } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
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

const HelpButtonTemplate = (args: Args) => {
  const [, updateArgs] = useArgs();

  const handleExpanded = (exp: boolean) => {
    updateArgs({ ...args, expanded: exp });
  };

  return (
    <MdHelpButton
      expanded={args.expanded}
      hideArrow={args.hideArrow}
      onClick={() => {
        return handleExpanded(!args.expanded);
      }}
    />
  );
};

export const HelpButton = HelpButtonTemplate.bind({});
HelpButton.args = {
  expanded: false,
  hideArrow: false,
};
