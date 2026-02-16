import React from 'react';
import { MdIconOpenInNew } from '../packages/react/src/icons-material/MdIconOpenInNew';
import { MdLink } from '../packages/react/src/link/MdLink';
import type { StoryFn } from '@storybook/react-webpack5';

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
    children: {
      description: 'The link text',
      table: {
        type: {
          summary: 'text | ReactNode',
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

function clickHandler(event: React.MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
}

interface LinkArgs {
  children: string;
  href?: string;
  asChild?: boolean;
  asChildContent?: React.ReactNode;
}

const Template: StoryFn<LinkArgs> = (args: LinkArgs) => {
  return (
    <MdLink onClick={clickHandler} href={args.href}>
      {args.children}
    </MdLink>
  );
};

const TemplateWithIcon: StoryFn<LinkArgs> = (args: LinkArgs) => {
  return (
    <MdLink onClick={clickHandler} href={args.href} icon={<MdIconOpenInNew />}>
      {args.children}
    </MdLink>
  );
};

export const Link = Template.bind({});
Link.args = {
  children: 'This is a link',
  href: '#',
};

export const LinkWithIcon = TemplateWithIcon.bind({});
LinkWithIcon.args = {
  children: 'This is a link',
  href: '#',
};

const TemplateAsChild: StoryFn<LinkArgs> = (args: LinkArgs) => {
  return (
    <MdLink asChild={args.asChild} asChildContent={args.asChildContent}>
      {args.children}
    </MdLink>
  );
};

export const LinkAsChild = TemplateAsChild.bind({});
LinkAsChild.args = {
  children: 'This is a link',
  asChild: true,
  asChildContent: <a href="https://example.com">Link</a>,
};
