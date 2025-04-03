import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/tooltip/README.md';
import { MdIconClose } from '../packages/react/src/icons-material/MdIconClose';
import { MdTooltip } from '../packages/react/src/tooltip/MdTooltip';
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
          "A component for tooltip. Hover over to display/expand text. In addition to the properties presented here, the component accepts all standard attributes of a HTML Div element.<br/><br/>`import { MdTooltip } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    tooltipContent: {
      type: { name: 'string', required: true },
      description: 'The content to display on hover',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    children: {
      type: { name: 'string | ReactNode', required: true },
      description: 'Tooltip trigger element',
      table: {
        type: {
          summary: 'text | ReactNode',
        },
      },
      control: false,
    },
    'aria-label': {
      type: { name: 'string' },
      description: 'The aria label for the tooltip',
      table: {
        defaultValue: { summary: 'tooltipContent' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    mode: {
      description: 'Set the size of the tooltip, affects only font-size of the tooltip content',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
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
    timeout: {
      description: 'Time in ms before the tooltip is shown',
      table: {
        defaultValue: { summary: 250 },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
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
        <MdIconClose width={24} height={24} />
      </MdTooltip>
    </div>
  );
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  tooltipContent: 'This is some info',
  position: 'bottom',
  'aria-label': 'This is some info',
  timeout: 100,
  mode: 'medium',
};
