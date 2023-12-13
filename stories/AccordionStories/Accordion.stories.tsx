/* eslint-disable quotes */
import React, { useState } from 'react';
import MdAccordionItem from '../../packages/react/src/accordion/MdAccordionItem';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Components/Accordion',
  parameters: {
    docs: {
      description: {
        component:
          "Example use for handling accordion items.<br/><br/>`import { MdAccordionItem } from '@miljodirektoratet/md-react'`",
      },
    },
  },
};

const Template: StoryFn<typeof MdAccordionItem> = () => {
  const [expanded, setExpanded] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleExpand = (e: React.MouseEvent, item: any) => {
    setExpanded(item === expanded ? null : item);
  };

  return (
    <div>
      <MdAccordionItem
        label="Første element"
        expanded={expanded === '1'}
        onToggle={(e: React.MouseEvent) => {
          return handleExpand(e, '1');
        }}
      >
        Dette er første element i accordion
      </MdAccordionItem>

      <MdAccordionItem
        label="Andre element"
        expanded={expanded === '2'}
        onToggle={(e: React.MouseEvent) => {
          return handleExpand(e, '2');
        }}
      >
        Dette er andre element i accordion
      </MdAccordionItem>
    </div>
  );
};

export const AccordionExample = Template.bind({});
AccordionExample.parameters = {
  controls: { hideNoControlsWarning: true },
};
