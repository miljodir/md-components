import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
// eslint-disable-next-line import/named
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Readme from '../packages/css/src/modal/README.md';
import { MdButton } from '../packages/react/src/button/MdButton';
import { MdIconWarning } from '../packages/react/src/icons-material/MdIconWarning';
import { MdModal } from '../packages/react/src/modal/MdModal';
import type { Args, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: MdModal,
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
        // eslint-disable-next-line quotes
        component: "An overlay modal component.<br/><br/>`import { MdModal } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    heading: {
      type: { name: 'string' },
      description: 'The heading/title for the modal.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    headingIcon: {
      type: { name: 'ReactNode' },
      description: 'Icon to apply to start of heading field.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: { type: 'boolean' },
    },
    children: {
      description: 'Modal content',
      table: {
        type: {
          summary: 'ReactNode(s)',
        },
      },
    },
    open: {
      type: { name: 'boolean' },
      description: 'State for open/closed',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    id: {
      type: { name: 'string' },
      description: 'Unique id for the modal',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    className: {
      type: { name: 'string' },
      description: 'Additional class names for outer wrapper',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    error: {
      type: { name: 'boolean' },
      description: 'Add error decorator to modal wrapper',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    onClose: {
      type: { name: 'function' },
      description: 'Handler for closing the modal',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    closeOnOutsideClick: {
      type: { name: 'boolean' },
      description: 'Close modal on outside click',
      table: {
        defaultValue: { summary: 'true' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  },
};

const Template: StoryFn<typeof MdModal> = (args: Args) => {
  const [, updateArgs] = useArgs();

  const headingIcon = <MdIconWarning width="24" height="24" style={{ color: '#ca0000' }} />;

  const toggleModal = () => {
    const open = !args.open;
    updateArgs({ ...args, open: open });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdButton
        onClick={() => {
          return toggleModal();
        }}
      >
        Toggle modal
      </MdButton>

      <MdModal
        {...args}
        headingIcon={args.headingIcon ? headingIcon : null}
        onClose={() => {
          return toggleModal();
        }}
      >
        <p>This is html content in the modal.</p>
        <p style={{ color: '#000', background: '#ccc' }}>This is even more html content, with style tag.</p>
      </MdModal>
    </div>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  open: true,
  heading: 'Modal title',
  headingIcon: false,
  error: false,
  closeOnOutsideClick: true,
};
