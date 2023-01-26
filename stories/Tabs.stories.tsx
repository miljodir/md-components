import React from "react";
import MdTabs from '../packages/react/src/tabs/MdTabs';
import MdTab from '../packages/react/src/tabs/MdTab';

export default {
  title: 'Components/Tabs',
  component: MdTabs,
  parameters: {
    docs: {
      description: {
        component: "A component for tabs.<br/><br/>`import { MdTabs, MdTab } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    disabled: {
      type: { name: 'boolean' },
      description: "Enable/disable tabs. To disable a single tab, set the desired MdTab component to `disabled`. This example disables Tab 2.",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: "boolean",
        },
      },
      control: { type: 'boolean' }
    },
  }
};

const Template = (args: any) => {
  return (
    <MdTabs>
      <MdTab title="Tab 1">
        <div style={{ fontSize: '20px', marginBottom: '.5em' }}>This is the first tab</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maiores reprehenderit quasi itaque eveniet soluta aliquam consectetur perspiciatis assumenda laborum quam expedita, vitae, odio dignissimos obcaecati ipsa incidunt! Pariatur, blanditiis.</div>
      </MdTab>
      <MdTab title="Tab 2" disabled={args.disabled}>
        <div style={{ fontSize: '20px', marginBottom: '.5em' }}>This is the second tab</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum unde labore sint, nesciunt quasi non molestias cupiditate. Saepe quasi natus quis magnam quas. Quae, similique facilis? Architecto, temporibus minima! Laudantium.</div>
      </MdTab>
    </MdTabs>
  );
};

export const Tabs = Template.bind({});
Tabs.args = {
  disabled: false
};
