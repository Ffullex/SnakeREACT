import React from 'react';
import './Counter.css';
import { Counter } from './Counter';

export default {
  title: 'Example/Counter',
  component: Counter
};

const Template = args => <Counter {...args} />;

export const Field_Box = Template.bind({});
Field_Box.args = {
  bodyCount: 20
};
