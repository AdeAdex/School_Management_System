import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];



  useEffect(() => {
    let endpoint = "http://localhost:2000/staff_account/questions";

    axios.get(endpoint)
    .then((response) => {
      setQuestions(response.data.questions);
      console.log(questions);
    });
  }, []);

  const handleNextClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (!currentQuestion) {
        return <div>Loading...</div>;
      } 
      

  return (
    <>
      {currentQuestion ? (
      <div>
        <h2>Question {currentQuestion.id}</h2>
        <p>{currentQuestion.content}</p>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        <button onClick={handleNextClick}>Next</button>
      </div>
    ) : (
      <div>Loading...</div>
    )}
    </>
  );
};

export default Test;
