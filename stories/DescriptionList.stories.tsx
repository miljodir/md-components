import { Title, Subtitle, Description, Controls, Primary, Markdown } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/descriptionList/README.md';
import MdDescriptionList, { MdDescriptionListItem } from '../packages/react/src/descriptionList/MdDescriptionList';
import { MdIconSignpost } from '../packages/react/src/icons-material/MdIconSignpost';
import { MdLink } from '../packages/react/src/link/MdLink';
import type { Meta, StoryFn } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/DescriptionList/DescriptionList',
  component: MdDescriptionList,
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
        component:
          // eslint-disable-next-line quotes
          "Description list component.<br/><br/>`import { MdDescriptionList } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    narrow: {
      type: { name: 'boolean' },
      description: 'Whether to use the narrow style.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    className: {
      description: 'Custom class name for the component.',
      table: {
        defaultValue: { summary: undefined },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    children: {
      type: { name: 'other', value: 'ReactNode', required: true },
      description: 'The description list items. Must be MdDescriptionListItem components.',
      table: {
        type: {
          summary: 'MdDescriptionListItem[]',
        },
      },
      control: false,
    },
  },
} satisfies Meta<typeof MdDescriptionList>;

export default meta;

export const DescriptionList: StoryFn<typeof MdDescriptionList> = args => {
  return (
    <MdDescriptionList narrow={args.narrow}>
      <MdDescriptionListItem label="Label 1">Value 1</MdDescriptionListItem>
      <MdDescriptionListItem
        label={
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Label with html <MdIconSignpost width={20} />
          </div>
        }
      >
        <MdLink href="https://www.miljodirektoratet.no">https://www.miljodirektoratet.no</MdLink>
      </MdDescriptionListItem>
    </MdDescriptionList>
  );
};
DescriptionList.args = {
  narrow: false,
  className: '',
};
