import React from 'react';
import MdDescriptionList, { MdDescriptionListItem } from '../packages/react/src/descriptionList/MdDescriptionList';
import type { Meta, StoryFn } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/DescriptionList/DescriptionListItem',
  component: MdDescriptionListItem,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Description list component. Should only be used as child in `MdDescriptionList`!<br/><br/>`import { MdDescriptionList } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'other', value: 'string | ReactNode', required: true },
      description: 'The label for the description list item.',
      table: {
        defaultValue: { summary: undefined },
        type: {
          summary: 'string | ReactNode',
        },
      },
      control: { type: 'text' },
    },
    children: {
      type: { name: 'other', value: 'ReactNode', required: true },
      description: 'The description list item content.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: false,
    },
  },
} satisfies Meta<typeof MdDescriptionListItem>;

export default meta;

export const DescriptionListItem: StoryFn<typeof MdDescriptionListItem> = args => {
  return (
    <MdDescriptionList>
      <MdDescriptionListItem label={args.label}>{args.children}</MdDescriptionListItem>
    </MdDescriptionList>
  );
};

DescriptionListItem.args = {
  label: 'Label 1',
  children: 'Value 1',
};
