import { ArgTypes, Title, Subtitle, Primary, Stories, Markdown, PRIMARY_STORY } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/filelist/README.md';
import MdFileList from '../packages/react/src/fileList/MdFileList';
import type { MdFileListProps } from '../packages/react/src/fileList/MdFileList';
import type { StoryFn } from '@storybook/react';

const markdownString =
  // eslint-disable-next-line quotes
  "A component for listing files, whith buttons for delete and download.<br/><br/>`import { MdFileList } from '@miljodirektoratet/md-react'`";

export default {
  title: 'Components/FileList',
  component: MdFileList,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Markdown>{markdownString}</Markdown>
            <Primary />
            <ArgTypes of={PRIMARY_STORY} />
            <Stories />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
    },
  },
  argTypes: {
    files: {
      type: { name: 'array' },
      description: 'An array of files. The files can be of type `File` or an object on this form:',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: '[{ name: string, id?: string | number, url?: string, size?: number, type?: string }, ...]',
        },
      },
    },
    hideDownload: {
      type: { name: 'boolean' },
      description:
        'Determines if files in list can be downloaded or not. If `false` only files with a url are downloadable.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    allowDelete: {
      type: { name: 'boolean' },
      description:
        'Determines if files can be removed from list. If `true`, remove button is displayed on each file. Requires an onRemoveFile function',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    allowEdit: {
      type: { name: 'boolean' },
      description:
        'Determines if files can be edited from list. If `true`, edit button is displayed on each file. Requires an onEditFile function',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    hideIcons: {
      type: { name: 'boolean' },
      description: 'Hide document icon.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    onRemoveFile: {
      type: { name: 'function' },
      description:
        'The callback function for handling file removal. Returns the file-object, to be handled as you see fit. Example use in your component: `onRemoveFile={(file) => removeFile(file)}`',
      action: 'Remove',
    },
    onDownloadFile: {
      type: { name: 'function' },
      description:
        'The callback function for handling file download. Returns the file-object, to be handled as you see fit. Example use in your component: `onDownloadFile={(file) => handleDownload(file)}`',
      action: 'Download',
    },
    onEditFile: {
      type: { name: 'function' },
      description:
        'The callback function for handling file edit. Returns the file-object, to be handled as you see fit. Example use in your component: `onEditFile={(file) => handleEdit(file)}`',
      action: 'Edit',
    },
  },
};

const Template: StoryFn<typeof MdFileList> = (args: MdFileListProps) => {
  return <MdFileList {...args} />;
};

export const FileList = Template.bind({});
FileList.args = {
  files: [
    { name: 'This_is_a_PDF.pdf', id: 'file1', url: 'url.to.file', size: 1234, type: 'application/pdf' },
    { name: 'How to use storybook.docx', id: 'file2', url: 'url.to.file', size: 23, type: 'application/msword' },
    { name: 'A file without url', id: 'file3', size: 2322211, type: 'application/msword' },
  ],
  hideDownload: false,
  allowDelete: false,
  allowEdit: true,
  hideIcons: false,
};
