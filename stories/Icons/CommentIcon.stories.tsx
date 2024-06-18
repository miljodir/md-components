import React from 'react';

import MdCommentFillIcon from '../../packages/react/src/icons/MdCommentFillIcon';
import MdCommentFillIcon64 from '../../packages/react/src/icons/MdCommentFillIcon64';
import MdCommentIcon from '../../packages/react/src/icons/MdCommentIcon';
import MdCommentIcon64 from '../../packages/react/src/icons/MdCommentIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Comment',
  component: MdCommentIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Comment icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdCommentIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdCommentIcon64 } from '@miljodirektoratet/md-react'`<br/>`import { MdCommentFillIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdCommentFillIcon64 } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    className: {
      description: 'Classes for svg icon',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    color: {
      description: 'Set color of parent (for example purposes)',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'color',
    },
  },
};

const Template = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdCommentIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCommentIcon64 className={args.className} />
    </div>
  );
};

const TemplateFill = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdCommentFillIcon className={args.className} />
    </div>
  );
};

const TemplateFill64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCommentFillIcon64 className={args.className} />
    </div>
  );
};

export const CommentIcon = Template.bind({});
CommentIcon.args = {
  className: '',
  color: '#005e5d',
};

export const CommentIcon64 = Template64.bind({});
CommentIcon64.args = {
  className: '',
  color: '#005e5d',
};

export const CommentFillIcon = TemplateFill.bind({});
CommentFillIcon.args = {
  className: '',
  color: '#005e5d',
};

export const CommentFillIcon64 = TemplateFill64.bind({});
CommentFillIcon64.args = {
  className: '',
  color: '#005e5d',
};
