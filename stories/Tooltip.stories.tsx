import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/tooltip/README.md';
import MdHelpButton from '../packages/react/src/help/MdHelpButton';
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
  },
};

const Template: StoryFn<typeof MdTooltip> = (args: MdTooltipProps) => {
  return (
    <MdTooltip {...args}>
      <MdHelpButton
        expanded={false}
        onClick={() => {
          return;
        }}
      />
    </MdTooltip>
  );
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: 'This is some info',
};
