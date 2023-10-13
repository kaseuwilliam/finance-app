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

<section className="card">
<label htmlFor="expression">Enter an expression:</label>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter an expression"
      />
      <div className="button-container">
      <button onClick={handleCalculate}>=</button>
      <button onClick={handleClear}>Clear</button>
      </div>
      <div className="result">Answer: {result}</div>

  </section>
    </div>
  );
};

export default Calculator;
