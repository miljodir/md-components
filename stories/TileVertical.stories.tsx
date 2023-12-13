import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Markdown,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/tile/README.md';
import MdGraphIcon from '../packages/react/src/icons/MdGraphIcon';
import MdTileVertical from '../packages/react/src/tiles/MdTileVertical';
import type { Args } from '@storybook/react';

export default {
  title: 'Components/Tiles/TileVertical',
  component: MdTileVertical,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A link styled as a vertical tile, with optional icon (of your choice) before text.<br/><br/>`import { MdTileVertical } from '@miljodirektoratet/md-react'`",
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
    size: {
      type: { name: 'string' },
      description: 'Selected size for tile',
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: 'string',
        },
      },
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
    <MdTileVertical
      heading="Målinger"
      description="Oversikt over dine målestasjoner"
      href={args.href}
      size={args.size}
      disabled={args.disabled}
      preventDefault={args.preventDefault}
      icon={args.icon && <MdGraphIcon width={128} height={128} />}
    />
  );
};

export const TileVertical = Template.bind({});
TileVertical.args = {
  href: '#',
  size: 'medium',
  disabled: false,
  preventDefault: true,
  icon: true,
};
