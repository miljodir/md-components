import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/tag/README.md';
import MdIconInfo from '../packages/react/src/icons-material/MdIconInfo';
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
      description: 'Theme of tag',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      control: { type: 'inline-radio' },
    },
    type: {
      description: 'Type of tag',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['base', 'light', 'outlined'],
      control: { type: 'inline-radio' },
    },
    label: {
      description: 'The text to display in tag or tooltip.',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    showIcon: {
      description: 'Toggle icon in tag. The following themes have predefined icons: success, warning, info and error.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    customIcon: {
      type: { name: 'ReactNode' },
      description:
        'Provide a custom icon for all types of tag. Will override predefined icons for success, warning, info and error themes.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: { type: 'html' },
    },
    tooltipOnly: {
      description:
        'Hide text in tag and show only tooltip. Perfered use with customIcon. The content for the tooltip comes from the label property.',
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
  showIcon: false,
  customIcon: null,
  tooltipOnly: false,
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  ...Tag.args,
  theme: 'primary',
  showIcon: true,
  // Use a simple icon as example customIcon in story
  customIcon: <MdIconInfo className="md-tag__icon" width="24" height="24" />,
};
