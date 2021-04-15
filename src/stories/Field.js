import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import { EMPTY_FIELD, searchHead } from '../matrix';
import { Box } from './Box.js';
import './Field.css';

// компонент отрисовки поля
export const Field = ({ matrix }) => {
  const { maxHead } = searchHead(matrix);
  return (
    <div className="matrix">
      {matrix.map(row => (
        // eslint-disable-next-line react/jsx-key
        <div className="row">
          {row.map(item => (
            // eslint-disable-next-line react/jsx-key
            <Box status={item} maxHead={maxHead} />
          ))}
        </div>
      ))}
    </div>
  );
};

Field.propTypes = {
  status: PropTypes.number
};

Field.defaultProps = {
  status: EMPTY_FIELD
};
