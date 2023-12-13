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
import React, { useState, useRef } from 'react';
import Readme from '../../packages/css/src/messages/AlertMessage.md';
import MdAlertMessage from '../../packages/react/src/messages/MdAlertMessage';
import type { Args, StoryFn } from '@storybook/react';

export default {
  title: 'Messages/AlertMessage',
  component: MdAlertMessage,
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
        component:
          // eslint-disable-next-line quotes
          "A component for alerts. Closable/removable by default.<br/><br/>`import { MdAlertMessage } from '@miljodirektoratet/md-react'`",
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
    theme: {
      description: 'Theme of alert message',
      table: {
        type: {
          defaultValue: { summary: 'info' },
          summary: 'text',
        },
      },
      options: ['info', 'confirm', 'warning', 'error'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      description: 'Make alert message full width. Non-full width has max-width = 634px',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    hideIcon: {
      description: 'Hide alert icon.',
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

const Template: StoryFn<typeof MdAlertMessage> = (args: Args) => {
  const [show, setShow] = useState(true);
  const parent = useRef(null);

  const onClick = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 700);
  };

  return <div ref={parent}>{show && <MdAlertMessage {...args} onClose={onClick} />}</div>;
};

export const AlertMessage = Template.bind({});
AlertMessage.args = {
  theme: 'info',
  label: 'This is an alert message.',
  hideIcon: false,
  closable: true,
  fullWidth: false,
};
