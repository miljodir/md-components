import { Title, Subtitle, Description, Controls, Primary, Markdown } from '@storybook/addon-docs';
import { useEffect } from 'react';
import Readme from '../packages/css/src/skipToContent/README.md';
import { MdSkipToContent } from '../packages/react/src';
import type { Args } from '@storybook/react';

export default {
  title: 'Components/SkipToContent',
  component: MdSkipToContent,
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
          "A component for skip to content.<br/>To be used as the first focusable element on a page, so users can skip to the main content. Should only be used as the very first element on a page.<br/><br/>`import { MdSkipToContent } from '@miljodirektoratet/md-react'`",
      },
    },
  },
};

const Template = (args: Args) => {
  useEffect(() => {
    const skipToContent = document.getElementById('skip-to-content');
    if (skipToContent) {
      skipToContent.focus();
    }
  }, []);

  return (
    <>
      <MdSkipToContent href={args.href} id="skip-to-content">
        {args.children}
      </MdSkipToContent>
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
        <a href="#">
          <img src="/assets/logo-primary.svg" height="46px" alt="Logo" />
        </a>
        <div>Press "tab" to shift focus from the skip-to-content link</div>
      </div>
    </>
  );
};

export const SkipToContent = Template.bind({});

SkipToContent.args = {
  href: '#content',
  children: 'Hopp til innhold (jeg har nå fokus)',
};
