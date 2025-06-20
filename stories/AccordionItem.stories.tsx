import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs';

import React from 'react';
import Readme from '../packages/css/src/accordionitem/README.md';
import { MdAccordionItem } from '../packages/react/src/accordion/MdAccordionItem';
import MdIconHome from '../packages/react/src/icons-material/MdIconHome';
import type { MdAccordionItemProps } from '../packages/react/src/accordion/MdAccordionItem';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Components/Accordion/AccordionItem',
  component: MdAccordionItem,
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
          "A component for expand/collapse content in an accordion.<br/><br/>`import { MdAccordionItem } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the accordion item.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    id: {
      type: { name: 'string' },
      description: 'Id for the accordion item. If not set, uses a random uuid',
      table: {
        defaultValue: { summary: 'useId()' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    children: {
      description: 'Accordion content',
      table: {
        type: {
          summary: 'text | ReactNode',
        },
      },
      control: false,
    },
    expanded: {
      type: { name: 'boolean' },
      description: 'Determines if the accordion item should be initially expanded.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    theme: {
      type: { name: 'string' },
      description: 'Color theme for accordion.',
      options: ['primary', 'secondary', 'add'],
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Enable/disabled accordion.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    hideCloseButton: {
      type: { name: 'boolean' },
      description: 'Hide close button inside accordion content',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    closeButtonText: {
      type: { name: 'string' },
      description: 'The text for the close button inside accordion content.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    rounded: {
      type: { name: 'boolean' },
      description: 'Add rounded corners to accordion item',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    headerContent: {
      type: { name: 'ReactNode' },
      description: 'Content to display on the right side in the header. Can be HTML.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | ReactNode | string',
        },
      },
      control: { type: 'boolean' },
    },
  },
};

const Template: StoryFn<typeof MdAccordionItem> = (args: MdAccordionItemProps) => {
  return (
    <div style={{ minHeight: '200px' }}>
      <MdAccordionItem
        {...args}
        headerContent={
          args.headerContent ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
              Example content
              <MdIconHome style={{ height: '1.15rem' }} />
            </div>
          ) : undefined
        }
      >
        Dette er element i accordion
      </MdAccordionItem>
    </div>
  );
};

export const AccordionItem = Template.bind({});
AccordionItem.args = {
  label: 'Click to toggle accordion item',
  theme: 'primary',
  disabled: false,
  headerContent: false,
  hideCloseButton: false,
  closeButtonText: 'Lukk',
  rounded: false,
};
