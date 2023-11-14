import React, { useState, useEffect, useRef } from 'react';
import { ComponentStory } from '@storybook/react';
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
import Readme from '../../packages/css/src/messages/AlertMessage.md';

import MdAlertMessage from '../../packages/react/src/messages/MdAlertMessage';

export default {
  title: 'Messages/AlertMessage',
  component: MdAlertMessage,
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
        component:
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
      description:
        'Make alert message full width. Non-full width has max-width = 634px',
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

const Template: ComponentStory<typeof MdAlertMessage> = (args) => {
  const [show, setShow] = useState(true);
  const parent = useRef(null);

  const onClick = (e: any) => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 700);
  };

  return (
    <div ref={parent}>
      {show && <MdAlertMessage {...args} onClose={onClick} />}
    </div>
  );
};

export const AlertMessage = Template.bind({});
AlertMessage.args = {
  theme: 'info',
  label: 'This is an alert message.',
  hideIcon: false,
  closable: true,
  fullWidth: false,
};
