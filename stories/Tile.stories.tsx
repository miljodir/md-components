import React from 'react';
import MdTile from '../packages/react/src/tiles/MdTile';
import MdGraphIcon from '../packages/react/src/icons/MdGraphIcon';

export default {
  title: 'Components/Tiles/Tile',
  component: MdTile,
  parameters: {
    docs: {
      description: {
        component: 'A link styled as a horizontal tile, with optional icon (of your choice) before text.',
      },
    },
  },
  argTypes: {
    href: {
      type: { name: 'string' },
      description: "The url for for href",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "string",
        },
      },
      control: { type: 'text' }
    },
    preventDefault: {
      description: 'Only use the onClick handler and prevent click from triggering href.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' }
    },
    icon: {
      type: { name: 'ReactNode' },
      description: "Icon to present before text in tile.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "DomElement | image | ReactNode",
        },
      },
      control: { type: 'boolean' }
    },
    onClick: {
      type: { name: 'function' },
      description: "Optional onClick handler for click event. Needed if `preventDefault = true`",
      table: {
        type: {
          summary: "function",
        },
      },
    }
  }
};

const Template = (args: any) => {
  return (
    <MdTile
      heading="Målinger"
      description="Beskrivelse"
      href={args.href}
      preventDefault={args.preventDefault}
      icon={args.icon && <MdGraphIcon width={64} height={64} />}
    />
  );
}

export const Tile = Template.bind({});
Tile.args = {
  href: '#',
  preventDefault: true,
  icon: true
}
