import React from 'react';
import './../packages/css/src/index.css';
import './../assets/fonts.css';
import './../assets/preview.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    grid: {
      disable: true,
    }
  },
  options: {
    storySort: {
      order: ['Introduction', ['Getting started', 'Contribute'], 'Components', 'Messages', 'Chips', 'Form', 'Icons'],
    }
  }
};

export const decorators = [
  (Story) => (
    <div className="preview-wrapper">
      <Story />
    </div>
  ),
];
