import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/tile/README.md';
import MdGraphIcon from '../packages/react/src/icons/MdGraphIcon';
import MdTile from '../packages/react/src/tiles/MdTile';
import type { Args } from '@storybook/react';

export default {
  title: 'Components/Tiles/Tile',
  component: MdTile,
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
          "A link styled as a horizontal tile, with optional icon (of your choice) before text.<br/><br/>`import { MdTile } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    href: {
      type: { name: 'string' },
      description: 'The url for for href',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    disabled: {
      description: 'Is link disabled?',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    preventDefault: {
      description: 'Only use the onClick handler and prevent click from triggering href.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    icon: {
      type: { name: 'ReactNode' },
      description: 'Icon to present before text in tile.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: { type: 'boolean' },
    },
    onClick: {
      type: { name: 'function' },
      description: 'Optional onClick handler for click event. Needed if `preventDefault = true`',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
};

const Template = (args: Args) => {
  return (
    <MdTile
      heading="Målinger"
      description="Oversikt over dine målestasjoner"
      href={args.href}
      disabled={args.disabled}
      preventDefault={args.preventDefault}
      icon={args.icon && <MdGraphIcon width={64} height={64} />}
    />
  );
};

export const Tile = Template.bind({});
Tile.args = {
  href: '#',
  disabled: false,
  preventDefault: true,
  icon: true,
};
