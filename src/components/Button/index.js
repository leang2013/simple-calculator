import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const getClassName = (name) => {
  const operators = ['+', '-', '÷', 'x', '='];
  let result;

  if (name === '0') {
    result = styles.btnZero;
  } else if (operators.includes(name)) {
    result = styles.btnOperator;
  } else {
    result = styles.btn;
  }
  return result;
};

const Button = ({ value, title, action }) => (
  <>
    <button type="button" title={title} onClick={() => action(value)} className={getClassName(value)}>
      {value}
    </button>
  </>
);

Button.propTypes = {
  action: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
};

Button.defaultProps = {
  action: '0',
  value: '0',
  title: '',
};

export default Button;
