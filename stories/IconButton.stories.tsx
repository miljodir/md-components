import { action } from '@storybook/addon-actions';
import { Title, Subtitle, Markdown, Description, Controls, Primary as PrimaryStory } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/iconButton/README.md';
import MdIconButton from '../packages/react/src/iconButton/MdIconButton';
import MdDownloadIcon from '../packages/react/src/icons/MdDownloadIcon';
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
        // eslint-disable-next-line quotes
        component: "An icon button component.<br/><br/>`import { MdIconButton } from '@miljodirektoratet/md-react'`",
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
    ariaLabel: {
      description: 'The aria label for the tooltip',
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
  },
};

const Template = (args: MdIconButtonProps) => {
  return (
    <MdIconButton
      ariaLabel="Last ned filen"
      showTooltip={args.showTooltip}
      onClick={action(args.theme || '')}
      disabled={args.disabled}
      theme={args.theme}
    >
      <MdDownloadIcon />
    </MdIconButton>
  );
};

export const Filled = Template.bind({});
Filled.args = {
  theme: 'filled',
  ariaLabel: 'Last ned filen',
  showTooltip: true,
  disabled: false,
};

export const Border = Template.bind({});
Border.args = {
  theme: 'border',
  ariaLabel: 'Last ned filen',
  showTooltip: true,
  disabled: false,
};

export const Plain = Template.bind({});
Plain.args = {
  theme: 'plain',
  ariaLabel: 'Last ned filen',
  showTooltip: true,
  disabled: false,
};
