import React from 'react';
import { EMPTYFIELD } from '../matrix';
import { Field } from './Field';

export default {
  title: 'Example/Field',
  component: Field
};

const Template = args => <Field {...args} />;

export const PrimaryField = Template.bind({});
PrimaryField.args = {
  status: EMPTYFIELD
};
