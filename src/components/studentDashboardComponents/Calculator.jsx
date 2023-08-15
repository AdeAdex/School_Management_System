import React from 'react'
import '../studentDashboardComponents/Calculator.css'

const Calculator = () => {
        const [input, setInput] = useState('');
  
  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };
  return (
    <>
    <div className="App">
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <button onClick={() => handleButtonPress('1')}>1</button>
          <button onClick={() => handleButtonPress('2')}>2</button>
          <button onClick={() => handleButtonPress('3')}>3</button>
          <button onClick={() => handleButtonPress('+')}>+</button>
          <button onClick={() => handleButtonPress('4')}>4</button>
          <button onClick={() => handleButtonPress('5')}>5</button>
          <button onClick={() => handleButtonPress('6')}>6</button>
          <button onClick={() => handleButtonPress('-')}>-</button>
          <button onClick={() => handleButtonPress('7')}>7</button>
          <button onClick={() => handleButtonPress('8')}>8</button>
          <button onClick={() => handleButtonPress('9')}>9</button>
          <button onClick={() => handleButtonPress('*')}>*</button>
          <button onClick={() => handleButtonPress('0')}>0</button>
          <button onClick={() => handleButtonPress('.')}>.</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Calculator