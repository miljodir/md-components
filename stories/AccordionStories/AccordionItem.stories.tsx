import React from 'react';
import { ComponentStory } from '@storybook/react';

import MdAccordionItem from '../../packages/react/src/accordion/MdAccordionItem';

import CheckIcon from '../../packages/react/src/icons/CheckIcon';

export default {
  title: 'Components/Accordion',
  component: MdAccordionItem,
  parameters: {
    docs: {
      description: {
        component: 'A component for expand/collapse content in an accordion.',
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: "The label for the accordion item.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    theme: {
      type: { name: 'string' },
      description: "Color theme for accordion.",
      options: ['primary', 'secondary'],
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'inline-radio' },
    },
    disabled: {
      type: { name: 'boolean' },
      description: "Enable/disabled accordion.",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
    headerContent: {
      type: { name: 'ReactNode' },
      description: "Content to display on the right side in the header. Can be HTML.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "DomElement | ReactNode | string",
        },
      },
      control: { type: 'boolean' }
    }
  }
};

const Template: ComponentStory<typeof MdAccordionItem> = (args) => {
  const headerContent = (
    <div style={{ display: 'flex', gap: '1em' }}>
      <div>Example content</div>
      <div style={{ width: '15px', height: '15px', color: '#005e5d' }}><CheckIcon /></div>
    </div>
  );

  return (
    <MdAccordionItem
      {...args}
      headerContent={args.headerContent ? headerContent : null}
    >
      Accordion item content. This can be whatever you want.
    </MdAccordionItem>
  );
};

export const AccordionItem = Template.bind({});
AccordionItem.args = {
  label: 'Click to toggle accordion item',
  theme: 'primary',
  disabled: false,
  headerContent: false
}
