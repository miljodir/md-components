import {
  Title,
  Subtitle,
  Markdown,
  Description,
  Controls,
  Primary as PrimaryStory,
} from '@storybook/addon-docs/blocks';
import React, { useState } from 'react';
import { action } from 'storybook/actions';
import Readme from '../packages/css/src/pagination/README.md';
import { MdPagination } from '../packages/react/src/pagination/MdPagination';

export default {
  title: 'Components/Pagination',
  component: MdPagination,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <PrimaryStory />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A pagination component for navigating between pages.<br/><br/>`import { MdPagination } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    totalPages: {
      description: 'Total number of pages',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number', min: 1 },
    },
    currentPage: {
      description: 'Current active page (1-indexed)',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number', min: 1 },
    },
    labels: {
      description: 'Custom labels for previous/next buttons',
      table: {
        type: {
          summary: '{ previous?: string; next?: string }',
        },
      },
      control: { type: 'object' },
    },
    compact: {
      description: 'Force compact mode (icons only for nav buttons)',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    asChild: {
      description: 'Enable asChild pattern for custom link rendering',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    onPageChange: {
      description: 'Callback when page changes',
      table: {
        type: {
          summary: '(page: number) => void',
        },
      },
    },
  },
};

interface PaginationArgs {
  totalPages: number;
  currentPage: number;
  labels?: {
    previous?: string;
    next?: string;
  };
  compact?: boolean;
}

const Template = (args: PaginationArgs) => {
  const [page, setPage] = useState(args.currentPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    action('onPageChange')(newPage);
  };

  return (
    <MdPagination
      totalPages={args.totalPages}
      currentPage={page}
      onPageChange={handlePageChange}
      labels={args.labels}
      compact={args.compact}
    />
  );
};

const AsChildTemplate = () => {
  const [searchParams, setSearchParams] = useState('?page=2');
  const currentPage = Number(new URLSearchParams(searchParams).get('page')) || 1;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    return `?${params.toString()}`;
  };

  return (
    <div>
      <p style={{ marginBottom: '1rem', fontFamily: 'monospace' }}>URL: {searchParams || '?'}</p>
      <MdPagination
        totalPages={10}
        currentPage={currentPage}
        asChild
        renderLink={(targetPage, children) => {
          const href = createPageUrl(targetPage);
          return (
            <a
              href={href}
              onClick={e => {
                e.preventDefault();
                setSearchParams(href);
                action('navigated to')(href);
              }}
            >
              {children}
            </a>
          );
        }}
      />
    </div>
  );
};

export const Default = Template.bind({}) as typeof Template & { args: PaginationArgs };
Default.args = {
  totalPages: 10,
  currentPage: 1,
  compact: false,
};

export const AsChild = AsChildTemplate.bind({});
