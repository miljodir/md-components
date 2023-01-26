import React from "react";
import { ComponentStory } from "@storybook/react";
import MdInfoBox from '../../packages/react/src/messages/MdInfoBox';

export default {
  title: 'Messages/InfoBox',
  component: MdInfoBox,
  parameters: {
    docs: {
      description: {
        component: "A component for info box.<br/><br/>`import { MdInfoBox } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      description: "The text to display on hover",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    hideIcon: {
      description: 'Hide default icon.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' }
    },
  }
};

const Template: ComponentStory<typeof MdInfoBox> = args => {
  return <MdInfoBox {...args} />;
};

export const InfoBox = Template.bind({});
InfoBox.args = {
  label: 'This is a short info text.',
  hideIcon: false
};
