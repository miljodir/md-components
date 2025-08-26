import {
  Title,
  Subtitle,
  Markdown,
  Description,
  Controls,
  Primary as PrimaryStory,
} from '@storybook/addon-docs/blocks';
import React from 'react';
import { action } from 'storybook/actions';
import Readme from '../packages/css/src/button/README.md';
import { MdButton } from '../packages/react/src/button/MdButton';
import { MdIconChevronForward } from '../packages/react/src/icons-material/MdIconChevronForward';
import { MdIconClose } from '../packages/react/src/icons-material/MdIconClose';

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
            <Description />
            <PrimaryStory />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        // eslint-disable-next-line quotes
        component: "A button component.<br/><br/>`import { MdButton } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    children: {
      description: 'Button label text',
      table: {
        type: {
          summary: 'text | ReactNode',
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
      options: ['primary', 'secondary', 'tertiary', 'danger', 'danger-secondary'],
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
    mode: {
      description: 'Button size mode',
      table: {
        type: {
          summary: 'string',
        },
      },
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
    },
    small: {
      description: 'Make button smaller (deprecated - use mode="small" instead)',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    loading: {
      description: 'Add loading indicator to button',
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
    topIcon: {
      description: 'Icon above label',
      table: {
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
    },
  },
};

interface ButtonArgs {
  children: string | React.ReactNode;
  disabled: boolean;
  theme: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'danger-secondary';
  mode: 'small' | 'medium' | 'large';
  small: boolean;
  loading?: boolean;
}

const Template = (args: ButtonArgs) => {
  return (
    <MdButton
      onClick={action(args.children as string)}
      disabled={args.disabled}
      theme={args.theme}
      mode={args.mode}
      small={args.small}
      loading={args.loading}
    >
      {args.children}
    </MdButton>
  );
};
const TemplateWithIcon = (args: ButtonArgs) => {
  return (
    <MdButton
      onClick={action(args.children as string)}
      disabled={args.disabled}
      theme={args.theme}
      mode={args.mode}
      small={args.small}
      rightIcon={<MdIconChevronForward />}
    >
      {args.children}
    </MdButton>
  );
};

const TemplateWithTopIcon = (args: ButtonArgs) => {
  return (
    <MdButton
      onClick={action(args.children as string)}
      disabled={args.disabled}
      theme={args.theme}
      mode={args.mode}
      small={args.small}
      topIcon={<MdIconClose />}
    >
      {args.children}
    </MdButton>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: 'Hovedknapp',
  disabled: false,
  mode: 'medium',
  small: false,
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Sekundærknapp',
  disabled: false,
  mode: 'medium',
  small: false,
  loading: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  theme: 'tertiary',
  children: 'Tertiærknapp',
  disabled: false,
  mode: 'medium',
  small: false,
  loading: false,
};

export const Error = Template.bind({});
Error.args = {
  theme: 'danger',
  children: 'Advarselsknapp',
  disabled: false,
  mode: 'medium',
  small: false,
  loading: false,
};

export const ErrorSecondary = Template.bind({});
ErrorSecondary.args = {
  theme: 'danger-secondary',
  children: 'Advarselsknapp sekundær',
  disabled: false,
  mode: 'medium',
  small: false,
  loading: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  theme: 'primary',
  children: 'Deaktivert knapp',
  disabled: true,
  mode: 'medium',
  small: false,
  loading: false,
};

export const ButtonWithIcon = TemplateWithIcon.bind({});
ButtonWithIcon.args = {
  theme: 'primary',
  children: 'Knapp med ikon',
  disabled: false,
  mode: 'medium',
  small: false,
  loading: false,
};

export const ButtonWithTopIcon = TemplateWithTopIcon.bind({});
ButtonWithTopIcon.args = {
  theme: 'primary',
  children: 'Knapp med ikon',
  disabled: false,
  mode: 'medium',
  small: false,
  loading: false,
};
