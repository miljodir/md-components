import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs/blocks';

import React from 'react';
import Readme from '../../packages/css/src/accordion/README.md';
import MdAccordion, { type MdAccordionProps } from '../../packages/react/src/accordion/MdAccordion';
import MdAccordionItem from '../../packages/react/src/accordion/MdAccordionItem';
import Editorial from './docs/Accordion.mdx';

import type { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Components/Accordion/Accordion',
  component: MdAccordion,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Editorial />
            <Primary />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "`import { MdAccordion, MdAccordionItem } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    name: {
      type: { name: 'string', required: true },
      description: 'Name used to group details elements in the DOM',
      table: {
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
    rounded: {
      type: { name: 'boolean' },
      description: 'Deprecated: Rounded corners are now the default for all components, and the prop will be removed in a future release.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  },
};

const Template: StoryFn<typeof MdAccordion> = (args: MdAccordionProps) => {
  return (
    <MdAccordion
      name={args.name || 'example-accordion'}
      theme={args.theme}
      hideCloseButton={args.hideCloseButton}
      disabled={args.disabled}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
    >
      <MdAccordionItem label="Accordion 1">Dette er element 1 in accordion</MdAccordionItem>
      <MdAccordionItem label="Accordion 2">Dette er element 2 in accordion</MdAccordionItem>
    </MdAccordion>
  );
};

export const Accordion = Template.bind({});
Accordion.args = {
  name: 'example-accordion',
  theme: 'primary',
  hideCloseButton: false,
  rounded: false,
  disabled: false,
};
