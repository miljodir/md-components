import React from 'react';

import MdCommentIcon from '../../packages/react/src/icons/MdCommentIcon'
import MdCommentIcon64 from '../../packages/react/src/icons/MdCommentIcon64';
import MdCommentFillIcon from '../../packages/react/src/icons/MdCommentFillIcon'
import MdCommentFillIcon64 from '../../packages/react/src/icons/MdCommentFillIcon64';

export default {
  title: 'Icons/Comment',
  component: MdCommentIcon,
  parameters: {
    docs: {
      description: {
        component: "Comment icon. Color is inherited from parent.<br/><br/>`import { MdCommentIcon } from '@md-components/md-react'`<br/>`import { MdCommentIcon64 } from '@md-components/md-react'`<br/>`import { MdCommentFillIcon } from '@md-components/md-react'`<br/>`import { MdCommentFillIcon64 } from '@md-components/md-react'`",
      },
    },
  },
  argTypes: {
    className: {
      description: "Classes for svg icon",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    color: {
      description: "Set color of parent (for example purposes)",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'color'
    }
  }
};

const Template = (args: any) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdCommentIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCommentIcon64 className={args.className} />
    </div>
  );
};

const TemplateFill = (args: any) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdCommentFillIcon className={args.className} />
    </div>
  );
}

const TemplateFill64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCommentFillIcon64 className={args.className} />
    </div>
  );
}

export const CommentIcon = Template.bind({})
CommentIcon.args = {
  className: '',
  color: '#005e5d'
};

export const CommentIcon64 = Template64.bind({})
CommentIcon64.args = {
  className: '',
  color: '#005e5d'
};

export const CommentFillIcon = TemplateFill.bind({})
CommentFillIcon.args = {
  className: '',
  color: '#005e5d'
};

export const CommentFillIcon64 = TemplateFill64.bind({})
CommentFillIcon64.args = {
  className: '',
  color: '#005e5d'
};
