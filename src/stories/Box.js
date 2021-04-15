import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import { EMPTY_FIELD, FOOD_FIELD } from '../matrix';

// компонент отрисовки возможных вариантов поля (еда, змейка etc)
export const Box = ({ status, maxHead }) => {
  function getClassName(status) {
    if (status === FOOD_FIELD) {
      return 'food';
    }
    if (status === EMPTY_FIELD) {
      return 'empty';
    }
    if (status === maxHead) {
      return 'head';
    }
    if (status > EMPTY_FIELD && status < maxHead) {
      return 'body';
    }
  }
  return <div className={'box ' + getClassName(status)}> </div>;
};

Box.propTypes = {
  status: PropTypes.number
};

Box.defaultProps = {
  status: EMPTY_FIELD
};
