import React from 'react';
import { useArgs } from '@storybook/client-api';
import { ComponentStory } from '@storybook/react';

import MdModal from '../packages/react/src/modal/MdModal';
import MdButton from '../packages/react/src/button/MdButton';

export default {
  title: 'Components/Modal',
  component: MdModal,
  parameters: {
    docs: {
      description: {
        component: "An overlay modal component.<br/><br/>`import { MdModal } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    heading: {
      type: { name: 'string' },
      description: "The heading/title for the modal.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    open: {
      type: { name: 'boolean' },
      description: "State for open/closed",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    id: {
      type: { name: 'string' },
      description: "Unique id for the modal",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    className: {
      type: { name: 'string' },
      description: "Additional class names for outer wrapper",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    error: {
      type: { name: 'boolean' },
      description: "Add error decorator to modal wrapper",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    onClose: {
      type: { name: 'function' },
      description: "Handler for closing the modal",
      table: {
        type: {
          summary: "function",
        },
      },
    }
  }
};

const Template: ComponentStory<typeof MdModal> = (args) => {
  const [_, updateArgs] = useArgs();

  const toggleModal = () => {
    const open = !args.open;
    updateArgs({ ...args, open: open });
  }

  return (
    <div>
      <MdButton
        onClick={() => toggleModal()}
      >
        Toggle modal
      </MdButton>

      <MdModal
        {...args}
        onClose={() => toggleModal()}
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
  error: false
};
