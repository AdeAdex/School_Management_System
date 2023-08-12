import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newStudent } from "../../redux/portalSlice";

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    Number(localStorage.getItem("currentQuestionIndex")) || 0
  );
  const [selectedOptions, setSelectedOptions] = useState(Array(0));
  const [questionScores, setQuestionScores] = useState(Array(0));
  const [taken, setTaken] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  useEffect(() => {
    let studentLoginToken = localStorage.studentLoginToken;
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/student__admission_dashboard";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${studentLoginToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.data.status) {
          dispatch(newStudent(res.data.response));
        } else {
          console.log(res.data.message);
          console.log(res.data.status);
          navigate("/student_login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [globalState]);

  useEffect(() => {
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/questions";
    axios.get(endpoint).then((response) => {
      setQuestions(response.data);
      if (localStorage.getItem("currentQuestionIndex") === null) {
        localStorage.setItem(
          "currentQuestionIndex",
          String(currentQuestionIndex)
        );
      }
    });
  }, [currentQuestionIndex]);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const newQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newQuestionIndex);

      const endpoint2 =
        "http://localhost:2000/student_account/update_my_admission_exam_score";
      const scoreToUpdate = questionScores[currentQuestionIndex];
      // console.log(scoreToUpdate);
      axios
        .post(endpoint2, {
          scores: scoreToUpdate,
          myEmail: globalState.email,
        })
        .then((response) => {
          if (response.data.status) {
            const newQuestionScores = [...questionScores];
            newQuestionScores[currentQuestionIndex] = scoreToUpdate;

            setQuestionScores(newQuestionScores);

            if (currentQuestion.id === 10) {
              // setTaken(true);
            }

            localStorage.setItem(
              "currentQuestionIndex",
              String(newQuestionIndex)
            );
          }
        });
    } else {
      setTaken(true);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      const newQuestionIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newQuestionIndex);
      localStorage.setItem("currentQuestionIndex", String(newQuestionIndex));
    }
  };

  const handleOptionSelect = (option) => {
    const newSelectedOptions = [...selectedOptions];
    const newQuestionScores = [...questionScores];

    const currentQuestion = questions[currentQuestionIndex];
    const questionIndex = currentQuestion.id - 1;

    newSelectedOptions[questionIndex] = option;

    if (option.startsWith(currentQuestion.correctOption)) {
      newQuestionScores[questionIndex] = 10;
    } else {
      newQuestionScores[questionIndex] = -10;
    }

    setSelectedOptions(newSelectedOptions);
    setQuestionScores(newQuestionScores);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const toLogin = () => {
    const payload = {
      yourKeyHere: true,
      myEmail: globalState.email,
    };
    let updateEndpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/update_admission_state";
    axios.post(updateEndpoint, payload).then((response) => {
      if (response.data.status) {
        localStorage.taken = response.data.response;
        navigate("/student_login");
      }
    });
  };

  return (
    <div className="w-100 h-100">
      <div className="w-75 shadow mx-auto d-flex flex-column justify-content-center p-4 mt-5">
        <div className="text-center d-flex gap-2 justify-content-center">
          <span className="fs-4">Welcome: </span>{" "}
          <div className="fw-bold fs-4">
            {globalState.firstName} {globalState.lastName}{" "}
            {globalState.takenExam}
          </div>
        </div>
        {currentQuestion && (
          <div className="div text-center">
            {currentQuestion.id === 10 && taken ? (
              <div>
                <div>Hello</div>
                <button onClick={toLogin}>Finish</button>
              </div>
            ) : (
              <>
                <h1 className="my-3">Question {currentQuestion.id}</h1>
                <p className="my-3">{currentQuestion.content}</p>
                <ul className="d-flex flex-column mx-auto mb-5">
                  {currentQuestion.options.map((option, index) => (
                    <label
                      key={index}
                      className="d-flex align-items-center  mx-auto"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={
                          selectedOptions[currentQuestionIndex] === option
                        }
                        onChange={() => handleOptionSelect(option)}
                        className="select-radio"
                        style={{
                          height: "unset",
                          width: "unset",
                          verticalAlign: "unset",
                          float: "unset",
                          marginRight: "10px",
                        }}
                      />
                      {option}
                    </label>
                  ))}
                </ul>
                <div className="d-flex gap-3 justify-content-center my-4">
                  <button
                    className="btn btn-primary btn-sm px-3"
                    onClick={handlePreviousClick}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-primary btn-sm px-3"
                    onClick={handleNextClick}
                  >
                    {taken ? "Finish" : "Next"}
                  </button>
                  {/* <button
                    className="btn btn-primary btn-sm px-3"
                    onClick={handleNextClick}
                  >
                    {currentQuestion.id === 10 ? "Submit" : "Next"}
                  </button> */}
                </div>
                <p>Score: {questionScores[currentQuestionIndex]}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { newStudent, takenExam } from "../../redux/portalSlice";

// const Test = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
//     Number(localStorage.getItem("currentQuestionIndex")) || 0
//   );
//   const [selectedOption, setSelectedOption] = useState("");
//   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
//   const [scores, setScores] = useState(0);
//   const [clicked, setClicked] = useState(false);
//   const [taken, setTaken] = useState(false);

//   const [selectedOptions, setSelectedOptions] = useState(
//     Array(questions.length).fill("")
//   );
//   const [questionScores, setQuestionScores] = useState(
//     Array(questions.length).fill(0)
//   );

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const globalState = useSelector((state) => state.portalReducer.studentInfo);
//   const examState = useSelector((state) => state.portalReducer.taken);

//   useEffect(() => {
//     let studentLoginToken = localStorage.studentLoginToken;
//     let endpoint =
//       "https://school-portal-backend-adex2210.vercel.app/student_account/student__admission_dashboard";
//     axios
//       .get(endpoint, {
//         headers: {
//           Authorization: `Bearer ${studentLoginToken}`,
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       })
//       .then((res) => {
//         if (res.data.status) {

//           dispatch(newStudent(res.data.response));
//           // console.log(res.data.message);
//         } else {
//           console.log(res.data.message);
//           console.log(res.data.status);
//           navigate("/student_login");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     // alert(globalState.takenExam)
//   }, [globalState]);

//   useEffect(() => {
//     let endpoint =
//       "https://school-portal-backend-adex2210.vercel.app/staff_account/questions";
//     axios.get(endpoint).then((response) => {
//       setQuestions(response.data);
//       if (localStorage.getItem("currentQuestionIndex") === null) {
//         localStorage.setItem(
//           "currentQuestionIndex",
//           String(currentQuestionIndex)
//         );
//       }
//     });
//   }, []);

//   // http://localhost:2000

//   let myEmail = globalState.email;
//   const handleNextClick = (takenValue) => {
//     if (currentQuestionIndex < questions.length - 1) {
//       let endpoint2 =
//         "https://school-portal-backend-adex2210.vercel.app/student_account/update_my_admission_exam_score";
//       axios.post(endpoint2, { score: questionScores[currentQuestionIndex], myEmail }).then((response) => {
//         if (response.data.status) {
//           console.log(response.data.message);
//           // setCurrentQuestionIndex(currentQuestionIndex + 1);
//           const newQuestionIndex = currentQuestionIndex + 1;
//           setCurrentQuestionIndex(newQuestionIndex);

//           const totalScore = questionScores.reduce(
//             (acc, score) => acc + score,
//             0
//           );
//           setScores(totalScore);
//           localStorage.setItem(
//             "currentQuestionIndex",
//             String(newQuestionIndex)
//           );
//           setSelectedOption("");
//           setShowCorrectAnswer(false);
//           setClicked(false);
//           setScores(0);
//         } else {
//         }
//       });
//     } else {
//       if (currentQuestion.id === 10) {
//         setTaken(true);
//       }
//     }
//   };

//   const handlePreviousClick = () => {
//     if (currentQuestionIndex > 0) {
//       const newQuestionIndex = currentQuestionIndex - 1;
//       setCurrentQuestionIndex(newQuestionIndex);
//       localStorage.setItem("currentQuestionIndex", String(newQuestionIndex));
//       setSelectedOption(selectedOptions[newQuestionIndex]);
//       setShowCorrectAnswer(false);

//       // Calculate the total score based on updated questionScores array
//       const totalScore = questionScores.reduce(
//         (acc, score, index) => (index <= newQuestionIndex ? acc + score : acc),
//         0
//       );
//       setScores(totalScore);
//     }
//     // if (currentQuestionIndex > 0) {
//     //   const newQuestionIndex = currentQuestionIndex - 1;
//     //   setCurrentQuestionIndex(newQuestionIndex);
//     //   localStorage.setItem("currentQuestionIndex", String(newQuestionIndex));
//     //   setSelectedOption("");
//     //   setShowCorrectAnswer(false);
//     //   setClicked(false);
//     //   setScores(0);
//     // }
//   };

//   const handleOptionSelect = (option) => {
//     const newSelectedOptions = [...selectedOptions];
//     const newQuestionScores = [...questionScores];

//     const currentQuestion = questions[currentQuestionIndex];
//     const questionIndex = currentQuestion.id - 1;

//     newSelectedOptions[questionIndex] = option;

//     if (option.startsWith(currentQuestion.correctOption)) {
//       newQuestionScores[questionIndex] = 10;
//     } else {
//       newQuestionScores[questionIndex] = -10;
//     }

//     setSelectedOptions(newSelectedOptions);
//     setQuestionScores(newQuestionScores);
//     // setSelectedOption(option);
//     // setShowCorrectAnswer(true);
//     // if (option.startsWith(questions[currentQuestionIndex].correctOption)) {
//     //   if (!clicked) {
//     //     setClicked(true);
//     //     setScores(scores + 10);
//     //   }
//     // } else {
//     //   if (clicked) {
//     //     setClicked(false);
//     //     setScores(scores - 10);
//     //   }
//     // }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   const toLogin = () => {
//     let myEmail = globalState.email;
//         const payload = {
//           yourKeyHere: true,
//           myEmail: myEmail,
//         };
//         let updateEndpoint =
//           "https://school-portal-backend-adex2210.vercel.app/student_account/update_admission_state";
//         axios.post(updateEndpoint, payload)
//         .then((response) => {
//           if (response.data.status) {
//             localStorage.taken = response.data.response;
//             // dispatch();
//             navigate("/student_login");
//           }
//         });
//   };

//   return (
//     <>
//       <div className="w-100 h-100">
//         <div className="w-75 shadow mx-auto d-flex flex-column justify-content-center p-4 mt-5">
//           <div className="text-center d-flex gap-2 justify-content-center">
//             <span className="fs-4">Welcome: </span>{" "}
//             <div className="fw-bold fs-4">
//               {" "}
//               {globalState.firstName} {globalState.lastName}{" "}
//               {globalState.takenExam}
//             </div>
//           </div>
//           {currentQuestion && (
//             <div className="div text-center">
//               {currentQuestion.id === 10 && taken  ? (
//                 <div>
//                   <div>Hello</div>
//                   <button onClick={toLogin}>Finish</button>
//                 </div>
//               ) : (
//                 <>
//                   <h1 className="my-3">Question {currentQuestion.id}</h1>
//                   <p className="my-3">{currentQuestion.content}</p>
//                   <ul className="d-flex flex-column mx-auto mb-5">
//                     {currentQuestion.options.map((option, index) => (
//                       <label
//                         key={index}
//                         className="d-flex align-items-center  mx-auto"
//                         style={{ cursor: "pointer" }}
//                       >
//                         <input
//                           type="radio"
//                           name="option"
//                           value={option}
//                           checked={selectedOption === option}
//                           onChange={() => handleOptionSelect(option)}
//                           className="select-radio"
//                           style={{
//                             height: "unset",
//                             width: "unset",
//                             verticalAlign: "unset",
//                             float: "unset",
//                             marginRight: "10px",
//                           }}
//                         />
//                         {option}
//                       </label>
//                     ))}
//                   </ul>
//                   <div className="d-flex gap-3 justify-content-center my-4">
//                     <button
//                       className=" btn btn-primary btn-sm px-3"
//                       onClick={handlePreviousClick}
//                     >
//                       Previous
//                     </button>
//                     <button
//                       className=" btn btn-primary btn-sm px-3"
//                       onClick={handleNextClick}
//                     >
//                       {currentQuestion.id === 10 ? "Submit" : "Next"}
//                     </button>
//                   </div>
//                   <p>Score: {questionScores[currentQuestionIndex]}</p>
//                   {/* <p>Score: {scores}</p> */}
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Test;
