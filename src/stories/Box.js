import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import { BODYFIELD, EMPTYFIELD, FOODFIELD, HEADFIELD } from '../matrix';

export const Box = ({ status }) => {
  function getClassName(status) {
    switch (status) {
      case EMPTYFIELD:
        return 'empty';
      case HEADFIELD:
        return 'head';
      case BODYFIELD:
        return 'body';
      case FOODFIELD:
        return 'food';
    }
  }
  return <div className={getClassName()}> {status} </div>;
};

Box.propTypes = {
  status: PropTypes.oneOf([EMPTYFIELD, HEADFIELD, BODYFIELD, FOODFIELD])
};

Box.defaultProps = {
  status: EMPTYFIELD
};
