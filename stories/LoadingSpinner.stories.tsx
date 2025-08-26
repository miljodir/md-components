import React from 'react';
import { MdLoadingSpinner } from '../packages/react/src/loadingSpinner/MdLoadingSpinner';
import type { MdLoadingSpinnerProps } from '../packages/react/src/loadingSpinner/MdLoadingSpinner';
import type { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Components/LoadingSpinner',
  component: MdLoadingSpinner,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Loading spinner component. In addition to the properties presented here, the component accepts all standard attributes of a HTML Div element.<br/><br/>`import { MdLoadingSpinner } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    size: {
      type: { name: 'number' },
      description: 'Size of loading spinner, determines both height and width.',
      table: {
        defaultValue: { summary: '100' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    position: {
      type: { name: 'string' },
      description: 'Loading spinner placement in the container',
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'center' },
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      type: { name: 'string' },
      description: 'Additional class names to apply to container.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
  },
};

const Template: StoryFn<typeof MdLoadingSpinner> = (args: MdLoadingSpinnerProps) => {
  return <MdLoadingSpinner {...args} />;
};

export const LoadingSpinner = Template.bind({});
LoadingSpinner.args = {
  size: 100,
  position: 'center',
  className: '',
};
