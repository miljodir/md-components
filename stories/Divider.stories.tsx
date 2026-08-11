import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/divider/README.md';
import type { MdDividerProps } from '../packages/react/src/divider/MdDivider';
import { MdDivider } from '../packages/react/src/divider/MdDivider';
import type { StoryFn } from '@storybook/react-webpack5';

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
            <Primary />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A component for divider. In addition to the properties presented here, the component accepts all standard attributes of a HTML HR element.<br/><br/>`import { MdDivider } from '@miljodirektoratet/md-react'`. Dividers are used to create a visual separation between content. It is a simple horizontal line that spans the available width.<br /><br /><strong>Use a divider when:</strong><br /><ul><li>You want to create a clear division of content</li><li>Whitespace alone does not provide sufficient separation</li></ul><br /><strong>Avoid a divider when:</strong><br /><ul><li>Natural spacing or other visual elements provide sufficient separation</li><li>Too many divider elements create a cluttered visual appearance</li></ul><br /><strong>Guidelines</<strong><br />Dividers are used to break content into smaller parts, making it more organized and easier to read. They can also be used to separate content that is related to each other but should still have a visual distinction.<br /><br /><strong>Color</strong><br />By default, the divider uses the color <code>--md-color-border-secondary</code>. If needed, <code>--md-color-border-tertiary</code>, <code>--md-color-border-primary</code>, or other colors can also be used to adjust visual weight, contrast, or context. ",
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
