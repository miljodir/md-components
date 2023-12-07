import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import React from 'react';
// @ts-ignore
import Readme from '../../packages/css/src/help/README.md';

import MdHelpText from '../../packages/react/src/help/MdHelpText';

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
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <Description markdown={Readme} />
          </>
        );
      },
      description: {
        component:
          "Component for displaying help text, mainly used in conjunction with MdHelpButton.<br/><br/>`import { MdHelpText } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    text: {
      type: { name: 'string | html' },
      description: 'Text to display',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string | html',
        },
      },
      control: false,
    },
  },
};

const HelpTextTemplate = args => {
  return <MdHelpText>{args.text}</MdHelpText>;
};

export const HelpText = HelpTextTemplate.bind({});
HelpText.args = {
  text: (
    <div>
      This is a helpful text, in a sweet green box. It can also contain <em>html</em>.
    </div>
  ),
};
