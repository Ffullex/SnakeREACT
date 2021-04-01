import { Box } from './Box';
import React from 'react';
import { BODYFIELD, EMPTYFIELD, FOODFIELD, HEADFIELD } from '../matrix';

export default {
  title: 'Example/Box',
  component: Box
};

const Template = args => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: EMPTYFIELD
};

export const Secondary = Template.bind({});
Secondary.args = {
  status: HEADFIELD
};

export const Third = Template.bind({});
Third.args = {
  status: BODYFIELD
};

export const Fourth = Template.bind({});
Fourth.args = {
  status: FOODFIELD
};
