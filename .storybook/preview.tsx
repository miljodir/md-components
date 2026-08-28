import React, { useContext } from 'react';
import {
  DocsContext, Title, Subtitle, Markdown, Primary, Controls, Stories,
} from '@storybook/addon-docs/blocks';
import './../packages/css/src/index.css';
import './../assets/fonts.css';
import './../assets/preview.css';

const docsContext = require.context('../stories', true, /docs\/.*\.md$/);
const docsFiles: Record<string, string> = {};
docsContext.keys().forEach((key) => {
  docsFiles[key] = docsContext(key) as unknown as string;
});

function CustomDocsPage() {
  const { title } = useContext(DocsContext);
  const componentName = title.split('/').pop();
  const match = Object.entries(docsFiles).find(([path]) =>
    {return path.includes(`/${componentName}/docs/`)}
  );

  return (
    <>
      <Title />
      <Subtitle />
      {match && <Markdown>{match[1]}</Markdown>}
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