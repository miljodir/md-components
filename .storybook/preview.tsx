import React from 'react';
import {
  Title, Subtitle, Description, Primary, Controls, Stories,
} from '@storybook/addon-docs/blocks';
import './../packages/css/src/index.css';
import './../assets/fonts.css';
import './../assets/preview.css';

function CustomDocsPage() {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <Stories />
    </>
  );
}

export const parameters = {
  controls: {
    expanded: true,
    disableSaveFromUI: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    grid: {
      disable: true,
    },
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        ['Getting started', 'Contribute'],
        'Components',
        'Messages',
        'Chips',
        'Form',
        'Icons',
        'Deprecated',
      ],
    },
  },
  docs: {
    page: CustomDocsPage,
  },
};

export const decorators = [
  (Story: React.FC) => {
    return (
      <div className="preview-wrapper">
        <Story />
      </div>
    );
  },
];

export const tags = ['autodocs'];