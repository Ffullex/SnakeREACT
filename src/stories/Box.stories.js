import { Box } from './Box';
import React from 'react';
import { EMPTYFIELD } from '../matrix';

export default {
  title: 'Example/Box',
  component: Box
};

const Template = args => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: EMPTYFIELD,
  label: 'div'
};
