import {
  Title,
  Subtitle,
  Markdown,
  Description,
  Controls,
  Primary as PrimaryStory,
} from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/button/README.md';
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
        component: "A badge component.<br/><br/>`import { MdBadge } from '@miljodirektoratet/md-react'`",
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

