import { Box } from './Box';
import React from 'react';
import { BODY_FIELD, EMPTY_FIELD, FOOD_FIELD, HEAD_FIELD } from '../matrix';

export default {
  title: 'Example/Box',
  component: Box
};

const Template = args => <Box {...args} />;

export const Field_Box = Template.bind({});
Field_Box.args = {
  status: EMPTY_FIELD
};

export const Head_Box = Template.bind({});
Head_Box.args = {
  status: HEAD_FIELD
};

export const Body_Box = Template.bind({});
Body_Box.args = {
  status: BODY_FIELD
};

export const Food_Box = Template.bind({});
Food_Box.args = {
  status: FOOD_FIELD
};
