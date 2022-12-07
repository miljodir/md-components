import React from 'react';
import { useArgs } from '@storybook/client-api';
import MdHelpButton from '../../packages/react/src/help/MdHelpButton';


export default {
  title: 'Components/Help',
  component: MdHelpButton,
  parameters: {
    docs: {
      description: {
        component: 'Button for help text. Mainly used in conjunction with MdHelpText.',
      },
    },
  },
  argTypes: {
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
}

const HelpButtonTemplate = args => {
  const [_, updateArgs] = useArgs();

  const handleExpanded = (exp) => {
    updateArgs({ ...args, expanded: exp });
  };

  return (
    <MdHelpButton
      expanded={args.expanded}
      hideArrow={args.hideArrow}
      onClick={() => handleExpanded(!args.expanded)}
    />
  );
}

export const HelpButton = HelpButtonTemplate.bind({});
HelpButton.args = {
  expanded: false,
  hideArrow: false
};

// export const Help2 = Template.bind({});
