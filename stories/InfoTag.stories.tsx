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
import React from 'react';
import Readme from '../packages/css/src/infoTag/README.md';
import MdInfoTag from '../packages/react/src/infoTag/MdInfoTag';
import type { MdInfoTagProps } from '../packages/react/src/infoTag/MdInfoTag';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Components/InfoTag',
  component: MdInfoTag,
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
          "A component for info tag. Display icon, and hover over to display/expand info-text.<br/><br/>`import { MdInfoTag } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    theme: {
      description: 'Theme of info tag',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['primary', 'secondary', 'warning', 'danger'],
      control: { type: 'inline-radio' },
    },
    icon: {
      description: 'Select predefined icon, or set to `custom`.',
      table: {
        defaultValue: { summary: 'info' },
        type: {
          summary: 'text',
        },
      },
      options: ['none', 'info', 'warning', 'error', 'custom'],
      control: { type: 'inline-radio' },
    },
    label: {
      description: 'The text to display on hover',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    keepOpen: {
      description: 'Keep info tag open',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    customIcon: {
      type: { name: 'ReactNode' },
      description: 'If `icon = custom`, provide custom icon here.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: { type: 'html' },
    },
  },
};

const Template: StoryFn<typeof MdInfoTag> = (args: MdInfoTagProps) => {
  return <MdInfoTag {...args} />;
};

export const InfoTag = Template.bind({});
InfoTag.args = {
  theme: 'primary',
  keepOpen: false,
  label: 'This is some info',
  icon: 'info',
  customIcon: null,
};
