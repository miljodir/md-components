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
        component:
          // eslint-disable-next-line quotes
          "An overlay modal component. Extends HTMLDivElement<br/><br/>`import { MdModal } from '@miljodirektoratet/md-react'`",
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
    headingDivider: {
      type: { name: 'boolean' },
      description: 'Show divider below heading',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    footerDivider: {
      type: { name: 'boolean' },
      description: 'Toggle divider above footer, if footer is present',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    footer: {
      type: { name: 'ReactNode' },
      description: 'Content to display in the footer area.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | ReactNode',
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

  const closeModal = () => {
    updateArgs({ ...args, open: false });
  };
  const openModal = () => {
    updateArgs({ ...args, open: true });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdButton
        onClick={() => {
          openModal();
        }}
      >
        Toggle modal
      </MdButton>

      <MdModal
        {...args}
        headingIcon={args.headingIcon ? headingIcon : null}
        onClose={() => {
          closeModal();
        }}
        footer={
          args.footer && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <MdButton
                onClick={() => {
                  closeModal();
                }}
                theme="danger"
              >
                Close
              </MdButton>
              <MdButton
                onClick={() => {
                  closeModal();
                }}
                theme="primary"
              >
                Close
              </MdButton>
            </div>
          )
        }
      >
        <div>This is html content in the modal.</div>
        <p style={{ color: '#000', background: '#ccc' }}>This is even more html content, with style tag.</p>
      </MdModal>
    </div>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  open: false,
  heading: 'Modal title',
  headingIcon: false,
  error: false,
  closeOnOutsideClick: true,
  headingDivider: true,
  footerDivider: true,
  footer: false,
};
