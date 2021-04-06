import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import { BODY_FIELD, EMPTY_FIELD, FOOD_FIELD, HEAD_FIELD } from '../matrix';

export const Box = ({ status }) => {
  function getClassName(status) {
    switch (status) {
      case EMPTY_FIELD:
        return 'empty';
      case HEAD_FIELD:
        return 'head';
      case BODY_FIELD:
        return 'body';
      case FOOD_FIELD:
        return 'food';
    }
  }
  return <div className={'box ' + getClassName(status)}> </div>;
};

Box.propTypes = {
  status: PropTypes.oneOf([EMPTY_FIELD, HEAD_FIELD, BODY_FIELD, FOOD_FIELD])
};

Box.defaultProps = {
  status: EMPTY_FIELD
};
