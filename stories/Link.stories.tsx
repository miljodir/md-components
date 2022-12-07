import React from 'react';

import MdLink from '../packages/react/src/link/MdLink';

export default {
  title: 'Components/Link',
  component: MdLink,
  argTypes: {
    href: {
      description: "The link destination",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    text: {
      description: "The link text",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    onClick: {
      description: 'Callback for controlling onClick along side href',
      table: {
        defaultValue: { summary: 'function' },
        type: {
          summary: null,
        },
      }
    }
  }
};

function clickHandler(event: React.ChangeEvent<HTMLInputElement>) {
  event.preventDefault();
  event.stopPropagation();
}

interface LinkArgs {
  text: string;
  href?: string;
}

const Template = (args: LinkArgs) => (
  <MdLink onClick={clickHandler} href={args.href}>
    {args.text}
  </MdLink>
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'This is a link',
  href: '#'
}
