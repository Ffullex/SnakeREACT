import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Основной компонент пользовательского интерфейса для взаимодействия с пользователем
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Это главный призыв к действию на странице?
   */
  primary: PropTypes.bool,
  /**
   * Какой цвет фона использовать
   */
  backgroundColor: PropTypes.string,
  /**
   * Насколько большой должна быть кнопка?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Содержание кнопки
   */
  label: PropTypes.string.isRequired,
  /**
   * Необязательный обработчик кликов
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};
