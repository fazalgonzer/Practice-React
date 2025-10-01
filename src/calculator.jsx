import React, { useState } from 'react';

function Calculator() {
  // State to store the current number being typed
  const [input, setInput] = useState('');
  // State to store the result of the calculation
  const [result, setResult] = useState('');

  const [ii, setIi] = useState(0);

  // Array for the calculator buttons
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', // Clear button
  ];

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === 'C') {
      // Clear all state
      setInput('');
      setResult('');
      setIi(2)
    } else if (value === '=') {
      try {
        // Use the built-in JavaScript 'eval' function for calculation.
        // NOTE: In a professional app, you'd use a safer math library.
        // We use String() to convert the result back to a string for display.
        setResult(String(eval(input) || 'Error'));
        setInput(''); // Clear input after calculation
      } catch (error) {
        setResult('Error');
        setInput('');
      }
    } else {
      // Append the clicked button value to the input string
      setInput(prevInput => prevInput + value);
    }
  };

  return (
    <div className="calculator-app">
      <h1>Simple Calculator</h1>
      <div className="calculator-container">
        {/* Display area: shows current input or the result */}
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>

        {/* Button Grid */}
        <div className="buttons-grid">
          {buttons.map((button) => (
            <button
              // Key is required when mapping a list of elements
              key={button}
              // Conditional styling for the '=' and 'C' buttons
              className={`button ${button === '=' ? 'equals' : ''} ${button === 'C' ? 'clear' : ''}`}
              // Attach the event handler
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;

// Basic CSS for visualization (you would put this in a CSS file)
