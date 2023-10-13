import React, { useState } from 'react';
import './calculator.css';


const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter an expression"
      />
      <button onClick={handleCalculate}>=</button>
      <button onClick={handleClear}>Clear</button>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
