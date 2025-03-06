import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../../packages/css/src/help/README.md';
import { MdHelpText } from '../../packages/react/src/help/MdHelpText';
import type { Args } from '@storybook/react';

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
            <Primary />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "Component for displaying help text, mainly used in conjunction with MdHelpButton. In addition to the properties presented here, the component accepts all standard attributes of a HTML Div element.<br/><br/>`import { MdHelpText } from '@miljodirektoratet/md-react'`",
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
