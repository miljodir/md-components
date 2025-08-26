import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/tile/README.md';
import { MdIconBarChart } from '../packages/react/src/icons-material/MdIconBarChart';
import { MdTile } from '../packages/react/src/tiles/MdTile';
import type { Args } from '@storybook/react-webpack5';

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
          "A link/button styled as a horizontal tile, with optional icon (of your choice) before text. In addition to the properties presented here, the component accepts all standard attributes of HTML Button and Anchor element.<br/><br/>`import { MdTile } from '@miljodirektoratet/md-react'`",
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
    fullWidth: {
      description: 'Make tile full width.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    theme: {
      type: { name: 'string' },
      description: 'Color theme for tile.',
      options: ['primary', 'secondary'],
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    mode: {
      type: { name: 'string' },
      description: 'Selected size for tile',
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'large' },
        type: {
          summary: 'string',
        },
      },
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
      mode={args.mode}
      fullWidth={args.fullWidth}
      theme={args.theme}
      disabled={args.disabled}
      loading={args.loading}
      preventDefault={args.preventDefault}
      icon={args.icon && <MdIconBarChart large width={64} height={64} />}
    />
  );
};

export const Tile = Template.bind({});
Tile.args = {
  href: '#',
  theme: 'primary',
  fullWidth: false,
  mode: 'large',
  disabled: false,
  preventDefault: true,
  icon: true,
  loading: false,
};
