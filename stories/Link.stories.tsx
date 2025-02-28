import React from 'react';
import { MdIconOpenInNew } from '../packages/react/src/icons-material/MdIconOpenInNew';
import { MdLink } from '../packages/react/src/link/MdLink';

export default {
  title: 'Components/Link',
  component: MdLink,
  parameters: {
    docs: {
      description: {
        // eslint-disable-next-line quotes
        component: "Inline link component.<br/><br/>`import { MdLink } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    href: {
      description: 'The link destination',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    text: {
      description: 'The link text',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    icon: {
      description: 'Icon after link text',
      table: {
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
    },
    onClick: {
      description: 'Callback for controlling onClick along side href',
      table: {
        defaultValue: { summary: 'function' },
        type: {
          summary: null,
        },
      },
    },
  },
};

function clickHandler(event: React.MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
}

interface LinkArgs {
  text: string;
  href?: string;
}

const Template = (args: LinkArgs) => {
  return (
    <MdLink onClick={clickHandler} href={args.href}>
      {args.text}
    </MdLink>
  );
};

const TemplateWithIcon = (args: LinkArgs) => {
  return (
    <MdLink onClick={clickHandler} href={args.href} icon={<MdIconOpenInNew />}>
      {args.text}
    </MdLink>
  );
};

export const Link = Template.bind({});
Link.args = {
  text: 'This is a link',
  href: '#',
};

export const LinkWithIcon = TemplateWithIcon.bind({});
LinkWithIcon.args = {
  text: 'This is a link',
  href: '#',
};
