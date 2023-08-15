import React, { useState } from "react";
import "../studentDashboardComponents/Calculator.css";
import Modal from "react-bootstrap/Modal";

const Calculator = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = ({ isOpen, onClose }) => {
    setInput("");
  };
  return (
    <>
      <Modal show={isOpen} onHide={onClose} animation={true} backdrop={false} style={{ position: 'fixed', top: 0, right: 0 }} >
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title className="text-uppercase">Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-uppercase">
          <div className="App">
            <div className="calculator">
              <div className="display">{input}</div>
              <div className="buttons">
                <button onClick={() => handleButtonPress("1")}>1</button>
                <button onClick={() => handleButtonPress("2")}>2</button>
                <button onClick={() => handleButtonPress("3")}>3</button>
                <button onClick={() => handleButtonPress("+")}>+</button>
                <button onClick={() => handleButtonPress("4")}>4</button>
                <button onClick={() => handleButtonPress("5")}>5</button>
                <button onClick={() => handleButtonPress("6")}>6</button>
                <button onClick={() => handleButtonPress("-")}>-</button>
                <button onClick={() => handleButtonPress("7")}>7</button>
                <button onClick={() => handleButtonPress("8")}>8</button>
                <button onClick={() => handleButtonPress("9")}>9</button>
                <button onClick={() => handleButtonPress("*")}>*</button>
                <button onClick={() => handleButtonPress("0")}>0</button>
                <button onClick={() => handleButtonPress(".")}>.</button>
                <button onClick={handleClear}>C</button>
                <button onClick={handleCalculate}>=</button>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Calculator;
