import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Tabs, rem } from "@mantine/core";
import { MdDoneAll } from 'react-icons/md';


const StudentRegistrationHistory = () => {
  const iconStyle = { width: rem(12), height: rem(12) };
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
      <div
        className="w-100 px-2 course-reg-container"
        style={{ height: "100%", backgroundColor: "" }}
      >
        <div className="d-flex gap-4  py-2">
          <div>Registration History: </div>
        </div>
        {/* {globalState ? ( */}
          <Tabs defaultValue="First">
            <Tabs.List>
              <Tabs.Tab value="First">{globalState.level}</Tabs.Tab>
              <Tabs.Tab value="Second">{globalState.level}</Tabs.Tab>
              <Tabs.Tab value="Third">{globalState.level}</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="First">
              <div className="" style={{ overflowY: "auto", height: "70%" }}>
                <div className="fw-bold mt-3">{globalState.term}</div>
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
                          No Results Found. Register subjects to display the
                          History here.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Second">
              <div className="" style={{ overflowY: "auto", height: "70%" }}>
                <div className="fw-bold mt-3">Second Term</div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Third">
            <div className="" style={{ overflowY: "auto", height: "70%" }}>
                <div className="fw-bold mt-3">Third Term</div>
              </div>
            </Tabs.Panel>
          </Tabs>
        {/* ) : (
          <div>loading</div>
        )} */}
      </div>
    </>
  );
};

export default StudentRegistrationHistory;
