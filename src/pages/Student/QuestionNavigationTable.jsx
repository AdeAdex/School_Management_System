import React from "react";

const QuestionNavigationTable = ({
  totalQuestions,
  currentQuestionIndex,
  handleQuestionNavigation,
  answeredQuestions,
}) => {
  const questionNumbers = Array.from(
    { length: totalQuestions },
    (_, index) => index + 1
  );
  return (
    <>
      <div className="question-navigation-table">
        <h4 className="question-h4">Questions:</h4>
        <ul className="question-number-list">
          {Array.from({ length: totalQuestions }, (_, index) => (
            <li
              key={index}
              onClick={() => handleQuestionNavigation(index)}
              className="question-number-item d-flex justify-content-center"
            >
              <span
                className={`question-number ${
                  answeredQuestions.includes(index + 1) &&
                  window.innerWidth <= 768
                    ? "green"
                    : ""
                }`}
              >
                {index + 1}
              </span>
              {answeredQuestions.includes(index + 1) &&
                window.innerWidth > 768 && (
                  <span
                    className="tick-mark answered"
                    style={{ position: "absolute", right: 40 }}
                  >
                    &#10004;
                  </span>
                )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuestionNavigationTable;
