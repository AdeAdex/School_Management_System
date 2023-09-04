import axios from "axios";
import React, { useEffect, useState } from "react";

const CoursePage = () => {
  const [subject, setSubject] = useState([])
  useEffect(() => {
    let endpoint = "http://localhost:2000/staff_account/student_subject";
    axios.get(endpoint).then((response) => {
      setSubject(response.data.subject)
    });
  }, []);

  return (
    <>
      <div>
        {
          subject.map((sub, index) => (

          ))
        }
      </div>
    </>
  );
};

export default CoursePage;
