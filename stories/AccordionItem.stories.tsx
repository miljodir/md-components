import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MdAccordionItem from '../packages/react/src/accordion/MdAccordionItem';

export default {
  title: 'Components/AccordionItem',
  component: MdAccordionItem,
  parameters: {
    docs: {
      description: {
        component: 'A component for expand/collapse content in an accordion.',
      },
    },
  },
  argTypes: {}
} as ComponentMeta<typeof MdAccordionItem>;

const Template: ComponentStory<typeof MdAccordionItem> = (args) => {
  return (
    <MdAccordionItem
      {...args}
    />
  );
};

export const AccordionItem = Template.bind({});
