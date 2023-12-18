import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/tooltip/README.md';
import MdDeleteIcon from '../packages/react/src/icons/MdDeleteIcon';
import MdTooltip from '../packages/react/src/tooltip/MdTooltip';
import type { MdTooltipProps } from '../packages/react/src/tooltip/MdTooltip';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Components/Tooltip',
  component: MdTooltip,
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
          "A component for tooltip. Hover over to display/expand text.<br/><br/>`import { MdTooltip } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      description: 'The text to display on hover',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    position: {
      description: 'Selected position for the tooltip',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['right', 'top', 'bottom'],
      control: { type: 'inline-radio' },
      if: { arg: 'position', exists: true },
    },
  },
};

const Template: StoryFn<typeof MdTooltip> = (args: MdTooltipProps) => {
  return (
    <MdTooltip {...args}>
      <MdDeleteIcon width={20} height={20} />
    </MdTooltip>
  );
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: 'This is some info',
  position: 'bottom',
};
