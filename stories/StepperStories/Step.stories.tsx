import { Title, Subtitle, Description, Controls, Primary } from '@storybook/addon-docs';

import React from 'react';

import MdStep from '../../packages/react/src/stepper/MdStep';

import type { StoryFn } from '@storybook/react';

export default {
  title: 'Components/Stepper',
  component: MdStep,
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
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          'Sub-component of Stepper. Must be used inside MdStepper.<br/><br/>`import { MdStep } from "@miljodirektoratet/md-react"`',
      },
    },
  },
  argTypes: {
    title: {
      type: { name: 'string' },
      description: 'The title of the step',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'string' },
    },
    children: {
      type: { name: 'ReactNode' },
      description: 'The content of the step',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: { type: 'ReactNode' },
    },
    completedContent: {
      type: { name: 'ReactNode' },
      description: 'The content of the step when completed',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: { type: 'ReactNode' },
    },
  },
};

const Template: StoryFn<typeof MdStep> = () => {
  return (
    <div>
      <MdStep
        title="Step 1"
        completedContent={
          <>
            This is a completed step, which can be shown differently if the &quot;completedContent&quot; prop is
            provided
          </>
        }
      >
        <div>This is a step</div>
      </MdStep>
    </div>
  );
};

export const Step = Template.bind({});
