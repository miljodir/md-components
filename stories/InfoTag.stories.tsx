import React from 'react';
import { ComponentStory } from '@storybook/react';
import MdInfoTag from '../packages/react/src/infoTag/MdInfoTag';

export default {
  title: 'Components/InfoTag',
  component: MdInfoTag,
  parameters: {
    docs: {
      description: {
        component: "A component for info tag. Display icon, and hover over to display/expand info-text.<br/><br/>`import { MdInfoTag } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    theme: {
      description: "Theme of info tag",
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['primary', 'secondary', 'warning', 'danger'],
      control: { type: 'inline-radio' },
    },
    icon: {
      description: "Select predefined icon, or set to `custom`.",
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
      description: "The text to display on hover",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    keepOpen: {
      description: 'Keep info tag open',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' }
    },
    customIcon: {
      type: { name: 'ReactNode' },
      description: "If `icon = custom`, provide custom icon here.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "DomElement | image | ReactNode",
        },
      },
      control: { type: 'html' }
    },
  }
}

const Template: ComponentStory<typeof MdInfoTag> = args => {
  return <MdInfoTag {...args} />;
};

export const InfoTag = Template.bind({});
InfoTag.args = {
  theme: 'primary',
  keepOpen: false,
  label: 'This is some info',
  icon: 'info',
  customIcon: null
};
