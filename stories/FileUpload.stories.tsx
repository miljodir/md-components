import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/formElements/fileupload/README.md';
import { MdFileUpload } from '../packages/react/src/formElements/MdFileUpload';
import type { Args } from '@storybook/react-webpack5';

export default {
  title: 'Form/FileUpload',
  component: MdFileUpload,
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
          "A component for handling file upload with drag and drop. Returns an array of files, to do with as you please.<br/><br/>`import { MdFileUpload } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    useFormData: {
      type: { name: 'boolean' },
      description: 'Return `FormData` or an array of files.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    hideFileListIcons: {
      type: { name: 'boolean' },
      description: 'Hide document icons in file list',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    uploadButtonText: {
      type: { name: 'string' },
      description: 'Text for upload button.',
      table: {
        defaultValue: { summary: 'Last opp' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    cancelButtonText: {
      type: { name: 'string' },
      description: 'Text for cancel button.',
      table: {
        defaultValue: { summary: 'Avbryt' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    uploadTexts: {
      type: { name: 'array' },
      description:
        'Texts for upload area. Default depends on value of `imagesOnly`. Can be used to give user extra information about the upload, or change the language of the upload text.',
      table: {
        defaultValue: { summary: '["Dropp en fil her eller", "velg fra denne maskinen"]' },
        type: {
          summary: 'array',
        },
      },
    },
    multiple: {
      type: { name: 'boolean' },
      description: 'Allow multiple files',
      table: {
        defaultValue: { summary: 'true' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    imagesOnly: {
      type: { name: 'boolean' },
      description: 'Allow only images to be uploaded',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    automaticTrigger: {
      type: { name: 'boolean' },
      description:
        'Automatically trigger the onUpload callback whenever the filelist changes. Will not trigger when filelist becomes empty.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    hideButtons: {
      type: { name: 'boolean' },
      description: 'Hide upload and cancel buttons. Useful when automaticTrigger is set to true.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    onUpload: {
      type: { name: 'function' },
      description:
        'The callback for handling files for upload. This function returns an array of files, or a `FormData`-object if `useFormData = true`. Example use in your component: `onUpload={(files) => handleUpload(files)}`',
      action: 'Upload',
    },
    onCancel: {
      type: { name: 'function' },
      description: 'The callback for canceling upload. Clear selected files, and returns the ClickEvent from button',
      table: {
        type: {
          summary: 'function',
        },
      },
      action: 'Cancel',
    },
  },
};

const Template = (args: Args) => {
  return <MdFileUpload {...args} />;
};

export const FileUpload = Template.bind({});
FileUpload.args = {
  useFormData: false,
  uploadButtonText: 'Last opp',
  cancelButtonText: 'Avbryt',
  hideFileListIcons: false,
  multiple: true,
  imagesOnly: false,
  automaticTrigger: false,
  hideButtons: false,
};
