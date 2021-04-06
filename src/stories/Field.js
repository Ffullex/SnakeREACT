import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import { BODY_FIELD, EMPTY_FIELD, FOOD_FIELD, HEAD_FIELD } from '../matrix';
import { Box } from './Box.js';
import './Field.css';

export const Field = ({ matrix }) => {
  return (
    <div className="matrix">
      {matrix.map(row => (
        // eslint-disable-next-line react/jsx-key
        <div className="row">
          {row.map(item => (
            // eslint-disable-next-line react/jsx-key
            <Box status={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

Field.propTypes = {
  status: PropTypes.oneOf([EMPTY_FIELD, HEAD_FIELD, BODY_FIELD, FOOD_FIELD])
};

Field.defaultProps = {
  status: EMPTY_FIELD
};
