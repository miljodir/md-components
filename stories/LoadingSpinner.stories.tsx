import React from 'react';
import { ComponentStory } from '@storybook/react';
import MdLoadingSpinner from '../packages/react/src/loadingSpinner/MdLoadingSpinner';

export default {
  title: 'Components/LoadingSpinner',
  component: MdLoadingSpinner,
  parameters: {
    docs: {
      description: {
        component: "Loading spinner component.<br/><br/>`import { MdLoadingSpinner } from '@md-components/md-react'`",
      },
    },
  },
  argTypes: {
    size: {
      type: { name: 'number' },
      description: "Size of loading spinner, determines both height and width.",
      table: {
        defaultValue: { summary: '100' },
        type: {
          summary: "number",
        },
      },
      control: { type: 'number' }
    },
  }
};

const Template: ComponentStory<typeof MdLoadingSpinner> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MdLoadingSpinner size={args.size} />
    </div>
  );
};

export const LoadingSpinner = Template.bind({});
LoadingSpinner.args = {
  size: 100
};
