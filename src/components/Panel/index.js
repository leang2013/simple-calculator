import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Display from '../Display';
import styles from './Panel.module.css';

const Panel = ({ value, handleValue, operation }) => (
  <>
    <Display value={value} operation={operation} />
    <div className={styles.row}>
      <Button value="AC" title="clear" action={handleValue} />
      <Button value="+/-" title="negative" action={handleValue} />
      <Button value="%" title="percent" action={handleValue} />
      <Button value="÷" title="divide" action={handleValue} />
    </div>
    <div className={styles.row}>
      <Button value="7" title="seven" action={handleValue} />
      <Button value="8" title="eight" action={handleValue} />
      <Button value="9" title="nine" action={handleValue} />
      <Button value="x" title="multiple" action={handleValue} />
    </div>
    <div className={styles.row}>
      <Button value="4" title="four" action={handleValue} />
      <Button value="5" title="five" action={handleValue} />
      <Button value="6" title="six" action={handleValue} />
      <Button value="-" title="minus" action={handleValue} />
    </div>
    <div className={styles.row}>
      <Button value="1" title="one" action={handleValue} />
      <Button value="2" title="two" action={handleValue} />
      <Button value="3" title="three" action={handleValue} />
      <Button value="+" title="plus" action={handleValue} />
    </div>
    <div className={styles.row}>
      <Button value="0" title="zero" action={handleValue} />
      <Button value="." title="dot" action={handleValue} />
      <Button value="=" title="equal" action={handleValue} />
    </div>
  </>
);

Panel.propTypes = {
  handleValue: PropTypes.func,
  value: PropTypes.string,
  operation: PropTypes.string,
};

Panel.defaultProps = {
  handleValue: '0',
  value: '0',
  operation: '',
};

export default Panel;
