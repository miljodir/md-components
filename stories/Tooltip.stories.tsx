import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/tooltip/README.md';
import MdCloseIcon from '../packages/react/src/icons/MdCloseIcon';
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
    content: {
      description: 'The content to display on hover',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: { type: 'text' },
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
    position: {
      description: 'Selected position for the tooltip',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['right', 'top', 'bottom', 'left'],
      control: { type: 'inline-radio' },
      if: { arg: 'position', exists: true },
    },
  },
};

const Template: StoryFn<typeof MdTooltip> = (args: MdTooltipProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <MdTooltip {...args}>
        <MdCloseIcon width={20} height={20} />
      </MdTooltip>
    </div>
  );
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  content: 'This is some info',
  position: 'bottom',
  ariaLabel: 'This is some info',
};
