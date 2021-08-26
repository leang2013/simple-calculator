import BigNumber from 'bignumber.js';

const calculation = (firstNumber, secondNumber, operation) => {
  const bigFirstNum = new BigNumber(firstNumber);
  const bigSecondNum = new BigNumber(secondNumber);
  let result;

  if (operation === '-') {
    result = BigNumber(bigFirstNum.minus(bigSecondNum));
  }
  if (operation === '+') {
    result = BigNumber(bigFirstNum.plus(bigSecondNum));
  }
  if (operation === 'x') {
    result = BigNumber(bigFirstNum.multipliedBy(bigSecondNum));
  }
  if (operation === '÷' && secondNumber !== '0') {
    result = BigNumber(bigFirstNum.dividedBy(bigSecondNum));
  } else {
    return result.toString();
  }

  return result.toString();
};

export default calculation;
