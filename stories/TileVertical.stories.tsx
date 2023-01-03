import React from 'react';
import MdTileVertical from '../packages/react/src/tiles/MdTileVertical';
import MdGraphIcon from '../packages/react/src/icons/MdGraphIcon';

export default {
  title: 'Components/Tiles/TileVertical',
  component: MdTileVertical,
  parameters: {
    docs: {
      description: {
        component: 'A link styled as a vertical tile, with optional icon (of your choice) before text.',
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
    size: {
      type: { name: 'string' },
      description: "Selected size for tile",
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'medium' },
        type: {
          summary: "string",
        },
      }
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
    <MdTileVertical
      heading="Målinger"
      description="Beskrivelse"
      href={args.href}
      size={args.size}
      preventDefault={args.preventDefault}
      icon={args.icon && <MdGraphIcon width={128} height={128} />}
    />
  );
}

export const TileVertical = Template.bind({});
TileVertical.args = {
  href: '#',
  size: 'medium',
  preventDefault: true,
  icon: true
}
