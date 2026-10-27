import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
// @ts-expect-error: no type declarations for markdown file
import Readme from '../../packages/css/src/divider/README.md';
import type { MdDividerProps } from '../../packages/react/src/divider/MdDivider';
import { MdDivider } from '../../packages/react/src/divider/MdDivider';
import type { StoryFn } from '@storybook/react-webpack5';
import Editorial from './docs/Divider.mdx';

export default {
  title: 'Components/Divider',
  component: MdDivider,
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
          "`import { MdDivider } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    theme: {
      description: 'Theme of divider',
      table: {
        type: {
          summary: 'text',
        },
      },
      defaultValue: { summary: 'secondary' },
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
  },
};

const Template: StoryFn<typeof MdDivider> = (args: MdDividerProps) => {
  return (
      <MdDivider
        {...args}
      />

  );
};

export const Divider = Template.bind({});
Divider.args = {
  theme: 'secondary',
};
