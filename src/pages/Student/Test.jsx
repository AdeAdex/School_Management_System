import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const currentQuestion = questions[currentQuestionIndex];



  useEffect(() => {
    let endpoint = "http://localhost:2000/staff_account/questions";

    // Fetch the questions from the API when the component mounts
//     axios.get(endpoint)
//     .then((response) => {
//       setQuestions(response.data.questions);
//       console.log(questions);
//     });
axios.get(endpoint)
    .then((response) => {
      setQuestions((prevQuestions) => {
        console.log(response.data.questions);
        return response.data.questions;
      });
    });
  }, []);

//   const handleNextClick = () => {
//     // Move to the next question
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   if (!currentQuestion) {
//         return <div>Loading...</div>;
//       } 
      

  return (
    <>
      {/* <div>
        <h2>Question {currentQuestion.id}</h2>
        <p>{currentQuestion.content}</p>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        <button onClick={handleNextClick}>Next</button>
      </div> */}
    </>
  );
};

export default Test;
