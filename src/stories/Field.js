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
      {matrix.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((item, itemIndex) => (
            <Box status={item} maxHead={maxHead} key={itemIndex} />
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
