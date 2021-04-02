import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import { BODYFIELD, EMPTYFIELD, FIELDSIZE, FOODFIELD, HEADFIELD } from '../matrix';
import { Box } from './Box.js';

export const Field = () => {
  function getField(status) {
    const field = [];
    for (let i = 0; i < FIELDSIZE; i++) {
      if (field[i] === undefined) {
        field[i] = [];
      }
      for (let j = 0; j < FIELDSIZE; j++) {
        field[i][j] = Box(status);
      }
    }
    return field;
  }
  return <div className="matrix"> {getField()} </div>;
};

Field.propTypes = {
  status: PropTypes.oneOf([EMPTYFIELD, HEADFIELD, BODYFIELD, FOODFIELD])
};

Field.defaultProps = {
  status: EMPTYFIELD
};
