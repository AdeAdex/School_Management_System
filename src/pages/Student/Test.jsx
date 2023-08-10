import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    let endpoint = "http://localhost:2000/staff_account/questions";

    axios.get(endpoint).then((response) => {
      setQuestions(response.data);
    });
  }, []);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setShowCorrectAnswer(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowCorrectAnswer(true);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div>
        {currentQuestion && (
          <>
            <h1>Question {currentQuestion.id}</h1>
            <p>{currentQuestion.content}</p>
            <ul>
              {currentQuestion.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    backgroundColor:
                      showCorrectAnswer &&
                      option.startsWith(currentQuestion.correctOption)
                        ? "green"
                        : option === selectedOption
                        ? "red"
                        : "white",
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
            {showCorrectAnswer && (
              <p>
                Correct Answer:{" "}
                {currentQuestion.options.find((opt) =>
                  opt.startsWith(currentQuestion.correctOption)
                )}
              </p>
            )}
            <button onClick={handleNextClick}>Next</button>
          </>
        )}
      </div>
    </>
  );
};

export default Test;
