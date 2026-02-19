import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/tag/README.md';
import { MdButton } from '../packages/react/src/button/MdButton';
import MdMenu from '../packages/react/src/menu/MdMenu';
import type { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Components/Menu',
  component: MdMenu,
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
          "A component for info menu. <br/><br/>`import { MdMenu } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    button: {
      description: 'Icon before label',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  }
};

const Template: StoryFn<typeof MdMenu> = (args)  => {
  return (
    <div>
      <MdMenu {...args} />
    </div>
  );
};

const dummyMenu = [
  { label: 'Menu item 1', href: '#' },
  { label: 'Menu item 2', href: '#' },
  { label: 'Menu item 3', href: '#' },
];

export const Default = Template.bind({});
Default.args = {
    children: 'Toggle menu',
    menu: dummyMenu
};

export const Button = Template.bind({});
Button.args = {
    button: <MdButton>Menyknapp</MdButton>,
    menu: dummyMenu
};

