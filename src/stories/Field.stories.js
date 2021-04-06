import React from 'react';
import { createMatrix } from '../matrix';
import { Field } from './Field';

export default {
  title: 'Example/Field',
  component: Field
};

const Template = args => <Field {...args} />;

export const PrimaryField = Template.bind({});
PrimaryField.args = {
  matrix: createMatrix()
};
