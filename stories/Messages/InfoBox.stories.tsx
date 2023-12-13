import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Markdown,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import React from 'react';
import Readme from '../../packages/css/src/messages/InfoBox.md';
import MdInfoBox from '../../packages/react/src/messages/MdInfoBox';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Messages/InfoBox',
  component: MdInfoBox,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        // eslint-disable-next-line quotes
        component: "A component for info box.<br/><br/>`import { MdInfoBox } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      description: 'The text to display on hover',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    hideIcon: {
      description: 'Hide default icon.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    fullWidth: {
      description: 'Make info box full width. Non-full width has max-width = 634px',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    customIcon: {
      description: 'Custom icon. Overrides theme icon.',
      table: {
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: null,
    },
  },
};

const Template: StoryFn<typeof MdInfoBox> = args => {
  return <MdInfoBox {...args} />;
};

export const InfoBox = Template.bind({});
InfoBox.args = {
  label: 'This is a short info text.',
  hideIcon: false,
  fullWidth: false,
};
