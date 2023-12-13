import { action } from '@storybook/addon-actions';
import {
  Title,
  Subtitle,
  Description,
  Primary as StoryPrimary,
  ArgsTable,
  Stories,
  Markdown,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/button/README.md';
import MdButton from '../packages/react/src/button/MdButton';
import MdChevronIcon from '../packages/react/src/icons/MdChevronIcon';

export default {
  title: 'Components/Button',
  component: MdButton,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description markdown="A button component.<br/><br/>`import { MdButton } from '@miljodirektoratet/md-react'`" />
            <StoryPrimary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
    },
    description: {
      // eslint-disable-next-line quotes
      component: "A button component.<br/><br/>`import { MdButton } from '@miljodirektoratet/md-react'`",
    },
  },
  argTypes: {
    label: {
      description: 'Button label text',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: { type: 'text' },
    },
    theme: {
      description: 'Selected theme for button',
      table: {
        type: {
          summary: 'text',
        },
      },
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'inline-radio' },
      if: { arg: 'theme', exists: true },
    },
    disabled: {
      description: 'Is button disabled?',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    small: {
      description: 'Make button smaller',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    rightIcon: {
      description: 'Icon after label',
      table: {
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
    },
    leftIcon: {
      description: 'Icon before label',
      table: {
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
    },
  },
};

interface ButtonArgs {
  label: string;
  disabled: boolean;
  theme: string;
  small: boolean;
}

const Template = (args: ButtonArgs) => {
  return (
    <MdButton onClick={action(args.label)} disabled={args.disabled} theme={args.theme} small={args.small}>
      {args.label}
    </MdButton>
  );
};
const TemplateWithIcon = (args: ButtonArgs) => {
  return (
    <MdButton
      onClick={action(args.label)}
      disabled={args.disabled}
      theme={args.theme}
      small={args.small}
      rightIcon={<MdChevronIcon />}
    >
      {args.label}
    </MdButton>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  label: 'Hovedknapp',
  disabled: false,
  small: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  label: 'Sekundærknapp',
  disabled: false,
  small: false,
};

export const Error = Template.bind({});
Error.args = {
  theme: 'danger',
  label: 'Advarselsknapp',
  disabled: false,
  small: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  theme: 'primary',
  label: 'Deaktivert knapp',
  disabled: true,
  small: false,
};

export const ButtonWithIcon = TemplateWithIcon.bind({});
ButtonWithIcon.args = {
  theme: 'primary',
  label: 'Knapp med ikon',
  disabled: false,
  small: false,
};
