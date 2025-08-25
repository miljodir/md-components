import React from 'react';
import './../packages/css/src/index.css';
import './../assets/fonts.css';
import './../assets/preview.css';

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
