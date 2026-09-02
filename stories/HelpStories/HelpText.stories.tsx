import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../../packages/css/src/help/README.md';
import Editorial from './docs/HelpText.mdx';
import { MdHelpText } from '../../packages/react/src/help/MdHelpText';
import type { Args } from '@storybook/react-webpack5';

export default {
  title: 'Components/Help',
  component: MdHelpText,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Editorial />
            <Primary />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "`import { MdHelpText } from '@miljodirektoratet/md-react'`",
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
          summary: 'string | ReactNode',
        },
      },
      control: false,
    },
  },
};

const HelpTextTemplate = (args: Args) => {
  return <MdHelpText>{args.children}</MdHelpText>;
};

export const HelpText = HelpTextTemplate.bind({});
HelpText.args = {
  children: (
    <div>
      This is a helpful text, in a sweet green box. It can also contain <em>html</em>.
    </div>
  ),
};
