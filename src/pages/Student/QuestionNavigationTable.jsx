import React from "react";


const QuestionNavigationTable = ({
  totalQuestions,
  currentQuestionIndex,
  handleQuestionNavigation,
}) => {
  const questionNumbers = Array.from(
    { length: totalQuestions },
    (_, index) => index + 1
  );
  return (
    <>
      <div className="question-navigation-table">
        <h4>Questions:</h4>
        <ul className="question-number-list">
          {questionNumbers.map((number) => (
            <li
              key={number}
              className={currentQuestionIndex === number - 1 ? "active" : ""}
              onClick={() => handleQuestionNavigation(number - 1)}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuestionNavigationTable;
