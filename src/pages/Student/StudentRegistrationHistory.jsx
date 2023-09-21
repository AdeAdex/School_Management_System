import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';

const StudentRegistrationHistory = () => {

  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  const receivedEmail = globalState.email;
  const formClass = globalState.level;
  const formTerm = globalState.term;
  const formOption = globalState.options;

  const [yhea, setYhea] = useState([]);

  useEffect(() => {    
    let endpoint2 =
      "https://school-portal-backend-adex2210.vercel.app/student_account/student_term_subject";
    axios
      .get(endpoint2, {
        params: {
          receivedEmail,
          formClass,
          formTerm,
          formOption,
        },
      })
      .then((response) => {
        setYhea(response.data);
      });
  }, [globalState]);


  return (
   <>
   <div className="w-100 px-2 course-reg-container" style={{height: '100%', backgroundColor: ''}}>
   <div className="d-flex gap-4  py-2">
          <div>Registration History: </div>
          <div className="fw-bold">
            {globalState.level}
          </div>
        </div>
   <div className="" style={{overflowY: 'auto', height: '70%'}}>
          <table className="table table-borderd mt-4">
            <thead>
              <tr>
                <td>Subject Title</td>
                <td>Term</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {yhea && yhea.length > 0 ? (
                yhea.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject.mySubject}</td>
                    <td>{subject.newTerm}</td>
                    <td>{subject.myOption}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Results Found. Register subjects to display the History here.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
   </div>
    
   </>
  )
}

export default StudentRegistrationHistory