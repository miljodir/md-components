import {
  Title,
  Subtitle,
  Markdown,
  Description,
  Controls,
  Primary as PrimaryStory,
} from '@storybook/addon-docs/blocks';
import React from 'react';
import { action } from 'storybook/actions';
import Readme from '../packages/css/src/iconButton/README.md';
import { MdIconButton } from '../packages/react/src/iconButton/MdIconButton';
import { MdIconDownload } from '../packages/react/src/icons-material/MdIconDownload';
import type { MdIconButtonProps } from '../packages/react/src/iconButton/MdIconButton';

export default {
  title: 'Components/IconButton',
  component: MdIconButton,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <PrimaryStory />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "An icon button component. In addition to the properties presented here, the component accepts all standard attributes of a HTML Button element.<br/><br/>`import { MdIconButton } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    theme: {
      description: 'Selected theme for icon button',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['filled', 'border', 'plain'],
      control: { type: 'inline-radio' },
      if: { arg: 'theme', exists: true },
    },
    children: {
      description: 'Icon to place inside button',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'ReactNode | image',
        },
      },
    },
    labels: {
      type: { name: 'object' },
      description:
        'Object containing custom labels for button aria-labels. Properties: `button`, `toolTip`. Falls back to empty string.',
      table: {
        defaultValue: { summary: '{ button: "", toolTip: ""}' },
        type: {
          summary: '{ button?: string; toolTip?: string; }',
        },
      },
      control: { type: 'object' },
    },     
    'aria-label': {
      description: 'The aria label for the tooltip. NOTE! This prop is deprecated and replaced by labels.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    showTooltip: {
      description: 'Show tooltip on hover',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Is button disabled?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    loading: {
      description: 'Add loading indicator to button',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  },
};

const Template = (args: MdIconButtonProps) => {
  return (
    <MdIconButton
      aria-label={args['aria-label']}
      showTooltip={args.showTooltip}
      onClick={action(args.theme || '')}
      disabled={args.disabled}
      theme={args.theme}
      loading={args.loading}
    >
      <MdIconDownload />
    </MdIconButton>
  );
};

export const Filled = Template.bind({});
Filled.args = {
  theme: 'filled',
  labels: { button: 'Last ned filen', toolTip: 'Last ned filen' },
  'aria-label': 'Last ned filen',
  showTooltip: true,
  disabled: false,
  loading: false,
};

export const Border = Template.bind({});
Border.args = {
  theme: 'border',
  labels: { button: 'Last ned filen', toolTip: 'Last ned filen' },
  'aria-label': 'Last ned filen',
  showTooltip: true,
  disabled: false,
  loading: false,
};

export const Plain = Template.bind({});
Plain.args = {
  theme: 'plain',
  labels: { button: 'Last ned filen', toolTip: 'Last ned filen' },
  'aria-label': 'Last ned filen',
  showTooltip: true,
  disabled: false,
  loading: false,
};
