import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

export const Counter = ({ bodyCount }) => {
  return <div> Количество скушцанного: {bodyCount} </div>;
};

Counter.propTypes = {
  bodyCount: PropTypes.number
};

Counter.defaultProps = {
  bodyCount: 0
};
