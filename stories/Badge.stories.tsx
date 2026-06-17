import {
  Title,
  Subtitle,
  Markdown,
  Description,
  Controls,
  Primary as PrimaryStory,
} from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/badge/README.md';
import MdBadge from '../packages/react/src/badge/MdBadge';


export default {
  title: 'Components/Badge',
  component: MdBadge,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <PrimaryStory />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        // eslint-disable-next-line quotes
        component: "`import { MdBadge } from '@miljodirektoratet/md-react'`\n\nA Badge is a small, non-interactive component used to display status, notifications, or quantities. It can be used alone or together with other components to draw attention to information that is relevant to the user.\n\nThe component can be used with or without numbers. **If no content is provided, it automatically displays as a pill**. You can still choose the color and select from the three different sizes.\n\n##Use Badge to:\n- show quantities, such as unread messages, notifications, or tasks\n- show a simple status indicator, such as whether something is active, available, or requires attention\n- highlight information that does not require an action from the user\n\n**Avoid Badge when:**\n- you need to display text or categorization – use Tag instead\n- the user needs to be able to perform an action – use Button, Chip, or another interactive component instead\n- the information is important enough that it should not be communicated solely through color or shape\n\n##Variants\n\nBadges can be used in various colors and variants to communicate different types of information. Use colors that support the meaning of the content, and avoid using color alone as the only way to convey status.\n\n##Placement\n\nBadges can be placed:\n- inline along with text or other components\n- floating over an element, for example, over an icon or an avatar\n\nWhen a Badge is used without numbers, it should always have accompanying text or another explanation so that the information is accessible to all users. To position the Badge relative to other elements, you must provide your own styling for placement. You can add the `className` attribute to the component and apply custom classes for positioning.",
      },
    },
  },
  argTypes: {
    children: {
      description: 'Content of the badge, can be text or ReactNode',
      table: {
        type: {
          summary: 'text | ReactNode',
        },
      },
      control: { type: 'text' },
    },
    theme: {
      description: 'Selected theme for badge',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['primary', 'secondary', 'error', 'warning', 'success', 'info'],
      control: { type: 'inline-radio' },
      if: { arg: 'theme', exists: true },
    },
    mode: {
      description: 'Badge size mode (default medium)',
      table: {
        type: {
          summary: 'string',
        },
      },
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
    },
  },
};

interface BadgeArgs {
  children: string | React.ReactNode;
  theme: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  mode: 'small' | 'medium' | 'large';
}

const Template = (args: BadgeArgs) => {
  return (
    <MdBadge
      theme={args.theme}
      size={args.mode}
    >
      {args.children}
    </MdBadge>
  );
};


export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: '8',
  mode: 'medium',
};

