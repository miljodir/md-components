import { Title, Subtitle, Description, Controls, Markdown, Primary } from '@storybook/addon-docs';
import React from 'react';
import Readme from '../packages/css/src/icons/README.md';
import MdIcon from '../packages/react/src/icons/MdIcon';
import type { Args, StoryFn } from '@storybook/react';

/**
 * Miljødirektoratet uses Material Icons as primary source for icons.
 *
 * See [Material Symbols Library](https://fonts.google.com/icons?icon.style=Sharp) for all possible icons. Use the icon name as `icon`-prop. Click on the icon to see the name in the bottom of the sidebar.
 *
 * The size of the icon is controlled by either using the `size`-prop, setting font-size on the parent element or directly on the icon (with style-tag or using a custom class).
 * The `size`-prop is set in rems, and will override the other options.
 *
 * `import { MdIcon } from '@miljodirektoratet/md-react'`
 */

export default {
  title: 'Components/Icons',
  component: MdIcon,
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
    },
  },
  argTypes: {
    icon: {
      type: { name: 'string', required: true },
      description: 'The icon name, from Material Sybols.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    className: {
      type: { name: 'string' },
      description: 'Custom class name appended to the icon.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    size: {
      type: { name: 'string' },
      description: 'Set icon size in rems.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
  },
};

const Template: StoryFn<typeof MdIcon> = (args: Args) => {
  return <MdIcon icon={args.icon} {...args} />;
};

const ExamplesTemplate: StoryFn<typeof MdIcon> = (args: Args) => {
  const icons = [
    'menu',
    'calendar_month',
    'calendar_today',
    'cancel',
    'check_circle',
    'check',
    'chevron_right',
    'close',
    'comment',
    'check_box',
    'delete',
    'docs',
    'document_search',
    'download',
    'edit',
    'account_circle',
    'pin_drop',
    'bar_chart_4_bars',
    'info',
    'search',
  ];
  return (
    <div
      style={{
        display: 'grid',
        gap: '1.5rem',
        gridTemplateColumns: 'repeat(auto-fit, 16rem)',
        fontFamily: 'SofiaPro-Regular, sans-serif',
        backgroundColor: '#e5eeee',
        padding: '1.5rem',
        borderRadius: '0.5rem',
      }}
    >
      {icons.map(icon => {
        return (
          <div
            key={`icon_${icon}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'center',
            }}
          >
            <MdIcon icon={icon} size={args.size} />
            <div style={{ fontSize: '0.8rem' }}>{`<MdIcon icon='${icon}' />`}</div>
          </div>
        );
      })}
    </div>
  );
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'account_circle',
  className: '',
  size: '1.5',
};

export const Examples = ExamplesTemplate.bind({});
Examples.args = {
  size: '2',
};
