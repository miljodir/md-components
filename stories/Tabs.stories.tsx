import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs/blocks';
import React from 'react';
import Readme from '../packages/css/src/tabs/README.md';
import { MdIconCheck } from '../packages/react/src/icons-material/MdIconCheck';
import { MdIconHome } from '../packages/react/src/icons-material/MdIconHome';
import { MdIconInfo } from '../packages/react/src/icons-material/MdIconInfo';
import { MdBadge } from '../packages/react/src/badge/MdBadge';
import { MdTab } from '../packages/react/src/tabs/MdTab';
import { MdTabs } from '../packages/react/src/tabs/MdTabs';
import type { Args, StoryFn } from '@storybook/react-webpack5';
import MdIconWarning from '../packages/react/src/icons-material/MdIconWarning';

export default {
  title: 'Components/Tabs',
  component: MdTabs,
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
        // eslint-disable-next-line quotes
        component: "A component for tabs.<br/><br/>`import { MdTabs, MdTab } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    children: {
      description: 'Tabs content',
      table: {
        type: {
          summary: 'MdTab-components',
        },
      },
    },
    disabledTabs: {
      type: { name: 'string[]' },
      description: 'Disable one or more child tabs.',
      table: {
        defaultValue: { summary: '[]' },
        type: {
          summary: 'string[]',
        },
      },
      options: ['Tab 1', 'Tab 2', 'Tab 3'],
      control: { type: 'check' },
    },
    initialTab: {
      type: { name: 'number' },
      description:
        'Sets the index of the tab to be shown initially. Defaults to the first tab. This example sets Tab 1 as initial.',
      table: {
        defaultValue: { summary: '0' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    chips: {
      type: { name: 'boolean' },
      description: 'Use chips instead of buttons for the tab titles.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    chipsPrefixIcon: {
      type: { name: 'ReactNode' },
      description:
        'Prefix icon to apply before chip label if active. Will render a 16px x 16px container with icon passed.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: { type: 'boolean' },
    },
    compact: {
      type: { name: 'boolean' },
      description: 'Use compact mode for the tabs.',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  },
};

const panelContent = (heading: string, description: string) => {
  return (
    <>
      <div style={{ fontSize: '20px', marginBottom: '.5em' }}>{heading}</div>
      <div>{description}</div>
    </>
  );
};

const defaultArgs = {
  disabledTabs: [],
  initialTab: 0,
  chips: false,
  chipsPrefixIcon: false,
  compact: false,
};

export const MixedVariants: StoryFn<Args> = (args: Args) => {
  return (
    <MdTabs
      initialTab={args.initialTab}
      chips={args.chips}
      chipsPrefixIcon={args.chipsPrefixIcon ? <MdIconCheck /> : null}
      compact={args.compact}
    >
      <MdTab title="Text only" disabled={args.disabledTabs?.includes('Tab 1')}>
        {panelContent('Text only', 'This tab uses a plain text label without an icon or badge.')}
      </MdTab>
      <MdTab
        title="With icon"
        disabled={args.disabledTabs?.includes('Tab 2')}
        leftIcon={<MdIconHome aria-hidden="true" width="20" height="20" />}
      >
        {panelContent('Icon and text', 'This tab combines a left icon with a text label.')}
      </MdTab>
      <MdTab
        title="With badge"
        disabled={args.disabledTabs?.includes('Tab 3')}
        badge={<MdBadge count={3} size="small" theme="info" />}
      >
        {panelContent('Badge', 'This tab combines a text label with a badge on the right.')}
      </MdTab>
      <MdTab
        title="Only icon"
        iconOnly
        disabled={args.disabledTabs?.includes('Tab 4')}
        leftIcon={<MdIconInfo aria-hidden="true" width="20" height="20" />}
      >
        {panelContent(
          'Icon only',
          'This tab is only icon. Use a meaningful title for screen readers when displaying icons only.',
        )}
      </MdTab>
    </MdTabs>
  );
};
MixedVariants.args = defaultArgs;

export const PlainText: StoryFn<Args> = (args: Args) => {
  return (
    <MdTabs
      initialTab={args.initialTab}
      chips={args.chips}
      chipsPrefixIcon={args.chipsPrefixIcon ? <MdIconCheck /> : null}
      compact={args.compact}
    >
      <MdTab title="Tab 1" disabled={args.disabledTabs?.includes('Tab 1')}>
        {panelContent('Plain text', 'This tab contains only a text label.')}
      </MdTab>
      <MdTab title="Tab 2" disabled={args.disabledTabs?.includes('Tab 2')}>
        {panelContent('Plain text', 'This tab also contains only a text label.')}
      </MdTab>
      <MdTab title="Tab 3" disabled={args.disabledTabs?.includes('Tab 3')}>
        {panelContent('Plain text', 'Use this variant for simple text-based navigation.')}
      </MdTab>
    </MdTabs>
  );
};
PlainText.args = defaultArgs;

export const IconsAndText: StoryFn<Args> = (args: Args) => {
  return (
    <MdTabs
      initialTab={args.initialTab}
      chips={args.chips}
      chipsPrefixIcon={args.chipsPrefixIcon ? <MdIconCheck /> : null}
      compact={args.compact}
    >
      <MdTab
        title="Tab 1"
        disabled={args.disabledTabs?.includes('Tab 1')}
        leftIcon={<MdIconHome aria-hidden="true" width="20" height="20" />}
      >
        {panelContent('Icon and text', 'This tab combines a left icon with a text label.')}
      </MdTab>
      <MdTab
        title="Tab 2"
        disabled={args.disabledTabs?.includes('Tab 2')}
        leftIcon={<MdIconInfo aria-hidden="true" width="20" height="20" />}
      >
        {panelContent('Icon and text', 'Icons help users identify the tab at a glance.')}
      </MdTab>
      <MdTab
        title="Tab 3"
        disabled={args.disabledTabs?.includes('Tab 3')}
        leftIcon={<MdIconWarning aria-hidden="true" width="20" height="20" />}
      >
        {panelContent('Icon and text', 'The text remains available alongside the icon.')}
      </MdTab>
    </MdTabs>
  );
};
IconsAndText.args = defaultArgs;

export const IconsOnly: StoryFn<Args> = (args: Args) => {
  return (
    <MdTabs
      initialTab={args.initialTab}
      chips={args.chips}
      chipsPrefixIcon={args.chipsPrefixIcon ? <MdIconCheck /> : null}
      compact={args.compact}
    >
      <MdTab
        title="Tab 1"
        iconOnly
        disabled={args.disabledTabs?.includes('Tab 1')}
        leftIcon={<MdIconHome aria-hidden="true" width="20" height="20" />}
      >
        {panelContent('Icon only', 'The visible label is hidden, but the accessible name remains available.')}
      </MdTab>
      <MdTab
        title="Tab 2"
        iconOnly
        disabled={args.disabledTabs?.includes('Tab 2')}
        leftIcon={<MdIconInfo aria-hidden="true" width="20" height="20" />}
      >
        {panelContent('Icon only', 'Use a meaningful title for screen readers when displaying icons only.')}
      </MdTab>
      <MdTab
        title="Tab 3"
        iconOnly
        disabled={args.disabledTabs?.includes('Tab 3')}
        leftIcon={<MdIconWarning aria-hidden="true" width="20" height="20" />}
      >
        {panelContent('Icon only', 'Icon-only tabs work best with familiar, distinct icons.')}
      </MdTab>
    </MdTabs>
  );
};
IconsOnly.args = defaultArgs;

export const Badges: StoryFn<Args> = (args: Args) => {
  return (
    <MdTabs
      initialTab={args.initialTab}
      chips={args.chips}
      chipsPrefixIcon={args.chipsPrefixIcon ? <MdIconCheck /> : null}
      compact={args.compact}
    >
      <MdTab
        title="Tab 1"
        disabled={args.disabledTabs?.includes('Tab 1')}
        badge={<MdBadge count={3} size="small" theme="info" />}
      >
        {panelContent('Badge', 'A badge can communicate a count or status to the right of the label.')}
      </MdTab>
      <MdTab
        title="Tab 2"
        disabled={args.disabledTabs?.includes('Tab 2')}
        badge={<MdBadge count={12} size="small" theme="success" />}
      >
        {panelContent('Badge', 'Badges are used together with a text label.')}
      </MdTab>
      <MdTab
        title="Tab 3"
        disabled={args.disabledTabs?.includes('Tab 3')}
        badge={<MdBadge count={0} size="small" theme="warning" />}
      >
        {panelContent('Badge', 'A badge is placed on the right side of the tab text.')}
      </MdTab>
    </MdTabs>
  );
};
Badges.args = defaultArgs;
