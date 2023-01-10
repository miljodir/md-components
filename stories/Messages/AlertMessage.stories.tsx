import React, { useState, useEffect, useRef } from "react";
import { ComponentStory } from "@storybook/react";
import autoAnimate from "@formkit/auto-animate";
import MdAlertMessage from '../../packages/react/src/messages/MdAlertMessage';

export default {
  title: 'Messages/AlertMessage',
  component: MdAlertMessage,
  parameters: {
    docs: {
      description: {
        component: "A component for alerts. Closable/removable by default.<br/><br/>`import { MdAlertMessage } from '@md-components/md-react'`",
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
    theme: {
      description: "Theme of alert message",
      table: {
        type: {
          defaultValue: { summary: 'info' },
          summary: 'text',
        },
      },
      options: ['info', 'confirm', 'warning', 'error'],
      control: { type: 'inline-radio' },
    },
    hideIcon: {
      description: 'Hide alert icon.',
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

const Template: ComponentStory<typeof MdAlertMessage> = args => {
  const [show, setShow] = useState(true);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent]);

  const onClick = (e: any) => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 700);
  }

  return (
    <div ref={parent}>
      {show &&
        <MdAlertMessage {...args} onClose={onClick} />
      }
    </div>
  );
};

export const AlertMessage = Template.bind({});
AlertMessage.args = {
  theme: 'info',
  label: 'This is an alert message.',
  hideIcon: false,
  closable: true
};
