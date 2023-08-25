import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newStudent } from "../../redux/portalSlice";
import "../Student/Test.css";
import "animate.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCalculatorFill } from "react-icons/bs";
import Calculator from "../../components/studentDashboardComponents/Calculator";
import QuestionNavigationTable from "./QuestionNavigationTable";

const Test = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    Number(localStorage.getItem("currentQuestionIndex")) || 0
  );
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill("")
  );
  const [questionScores, setQuestionScores] = useState(
    Array.from({ length: questions.length }, () => 0)
  );
  // const [taken, setTaken] = useState(false);
  const [performed, setPerformed] = useState(false);
  const [beginExam, setBeginExam] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [countdown, setCountdown] = useState({ minutes: 0, seconds: 0 });

  const currentQuestion = questions[currentQuestionIndex];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  let warningSound = new Audio("warning.wav");

  useEffect(() => {
    let studentLoginToken = localStorage.studentLoginToken;
    setBeginExam(localStorage.getItem("examStarted") === "true");
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
          if (globalState.testStart && globalState.testStart.length > 0) {
            localStorage.setItem(
              "examStarted",
              globalState.testStart[0].examStarted
            );
            localStorage.setItem(
              "countdownStartTime",
              globalState.testStart[0].countdownStartTime
            );
            localStorage.setItem(
              "countdownTimeRemaining",
              globalState.testStart[0].countdownTimeRemaining
            );

            localStorage.setItem(
              "taken",
              globalState.takenExam
            );
            
            localStorage.setItem(
              "submitted",
              globalState.submitted
            );

            localStorage.getItem("finished") === "true";

            startCountdown();
          }
       
        } else {
          console.log(res.data.message);
          console.log(res.data.status);
          navigate("/student_login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [globalState, refreshing]);

  const startCountdown = () => {
    const startTime = parseInt(localStorage.getItem("countdownStartTime"));
    const countdownTime = parseInt(
      localStorage.getItem("countdownTimeRemaining")
    );

    if (startTime && countdownTime) {
      const countdownInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000);

        const remainingTime = countdownTime - elapsedTime;
        if (remainingTime <= 0) {
          clearInterval(countdownInterval);
          localStorage.done = true;
          if (localStorage.done) {
            setTimeIsUp(true);
          }
        } else {
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;

          setCountdown({ minutes, seconds });

          if (minutes === 0 && seconds <= 30) {
            // warningSound.play();
          }
        }
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
      };
    }
  };
  
  useEffect(() => {
    localStorage.getItem("finished") === "true";
    // setTaken(localStorage.getItem('taken') === 'true')
    setBeginExam(localStorage.getItem("examStarted") === "true");
    startCountdown();
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/staff_account/questions";
    axios.get(endpoint).then((response) => {
      setQuestions(response.data);
      const storedQuestionIndex = localStorage.getItem("currentQuestionIndex");
      if (storedQuestionIndex === null) {
        localStorage.setItem(
          "currentQuestionIndex",
          String(currentQuestionIndex)
        );
      } else {
        setCurrentQuestionIndex(Number(storedQuestionIndex));
      }
    });


    if (timeIsUp) {
      const nonNegativeScores = questionScores.map((score) =>
        Math.max(score, 0)
      );

      const totalNonNegativeScore = nonNegativeScores.reduce(
        (total, score) => total + score,
        0
      );

      submitMyScore(totalNonNegativeScore);
    }

    const storedQuestionScores = localStorage.getItem("questionScores");
    if (storedQuestionScores) {
      setQuestionScores(JSON.parse(storedQuestionScores));
    } else {
      // Initialize questionScores with an array of 0's
      setQuestionScores(Array.from({ length: questions.length }, () => 0));
    }

    const storedSelectedOptions = localStorage.getItem("selectedOptions");
    if (storedSelectedOptions) {
      setSelectedOptions(JSON.parse(storedSelectedOptions));
    }
    const storedAnsweredQuestions = localStorage.getItem("answeredQuestions");
    if (storedAnsweredQuestions) {
      setAnsweredQuestions(JSON.parse(storedAnsweredQuestions));
    }
  }, [timeIsUp, questions, beginExam, refreshing]);




  const handleNextClick = () => {
    const newQuestionIndex = currentQuestionIndex + 1;

    if (newQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const scoreToUpdate = questionScores[currentQuestionIndex];

      const newQuestionScores = [...questionScores];
      newQuestionScores[currentQuestionIndex] = scoreToUpdate || 0;

      setQuestionScores(newQuestionScores);

      localStorage.setItem("currentQuestionIndex", String(newQuestionIndex));
      localStorage.setItem("questionScores", JSON.stringify(questionScores));

      setCurrentQuestionIndex(newQuestionIndex);
    } else if (currentQuestion && currentQuestion.id === 10) {
      Swal.fire({
        title: "Submit Exam?",
        text: "You are about to submit your exam. Please make sure you have answered all questions before submitting.",
        showCancelButton: true,
        confirmButtonText: "Submit",
        cancelButtonText: "Cancel",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const nonNegativeScores = questionScores.map((score) =>
            Math.max(score, 0)
          );

          const totalNonNegativeScore = nonNegativeScores.reduce(
            (total, score) => total + score,
            0
          );
          console.log(totalNonNegativeScore);
          submitMyScore(totalNonNegativeScore);
        }
      });
    }
  };

  const submitMyScore = (newScores) => {
    
    let payload = {
      myScores: newScores,
        myEmail: globalState.email,
        myDecision: true
    }
    const endpoint2 =
      "https://school-portal-backend-adex2210.vercel.app/student_account/update_my_admission_exam_score";
    axios
      .post(endpoint2, payload)
      .then((response) => {
        if (response.data.status) {
          localStorage.setItem("submitted", response.data.response);
          setPerformed(true)
          if (localStorage.submitted === 'true') {
          localStorage.setItem("finished", response.data.response);
            // console.log(local);
          }
          if (localStorage.done) {
            toLogin();
          }
        }
      });
  };

  
  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      const newQuestionIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newQuestionIndex);
      localStorage.setItem("currentQuestionIndex", String(newQuestionIndex));
    }
  };

  const handleQuestionNavigation = (index) => {
    setCurrentQuestionIndex(index);
    localStorage.setItem("currentQuestionIndex", String(index));
  };


  // const handleOptionSelect = (option) => {
  //   const currentQuestion = questions[currentQuestionIndex];
  //   const questionIndex = currentQuestion.id - 1;
  
  //   const newSelectedOptions = { ...selectedOptions };
  //   const newQuestionScores = { ...questionScores };
  //   const updatedAnsweredQuestions = [...answeredQuestions];
  
  //   newSelectedOptions[questionIndex] = option;
  
  //   const isCorrect = option.startsWith(currentQuestion.correctOption);
  //   newQuestionScores[questionIndex] = isCorrect ? 10 : -10;
  
  //   if (option !== "") {
  //     if (!updatedAnsweredQuestions.includes(currentQuestion.id)) {
  //       updatedAnsweredQuestions.push(currentQuestion.id);
  //     }
  //   } else {
  //     const index = updatedAnsweredQuestions.indexOf(currentQuestion.id);
  //     if (index !== -1) {
  //       updatedAnsweredQuestions.splice(index, 1);
  //     }
  //   }
  
  //   setAnsweredQuestions(updatedAnsweredQuestions);
  //   setQuestionScores(newQuestionScores);
  //   setSelectedOptions(newSelectedOptions);
  
  //   // console.log("Picked Option:", option);
  //   // console.log("Score for Picked Option:", newQuestionScores[questionIndex]);
  
  //   const payload = {
  //     myEmail: globalState.email,
  //     answeredQuestions: currentQuestion.id,
  //     questionScores: newQuestionScores[questionIndex],
  //     selectedOptions: option,
  //   };
  
  //   console.log(payload);
  
  //   let endpoint = "http://localhost:2000/student_account/set_scores";
  //   axios
  //     .post(endpoint, payload)
  //     .then((response) => {
  //       if (response.data.status) {
  //         console.log(response.data.response);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


