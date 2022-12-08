import React from 'react';
import { useArgs } from '@storybook/client-api';
import MdHelpButton from '../../packages/react/src/help/MdHelpButton';
import MdHelpText from '../../packages/react/src/help/MdHelpText';

export default {
  title: 'Components/Help',
  component: MdHelpButton,
  parameters: {
    docs: {
      description: {
        component: 'Example of how to use MdHelpButton and MdHelpText to toggle help text.'
      }
    }
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
      control: { type: 'text' }
    },
    expanded: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    hideArrow: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    onClick: {
      type: { name: 'function' },
      description: "The onClick handler for change events",
      table: {
        type: {
          summary: "function",
        },
      },
    }
  }
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();

  const handleExpanded = (exp) => {
    updateArgs({ ...args, expanded: exp });
  };

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '.45em', fontFamily: 'Open sans' }}>
        <div style={{ marginRight: '1em' }}>Click icon to toggle</div>
        <MdHelpButton
          expanded={args.expanded}
          hideArrow={args.hideArrow}
          onClick={() => handleExpanded(!args.expanded)}
        />
      </div>
      <MdHelpText style={{
          display: args.expanded ? 'block' : 'none'
        }}
      >
        {args.text}
      </MdHelpText>
    </div>
  );
};

export const HelpButtonAndText = Template.bind({});
HelpButtonAndText.args = {
  text: 'This is a help text, which is toggled by clicking the help icon',
  expanded: false,
  hideArrow: false
};
