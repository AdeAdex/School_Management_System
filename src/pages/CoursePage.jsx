import axios from "axios";
import React, { useEffect, useState } from "react";
import PagesNavbar from "../components/navbarComponents/PagesNavbar";
import Footer from "../components/footerComponents/Footer";
import "../pages/CoursePage.css";

const CoursePage = () => {
  const [subjects, setSubjects] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    let endpoint = "http://localhost:2000/staff_account/student_subject";
    let endpoint2 =
      "http://localhost:2000/staff_account/science_option_endpoint";
    let endpoint3 =
      "http://localhost:2000/staff_account/commercial_option_endpoint";

    axios.get(endpoint).then((response) => {
      setSubjects(response.data);
      console.log(response.data);
    });

    axios.get(endpoint2).then((response) => {
      setData2(response.data);
    });

    // Third Request
    axios.get(endpoint3).then((response) => {
      setData3(response.data);
    });
  }, []);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "science") {
      setData2(data2); 
    } else if (selectedValue === "commercial") {
      setData2(data3); 
    }
  };

  return (
    <>
      <PagesNavbar />
      <div className="course-container">
        <div className="d-flex flex-column justify-content-center align-items-center course-main mx-auto">
          <h1 className="course-header">
            All Subjects in Junior Secondary School
          </h1>
          <div className="subject-list">
            {subjects ? (
              subjects.map((sub, index) => (
                <div className="subject-card" key={index}>
                  <h2 className="subject-title">{sub.subject}</h2>
                </div>
              ))
            ) : (
              <div>not available</div>
            )}
          </div>

          <div className="my-5">
            <h1 className="course-header">
              All Subjects in Senior Secondary School
            </h1>
            <select
              className="custom-select"
              name="myOption"
              id=""
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select An Option
              </option>
              <option value="science">Sciences</option>
              <option value="commercial">Commercial</option>
              <option value="">Art</option>
            </select>
            <div className="subject-list">
              {data2 ? (
                data2.map((sub, index) => (
                  <div className="subject-card" key={index}>
                    <h2 className="subject-title">{sub.subject}</h2>
                  </div>
                ))
              ) : (
                <div className="not-available">Not available</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
