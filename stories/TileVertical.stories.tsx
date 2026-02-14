import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/tile/README.md';
import { MdIconBarChart } from '../packages/react/src/icons-material/MdIconBarChart';
import { MdLink } from '../packages/react/src/link/MdLink';
import { MdTileVertical } from '../packages/react/src/tiles/MdTileVertical';
import type { Args } from '@storybook/react-webpack5';

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
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A link/button styled as a vertical tile, with optional icon (of your choice) before text. In addition to the properties presented here, the component accepts all standard attributes of HTML Button and Anchor element.<br/><br/>`import { MdTileVertical } from '@miljodirektoratet/md-react'`",
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
    mode: {
      type: { name: 'string' },
      description: 'Selected width for tile',
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
    theme: {
      type: { name: 'string' },
      description: 'Color theme for vertical tile.',
      options: ['primary', 'secondary'],
      table: {
        defaultValue: { summary: 'primary' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
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
    asChild: {
      description: 'Activate asChild',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  },
};

interface TileVerticalArgs extends Args {
  asChild?: boolean;
  asChildContent?: React.ReactNode;
}

const Template = (args: TileVerticalArgs) => {
  return (
    <MdTileVertical
      heading="Målinger"
      description="Oversikt over dine målestasjoner"
      href={args.href}
      mode={args.mode}
      theme={args.theme}
      disabled={args.disabled}
      preventDefault={args.preventDefault}
      icon={args.icon && <MdIconBarChart large width={128} height={128} />}
      asChild={args.asChild}
      asChildContent={args.asChildContent}
    />
  );
};

export const TileVertical = Template.bind({});
TileVertical.args = {
  href: '#',
  mode: 'medium',
  theme: 'primary',
  disabled: false,
  preventDefault: true,
  icon: true,
  loading: false,
};

export const TileVerticalAsChild = Template.bind({});
TileVerticalAsChild.args = {
  mode: 'medium',
  theme: 'primary',
  disabled: false,
  preventDefault: false,
  icon: true,
  loading: false,
  asChild: true,
  asChildContent: <MdLink href="#">Link as child</MdLink>,
};
