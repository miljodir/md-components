import { Controls, Description, Markdown, Primary, Subtitle, Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/menu/README.md';
import { MdButton } from '../packages/react/src/button/MdButton';
import { MdIconButton } from '../packages/react/src/iconButton/MdIconButton';
import MdIconContentCopy from '../packages/react/src/icons-material/MdIconContentCopy';
import MdIconDelete from '../packages/react/src/icons-material/MdIconDelete';
import MdIconDownload from '../packages/react/src/icons-material/MdIconDownload';
import MdIconEdit from '../packages/react/src/icons-material/MdIconEdit';
import MdIconPerson from '../packages/react/src/icons-material/MdIconPerson';
import MdIconUpload from '../packages/react/src/icons-material/MdIconUpload';
import { MdMenu } from '../packages/react/src/menu/MdMenu';
import type { MdMenuGroupOption, MdMenuProps } from '../packages/react/src/menu/MdMenu';
import type { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Components/Menu',
  component: MdMenu,
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
        component: "A dropdown menu component for accessing a set of commands, actions, or settings.<br/><br/>`import { MdMenu } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    trigger: {
      description: 'The trigger element that opens the menu (e.g. a button)',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: false,
    },
    groups: {
      description: 'Groups of menu items',
      table: {
        type: { summary: 'MdMenuGroupDef[]' },
      },
      control: false,
    },
    size: {
      description: 'Size of the menu',
      options: ['small', 'default', 'large'],
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
      control: { type: 'inline-radio' },
    },
    showDividers: {
      description: 'Show dividers between groups',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
    placement: {
      description: 'Placement of the menu relative to the trigger',
      options: ['top', 'bottom', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
      table: {
        defaultValue: { summary: 'bottom-start' },
        type: { summary: 'string' },
      },
      control: { type: 'select' },
    },
  },
};

const defaultGroups: MdMenuGroupOption[] = [
  {
    id: 'g1',
    items: [
      { id: 'edit', label: 'Edit' },
      { id: 'copy', label: 'Copy' },
      { id: 'share', label: 'Share' },
      { id: 'delete', label: 'Delete', disabled: true },
    ],
  },
];

const Template: StoryFn<MdMenuProps> = (args) => {
  return (
    <div style={{ padding: '2rem' }}>
      <MdMenu {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  trigger: <MdButton>{'Actions'}</MdButton>,
  groups: defaultGroups,
  size: 'default',
  showDividers: false,
  placement: 'bottom-start',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  trigger: <MdButton>Actions</MdButton>,
  groups: [
    {
      id: 'g1',
      items: [
        { id: 'edit', label: 'Edit', icon: <MdIconEdit /> },
        { id: 'copy', label: 'Copy', icon: <MdIconContentCopy /> },
        { id: 'download', label: 'Download', icon: <MdIconDownload /> },
        { id: 'delete', label: 'Delete', icon: <MdIconDelete />, disabled: true },
      ],
    },
  ] as MdMenuGroupOption[],
};

export const WithGroupHeadingsAndDividers = Template.bind({});
WithGroupHeadingsAndDividers.args = {
  trigger: <MdButton>Options</MdButton>,
  showDividers: true,
  groups: [
    {
      id: 'file',
      heading: 'File',
      items: [
        { id: 'download', label: 'Download', icon: <MdIconDownload /> },
        { id: 'upload', label: 'Upload', icon: <MdIconUpload /> },
      ],
    },
    {
      id: 'edit',
      heading: 'Edit',
      items: [
        { id: 'edit-item', label: 'Edit', icon: <MdIconEdit /> },
        { id: 'copy', label: 'Copy', icon: <MdIconContentCopy /> },
      ],
    },
    {
      id: 'danger',
      heading: 'Danger zone',
      items: [{ id: 'delete', label: 'Delete', icon: <MdIconDelete /> }],
    },
  ] as MdMenuGroupOption[],
  size: 'default',
};

export const IconButtonTrigger = Template.bind({});
IconButtonTrigger.args = {
  trigger: <MdIconButton label="Profile"><MdIconPerson /></MdIconButton>,
  groups: [
    {
      id: 'g1',
      items: [
        { id: 'edit', label: 'Edit', icon: <MdIconEdit /> },
        { id: 'copy', label: 'Copy', icon: <MdIconContentCopy /> },
        { id: 'delete', label: 'Delete', icon: <MdIconDelete /> },
      ],
    },
  ] as MdMenuGroupOption[],
};
