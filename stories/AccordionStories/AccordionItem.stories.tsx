import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import React from 'react';
// @ts-ignore
import Readme from '../../packages/css/src/accordionitem/README.md';

import MdAccordionItem from '../../packages/react/src/accordion/MdAccordionItem';
import MdInfoTag from '../../packages/react/src/infoTag/MdInfoTag';
import type { ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Accordion',
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
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <Description markdown={Readme} />
          </>
        );
      },
      description: {
        component:
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
      type: { name: 'string | number' },
      description: 'The id for the accordion item.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
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
    onToggle: {
      type: { name: 'function' },
      description:
        'Handler for controlling expand/collapse. If not present, component handles expand/collapse internally.',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
};

const Template: ComponentStory<typeof MdAccordionItem> = args => {
  const headerContent = <MdInfoTag theme="warning" label="Some info here" icon="warning" keepOpen />;

  return (
    <MdAccordionItem {...args} headerContent={args.headerContent ? headerContent : null}>
      Accordion item content. This can be whatever you want.
    </MdAccordionItem>
  );
};

export const AccordionItem = Template.bind({});
AccordionItem.args = {
  label: 'Click to toggle accordion item',
  id: '',
  theme: 'primary',
  disabled: false,
  headerContent: false,
  hideCloseButton: false,
  rounded: false,
};
