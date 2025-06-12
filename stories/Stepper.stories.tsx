import { Title, Subtitle, Description, Controls, Primary, Markdown } from '@storybook/addon-docs';
// eslint-disable-next-line import/named
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Readme from '../packages/css/src/stepper/README.md';
import { MdButton } from '../packages/react/src/button/MdButton';
import { MdIconChevronForward } from '../packages/react/src/icons-material/MdIconChevronForward';
import { MdStep } from '../packages/react/src/stepper/MdStep';
import { MdStepper } from '../packages/react/src/stepper/MdStepper';
import type { Args, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Stepper',
  component: MdStepper,
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
        // eslint-disable-next-line quotes
        component: "Stepper component.<br/><br/>`import { MdStepper, MdStep } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    activeStep: {
      type: { name: 'number' },
      description: 'The active step in the stepper. Starts at 0.',
      table: {
        defaultValue: { summary: 0 },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    children: {
      type: { name: 'ReactNode' },
      description: 'The steps in the stepper. Must be MdStep components.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: { type: 'ReactNode' },
    },
    MdStep_title: {
      type: { name: 'string' },
      description: 'Arg for MdStep. The title of the step.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'string' },
    },
    MdStep_completedContent: {
      type: { name: 'ReactNode' },
      description: 'Arg for MdStep. The content to show when the step is completed. This is optional',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: { type: 'ReactNode' },
    },
    MdStep_children: {
      type: { name: 'ReactNode' },
      description: 'Arg for MdStep. The content of the step.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: { type: 'ReactNode' },
    },
  },
};

export const Stepper: StoryFn<typeof MdStepper> = (args: Args) => {
  const [, updateArgs] = useArgs();

  const nextStep = () => {
    updateArgs({ activeStep: args.activeStep + 1 });
  };

  const prevStep = () => {
    updateArgs({ activeStep: args.activeStep - 1 });
  };

  const stepContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
  };

  const fontStyle: React.CSSProperties = {
    fontFamily: 'Open sans',
  };

  return (
    <>
      <MdStepper activeStep={args.activeStep}>
        <MdStep
          style={fontStyle}
          title="Step 1"
          completedContent={
            <div style={fontStyle}>
              This is a completed step, which can be shown differently if the &quot;completedContent&quot; prop is
              provided.
            </div>
          }
        >
          <div style={stepContentStyle}>
            This is a step.
            <MdButton rightIcon={<MdIconChevronForward />} onClick={nextStep}>
              Go to step 2
            </MdButton>
          </div>
        </MdStep>
        <MdStep
          title="Step 2"
          style={fontStyle}
          completedContent={
            <div style={fontStyle}>This is what Step 2 looks like when completed, this is completely customizable!</div>
          }
        >
          <div style={stepContentStyle}>
            This is the content of a MdStep. It can contain anything you want, text or HTML.
            <p>Here is a paragraph!</p>
            <div style={buttonStyle}>
              <MdButton onClick={prevStep} theme="secondary">
                Previous
              </MdButton>
              <MdButton rightIcon={<MdIconChevronForward />} onClick={nextStep}>
                Go to step 3
              </MdButton>
            </div>
          </div>
        </MdStep>
        <MdStep style={fontStyle} title="Step 3">
          <div style={stepContentStyle}>
            This is the last step in this example.
            <MdButton onClick={prevStep} theme="secondary">
              Previous
            </MdButton>
          </div>
        </MdStep>
      </MdStepper>
    </>
  );
};
Stepper.args = {
  activeStep: 1,
};
