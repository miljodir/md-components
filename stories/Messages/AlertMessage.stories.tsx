import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs';
import React, { useState, useRef } from 'react';
import Readme from '../../packages/css/src/messages/AlertMessage.md';
import { MdAlertMessage } from '../../packages/react/src/messages/MdAlertMessage';
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
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A component for alerts. Closable/removable by default. In addition to the properties presented here, the component accepts all standard attributes of a HTML Div element.<br/><br/>`import { MdAlertMessage } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      description:
        'The content to display in the alert message. Can be either a plain string or a html-node containing subcontents.',
      table: {
        type: {
          summary: 'text | ReactNode',
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
    closable: {
      description: 'Show close icon.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
    onClose: {
      description: 'Callback for reacting to closing message.',
      table: {
        defaultValue: { summary: 'function' },
        type: {
          summary: null,
        },
      },
      action: 'close',
    },
    className: {
      type: { name: 'string' },
      description: 'Class names to apply to the component.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    alignContent: {
      description: 'Decides vertical alignement of content i.e. icon and label.',
      table: {
        type: {
          defaultValue: { summary: 'center' },
          summary: 'text',
        },
      },
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
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
