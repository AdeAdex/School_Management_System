import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Stepper, Button, Group } from "@mantine/core";
import Personal from "../../components/studentProfileComponents.jsx/Personal";
import { FaUserCheck, FaAddressCard, FaUserTag } from "react-icons/fa";
import Contact from "../../components/studentProfileComponents.jsx/Contact";
import Referee from "../../components/studentProfileComponents.jsx/Referee";

const StudentProfile = () => {

  const [active, setActive] = useState(0);
  const nextStep = (variant) =>
    setActive((current) => (current < 3 ? current + 1 : current));

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        className="p-4"
        style={{ backgroundColor: "", width: '100%', height: '100%' }}
        color=""
      >
        <Stepper.Step
          label=""
          icon={<FaUserCheck size="1.1rem" />}
          description="Personal"
        >
          <Personal />
          <Group position="center" mt="">
            <Button onClick={nextStep} className="">Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step
          label=""
          icon={<FaAddressCard size="1.1rem" />}
          description="Contact"
        >
          <Contact/>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="" icon={<FaUserTag size="1.1rem" />} description="Referee">
          <Referee/>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          </Group>
        </Stepper.Step>
        {/* <Stepper.Completed>Completed</Stepper.Completed> */}
      </Stepper>
    </>
  );
};


export default StudentProfile;
