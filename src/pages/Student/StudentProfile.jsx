import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Stepper, Button, Group } from "@mantine/core";
import Personal from "../../components/studentProfileComponents.jsx/Personal";
import { FaUserCheck } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';

const StudentProfile = () => {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <MyApp />
    </SnackbarProvider>
  );
};

function MyApp() {
  // const globalState = useSelector((state) => state.portalReducer.studentInfo);

  const { enqueueSnackbar } = useSnackbar();

  const [active, setActive] = useState(0);
  const nextStep = (variant) => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        className="p-4"
        style={{backgroundColor: ""}}
      >
        <Stepper.Step label="" color="" icon={<FaUserCheck size="1.1rem" />} description="Personal">
          <Personal />
          <Group position="center" mt="xl">
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="" icon={<FaAddressCard size="1.1rem" />} description="Contact" >
          <div>2</div>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="" description="Reference">
          <div>3</div>
          <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
      </Group>
        </Stepper.Step>
        <Stepper.Completed>Completed</Stepper.Completed>
      </Stepper>
      
    </>
  );
}

export default StudentProfile;