const handleOptionSelect = (option) => {
  const newSelectedOptions = [ ...selectedOptions ];
  const newQuestionScores = [ ...questionScores ];

  const currentQuestion = questions[currentQuestionIndex];
  const questionIndex = currentQuestion.id - 1;

  newSelectedOptions[questionIndex] = option;

  if (option.startsWith(currentQuestion.correctOption)) {
    newQuestionScores[questionIndex] = 10;
  } else {
    newQuestionScores[questionIndex] = -10;
  }

  setSelectedOptions(newSelectedOptions);

  // Use an array for answeredQuestions
  const updatedAnsweredQuestions = [...answeredQuestions];

  if (option !== "") {
    newQuestionScores[questionIndex] = newQuestionScores[questionIndex] || 0;
    updatedAnsweredQuestions.push(currentQuestion.id);
  } else {
    const index = updatedAnsweredQuestions.indexOf(currentQuestion.id);
    if (index !== -1) {
      updatedAnsweredQuestions.splice(index, 1);
    }
  }

  setAnsweredQuestions(updatedAnsweredQuestions);
  setQuestionScores(newQuestionScores);

  localStorage.setItem(
    "answeredQuestions",
    JSON.stringify(updatedAnsweredQuestions)
  );
  localStorage.setItem("questionScores", JSON.stringify(newQuestionScores));
  localStorage.setItem("selectedOptions", JSON.stringify(newSelectedOptions));
};

  
  

  const toLogin = () => {
    setIsLoading(true);
    const payload = {
      yourKeyHere: true,
      myEmail: globalState.email,
    };
    let updateEndpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/update_admission_state";
    axios
      .post(updateEndpoint, payload)
      .then((response) => {
        if (response.data.status) {
          localStorage.removeItem("answeredQuestions");
          localStorage.removeItem("questionScores");
          localStorage.removeItem("currentQuestionIndex");
          localStorage.removeItem("examStarted");
          localStorage.removeItem("countdownStartTime");
          localStorage.removeItem("countdownTimeRemaining");
          localStorage.removeItem("selectedOptions");
          localStorage.setItem("currentQuestionIndex", 0);
          localStorage.removeItem("taken");
          
          setIsLoading(false);
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: response.data.message,
          });
          
          localStorage.taken = response.data.newResult;
          navigate("/student_login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const startExam = () => {
    Swal.fire({
      title: "Start Exam?",
      text: "You will have a limited time to complete all 10 questions. Make sure you're prepared before beginning.",
      showCancelButton: true,
      confirmButtonText: "Start Exam",
      cancelButtonText: "Cancel",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const countdownTime = 300;
        let payload = {
          newExamStarted: true,
          newCountdownStartTime: Date.now(),
          newCountdownTimeRemaining: countdownTime,
          myEmail: globalState.email,
        };
        let endpoint = "https://school-portal-backend-adex2210.vercel.app/student_account/started_the_test";
        axios.post(endpoint, payload).then((response) => {
          if (response.data.status) {
            setRefreshing(true);
            setTimeout(() => {
              setRefreshing(false);
              localStorage.setItem("examStarted", true);
              startCountdown();
            }, 100);
          }
        });
      }
    });
  };

  const handleClick = () => {
    setTimeout(() => {
      localStorage.removeItem("studentLoginToken");
    }, 1000);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="test-container">
      {!beginExam ? (
        <div className="w-100 pb-4" style={{ width: "100%" }}>
          <div className="w-50 mx-auto text-container2">
            <div className="mt-5 mb-3 w-100 position-relative">
              <div
                className="d-flex fs-2 fw-bold position-fixed gap-4 justify-content-center w-100 py-3"
                style={{
                  fontFamily: "fantasy",
                  left: "0",
                  top: "0",
                  backgroundColor: "whitesmoke",
                  zIndex: "2",
                }}
              >
                <img
                  src="/pic/ade.png"
                  className="d-flex flex-start my-auto"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="my-auto sch-name">
                  Adex International School
                </div>
              </div>
              <div
                className="d-flex justify-content-between position-relative"
                style={{ marginTop: "100px" }}
              >
                <div className="d-flex gap-3">
                  <small
                    className="fs-4 shadow px-2 py-1 user-icon"
                    style={{
                      borderRadius: "50%",
                      fontSize: "24px",
                    }}
                  >
                    <FaUserAlt size={24} />
                  </small>
                  <div className="fw-bold fs-4 my-auto">
                    {globalState.firstName} {globalState.lastName}{" "}
                    {globalState.takenExam}
                  </div>
                </div>

                <button
                  className="btn btn-sm btn-primary my-auto"
                  onClick={handleClick}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="exam-instructions">
              <h2 className="text-center mb-3">Exam Instructions:</h2>
              <p>
                You are about to take a timed exam consisting of 10
                multiple-choice questions. You will have 5 minutes to complete
                the entire exam. Please read the instructions carefully before
                starting the exam:
              </p>
              <ol>
                <li>
                  The exam comprises 10 questions, each with multiple-choice
                  options.
                </li>
                <li>You must select one correct option for each question.</li>
                <li>
                  You can change your selected option for a question before
                  submitting the exam.
                </li>
                <li>
                  Make sure to read each question and all the options before
                  making a selection.
                </li>
                <li>
                  The exam is timed, and you have 5 minutes to complete it. The
                  timer will start when you begin the exam.
                </li>
                <li>
                  You can see your remaining time on the top-left corner of the
                  screen.
                </li>
                <li>
                  After answering all 10 questions or when the timer runs out,
                  the exam will be automatically submitted.
                </li>
                <li>
                  Do not refresh the page or leave the exam screen during the
                  test, as it may result in submission.
                </li>
                <li>Good luck! Start the exam when you are ready.</li>
              </ol>
              <p>
                Please note that your responses will be recorded and evaluated
                once the exam is completed or the time limit is reached.
                Remember, managing your time efficiently is essential to
                complete all the questions within the given timeframe.
              </p>
              <div className="start-exam-div">
                <button
                  className="start-exam-btn btn btn-sm btn-success d-flex px-3 mx-auto"
                  onClick={startExam}
                >
                  Start Exam
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-100 h-100">
            <div
              className="w-75 question-container shadow mx-auto d-flex flex-column justify-content-center p-4"
              style={{ marginTop: "100px" }}
            >
              <div className="d-flex gap-2 justify-content-center position-relative">
                {performed === true ? (
                  <>
                    <div
                      className="d-flex fs-2 fw-bold position-fixed gap-4 justify-content-center w-100 py-3"
                      style={{
                        fontFamily: "fantasy",
                        left: "0",
                        top: "0",
                        backgroundColor: "whitesmoke",
                        zIndex: "2",
                      }}
                    >
                      <img
                        src="/pic/ade.png"
                        className="d-flex flex-start"
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div className="my-auto">Adex International School</div>
                    </div>
                    <span className="fs-5 " style={{ display: "inline-flex" }}>
                      Thank You:{" "}
                    </span>
                  </>
                ) : (
                  <>
                    <div
                      className="d-flex fs-2 fw-bold position-fixed gap-4 justify-content-center w-100 py-3"
                      style={{
                        fontFamily: "fantasy",
                        left: "0",
                        top: "0",
                        backgroundColor: "whitesmoke",
                        zIndex: "2",
                      }}
                    >
                      <img
                        src="/pic/ade.png"
                        className="d-flex flex-start"
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div className="my-auto">Adex International School</div>
                    </div>
                    <div
                      className={`fs-4 position-absolute start-0 ${
                        countdown.minutes === 0 && countdown.seconds <= 30
                          ? "text-danger blinking"
                          : countdown.minutes === 0 && countdown.seconds <= 59
                          ? "text-danger"
                          : "text-dark"
                      }`}
                    >
                      {countdown.minutes}:{countdown.seconds}
                    </div>
                    <span className="fs-5"> </span>
                  </>
                )}
                <div className="fw-bold fs-5 my-auto">
                  {globalState.firstName} {globalState.lastName}{" "}
                  {globalState.takenExam}
                </div>
                {performed ? null : (
                  <div
                    className=" position-absolute end-0"
                    style={{ cursor: "pointer" }}
                    onClick={openModal}
                  >
                    <BsFillCalculatorFill size={30} />
                  </div>
                )}
              </div>
              {currentQuestion && (
                <div className="div text-center">
                  {(currentQuestion.id === 10 && localStorage.finished === 'true') || localStorage.done ? (
                    <div className="mt-4">
                      <div className="mb-5">
                        Congratulations for successfully participating in our
                        entrance examination! We commend your efforts and wish
                        you the best of luck on your educational journey. To
                        view your results, kindly click the "Finish" button
                        below, and your scores will be promptly sent to your
                        email.
                      </div>
                      <button
                        className="btn btn-success btn-sm px-5 py-2"
                        onClick={toLogin}
                      >
                        {isLoading ? (
                          <div className="spinner my-auto"></div>
                        ) : (
                          <span>Finish</span>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div
                      className="position-relative"
                      style={{ minHeight: "64vh" }}
                    >
                      <small className="fw-bold">
                        Your Sit No: {globalState.mySitNo}
                      </small>
                      <h1 className="my-3">Question {currentQuestion.id}</h1>
                      <p className="my-3">{currentQuestion.content}</p>
                      <ul className="d-flex flex-column mx-auto mt-4 question-ul">
                        {currentQuestion.options.map((option, index) => (
                          <label
                            key={index}
                            className="d-flex mx-auto"
                            style={{ cursor: "pointer", width: "50%" }}
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

                      <QuestionNavigationTable
                        totalQuestions={questions.length}
                        currentQuestionIndex={currentQuestionIndex}
                        handleQuestionNavigation={handleQuestionNavigation}
                        answeredQuestions={answeredQuestions}
                      />
                      <div
                        className="d-flex gap-3 justify-content-center button-container"
                        style={{ marginTop: "120px" }}
                      >
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
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  <Calculator isOpen={modalOpen} onClose={closeModal} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>

  );
};

export default Test;
