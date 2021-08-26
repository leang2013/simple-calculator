import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

const Display = ({ value, operation }) => (
  <>
    <div className={styles.operation}>
      {operation}
    </div>
    <div className={styles.display} title="display">
      {value === null ? '0' : value}
    </div>
  </>
);

Display.propTypes = {
  value: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
  operation: '',
};

export default Display;
