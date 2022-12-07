import React from 'react';
import { action } from '@storybook/addon-actions';

import MdButton from '../packages/react/src/button/MdButton';
import ChevronIcon from '../packages/react/src/icons/ChevronIcon';

export default {
  title: 'Components/Button',
  component: MdButton,
  argTypes: {
    theme: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'inline-radio' },
      if: { arg: 'theme', exists: true },
    },
    disabled: {
      control: { type: 'boolean' }
    },
    small: {
      control: { type: 'boolean' }
    }
  },
};

interface ButtonArgs {
  label: string;
  disabled: boolean;
  theme: string;
  small: boolean;
}

const Template = (args: ButtonArgs) => <MdButton onClick={action(args.label)} disabled={args.disabled} theme={args.theme} small={args.small}>{args.label}</MdButton>;
const TemplateWithIcon = (args: ButtonArgs) => <MdButton onClick={action(args.label)} disabled={args.disabled} theme={args.theme} small={args.small} rightIcon={<ChevronIcon />}>{args.label}</MdButton>;

export const Primary = Template.bind({})
Primary.args = {
  theme: 'primary',
  label: 'Hovedknapp',
  disabled: false,
  small: false
};

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary',
  label: 'Sekundærknapp',
  disabled: false,
  small: false
};

export const Error = Template.bind({})
Error.args = {
  theme: 'danger',
  label: 'Advarselsknapp',
  disabled: false,
  small: false
};

export const Disabled = Template.bind({})
Disabled.args = {
  theme: 'primary',
  label: 'Deaktivert knapp',
  disabled: true,
  small: false
};

export const ButtonWithIcon = TemplateWithIcon.bind({})
ButtonWithIcon.args = {
  theme: 'primary',
  label: 'Knapp med ikon',
  disabled: false,
  small: false
};
