import React, { useState } from 'react';
import Panel from '../../components/Panel';
import calculation from '../../utils/calculation';
import styles from './App.module.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [nextValue, setNextValue] = useState('0');
  const [operation, setOperation] = useState(null);
  const [beforeOperation, setBeforeOperation] = useState(false);

  const handleState = (digit) => {
    if (digit === 'AC') {
      setNextValue('0');
      setOperation(null);
      setBeforeOperation(false);
    }
    if (digit === '%') {
      const value = nextValue / 100;
      setNextValue(value);
    }
    if (digit === '+/-') {
      setNextValue((parseFloat(nextValue) * (-1.0)).toString());
      setBeforeOperation(false);
    }
    if (digit === '.') {
      setNextValue((prevState) => (
        prevState.includes('.') ? prevState : prevState + digit
      ));
      setBeforeOperation(false);
    }
    if (digit === '+' || digit === '-' || digit === 'x' || digit === '÷') {
      setNextValue('0');
      setTotal(nextValue);
      setOperation(digit);
      setBeforeOperation(false);
    }
    if (digit === '=' && nextValue && total) {
      const result = calculation(total, nextValue, operation);
      setNextValue(result.toString());
      setBeforeOperation(true);
    }
    if (digit.match(/[0-9]/g)) {
      setNextValue((prevState) => (
        prevState === '0' || beforeOperation ? digit : prevState + digit
      ));
      setBeforeOperation(false);
    }
  };

  return (
    <>
      <div className={styles.title}>
        <h3>Calculator</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.calculator}>
          <Panel value={nextValue.toString()} operation={operation} handleValue={handleState} />
        </div>
      </div>
    </>
  );
};

export default App;
