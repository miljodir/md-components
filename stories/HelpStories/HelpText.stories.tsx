import React from 'react';
import MdHelpText from '../../packages/react/src/help/MdHelpText';

export default {
  title: 'Components/Help',
  component: MdHelpText,
  parameters: {
    docs: {
      description: {
        component: "Component for displaying help text, mainly used in conjunction with MdHelpButton.<br/><br/>`import { MdHelpText } from '@md-components/md-react'`",
      },
    },
  },
  argTypes: {
    text: {
      type: { name: 'string | html' },
      description: "Text to display",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string | html",
        },
      },
      control: false
    }
  }
}

const HelpTextTemplate = args => {
  return (
    <MdHelpText>{args.text}</MdHelpText>
  );
};

export const HelpText = HelpTextTemplate.bind({});
HelpText.args = {
  text: <div>This is a helpful text, in a sweet green box. It can also contain <em>html</em>.</div>
};
