import React from "react";
import { ComponentStory } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
// @ts-ignore
import Readme from '../../packages/css/src/messages/InfoBox.md';

import MdInfoBox from '../../packages/react/src/messages/MdInfoBox';

export default {
  title: 'Messages/InfoBox',
  component: MdInfoBox,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
          <Description markdown={Readme} />
        </>
      ),
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
    fullWidth: {
      description: 'Make info box full width. Non-full width has max-width = 634px',
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
  hideIcon: false,
  fullWidth: false
};
