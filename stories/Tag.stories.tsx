import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/tag/README.md';
import { MdTag } from '../packages/react/src/tag/MdTag';
import type { MdTagProps } from '../packages/react/src/tag/MdTag';
import type { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Components/Tag',
  component: MdTag,
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
          "A component for info tag. <br/><br/>`import { MdTag } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    theme: {
      description: 'Theme of info tag',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error' ],
      control: { type: 'inline-radio' },
    },
    type: {
      description: 'Theme of info tag',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['base', 'light', 'outlined', ],
      control: { type: 'inline-radio' },
    },
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

const Template: StoryFn<typeof MdTag> = (args: MdTagProps) => {
  return (
    <div>
      <MdTag {...args} />
    </div>
  );
};

export const Tag = Template.bind({});
Tag.args = {
  theme: 'primary',
  type: 'base',
  label: 'Tag',
};
