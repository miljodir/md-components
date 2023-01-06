import React from 'react';

import MdRedirectIcon from '../../packages/react/src/icons/MdRedirectIcon'
import MdRedirectIcon64 from '../../packages/react/src/icons/MdRedirectIcon64';

export default {
  title: 'Icons/Redirect',
  component: MdRedirectIcon,
  parameters: {
    docs: {
      description: {
        component: "Redirect icon. Color is inherited from parent.<p>`import { MdRedirectIcon } from '@md-components/md-react'`</p><p>`import { MdRedirectIcon64 } from '@md-components/md-react'`</p>",
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
      <MdRedirectIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdRedirectIcon64 className={args.className} />
    </div>
  );
}

export const RedirectIcon = Template.bind({})
RedirectIcon.args = {
  className: '',
  color: '#005e5d'
};

export const RedirectIcon64 = Template64.bind({})
RedirectIcon64.args = {
  className: '',
  color: '#005e5d'
};
