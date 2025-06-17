import { Title, Subtitle, Description, Controls, Primary, Markdown } from '@storybook/addon-docs';
import React, { useEffect } from 'react';
import Readme from '../packages/css/src/skipToMainContent/README.md';
import { MdSkipToMainContent } from '../packages/react/src';
import type { Args } from '@storybook/react';

export default {
  title: 'Components/SkipToMainContent',
  component: MdSkipToMainContent,
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
          "A component for skip to main content.<br/>To be used as the first focusable element on a page, so users can skip to the main content of the page. Should only be used as the very first element on a page.<br/><br/>`import { MdSkipToMainContent } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    children: {
      type: { name: 'ReactNode | string' },
      description: 'The text to display in the skip to content link.',
      table: {
        defaultValue: { summary: 'Hopp til hovedinnhold' },
        type: {
          summary: 'ReactNode | string',
        },
      },
      control: { type: 'text' },
    },
  },
};

const Template = (args: Args) => {
  useEffect(() => {
    const skipToMainContent = document.getElementById('skip-to-main-content');
    if (skipToMainContent) {
      skipToMainContent.focus();
    }
  }, []);

  return (
    <>
      <MdSkipToMainContent href={args.href} id="skip-to-main-content">
        {args.children}
      </MdSkipToMainContent>
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'center',
          backgroundColor: 'var(--mdPrimaryColor20)',
          padding: '1rem',
          fontFamily: 'Open Sans, sans-serif',
        }}
      >
        <a href="#main-content">
          <img src="/assets/logo-primary.svg" height="46px" alt="Logo" />
        </a>
        <div>Press &quot;tab&quot; to shift focus from the skip-to-main-content link</div>
      </div>
    </>
  );
};

export const SkipToMainContent = Template.bind({});

SkipToMainContent.args = {
  href: '#content',
  children: 'Hopp til hovedinnhold (jeg har nå fokus)',
};
