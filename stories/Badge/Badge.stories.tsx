import {
  Title,
  Subtitle,
  Markdown,
  Description,
  Controls,
  Primary as PrimaryStory,
} from '@storybook/addon-docs/blocks';
import Readme from '../../packages/css/src/badge/README.md';
import MdBadge from '../../packages/react/src/badge/MdBadge';
import Editorial from './docs/Badge.mdx';
import React from 'react';

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
            <Editorial />
            <PrimaryStory />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        // eslint-disable-next-line quotes
        component: "`import { MdBadge } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    count: {
      description: 'Number to display inside the badge. If not provided, the badge will render as a dot.',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    maxCount: {
      description: 'Maximum number to display. If the count exceeds this number, it will display as "maxCount+" (e.g., "9+").',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
      if: { arg: 'count', exists: true },
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
  count?: number | null;
  maxCount?: number | null;
  theme?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  mode?: 'small' | 'medium' | 'large';
}

const Template = (args: BadgeArgs) => {
  return (
    <MdBadge theme={args.theme} size={args.mode ?? 'medium'} count={args.count} maxCount={args.maxCount} />
  );
};

export const Badge = Template.bind({});
Badge.args = {
  theme: 'primary',
  mode: 'medium',
  count: 1,
  maxCount: 9,
};

export const Dot = Template.bind({});
Dot.args = {
  theme: 'primary',
  mode: 'medium',
};


