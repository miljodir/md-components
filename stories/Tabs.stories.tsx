import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/tabs/README.md';
import MdTab from '../packages/react/src/tabs/MdTab';
import MdTabs from '../packages/react/src/tabs/MdTabs';
import type { Args } from '@storybook/react';

export default {
  title: 'Components/Tabs',
  component: MdTabs,
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
        // eslint-disable-next-line quotes
        component: "A component for tabs.<br/><br/>`import { MdTabs, MdTab } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    disabled: {
      type: { name: 'boolean' },
      description:
        'Enable/disable tabs. To disable a single tab, set the desired MdTab component to `disabled`. This example disables Tab 2.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    initialTab: {
      type: { name: 'number' },
      description:
        'Sets the index of the tab to be shown initially. Defaults to the first tab. This example sets Tab 1 as initial.',
      table: {
        defaultValue: { summary: '0' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
  },
};

const Template = (args: Args) => {
  return (
    <MdTabs initialTab={args.initialTab}>
      <MdTab title="Tab 1">
        <div style={{ fontSize: '20px', marginBottom: '.5em' }}>This is the first tab</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maiores reprehenderit quasi itaque eveniet
          soluta aliquam consectetur perspiciatis assumenda laborum quam expedita, vitae, odio dignissimos obcaecati
          ipsa incidunt! Pariatur, blanditiis.
        </div>
      </MdTab>
      <MdTab title="Tab 2" disabled={args.disabled}>
        <div style={{ fontSize: '20px', marginBottom: '.5em' }}>This is the second tab</div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum unde labore sint, nesciunt quasi non
          molestias cupiditate. Saepe quasi natus quis magnam quas. Quae, similique facilis? Architecto, temporibus
          minima! Laudantium.
        </div>
      </MdTab>
    </MdTabs>
  );
};

export const Tabs = Template.bind({});
Tabs.args = {
  disabled: false,
  initialTab: 0,
};
