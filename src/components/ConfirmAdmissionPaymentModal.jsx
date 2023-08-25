import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { SnackbarProvider, useSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmAdmissionPaymentModal = ({
  open,
  handleClose,
  firstName,
  personEmail,
  admissionState,
  paymentURL,
  paymentDate
}) => {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MyApp
        open={open}
        handleClose={handleClose}
        firstName={firstName}
        personEmail={personEmail}
        admissionState={admissionState}
        paymentURL={paymentURL}
        paymentDate={paymentDate}
      />
    </SnackbarProvider>
  );
};

function MyApp({ open, handleClose, firstName, personEmail, admissionState, paymentURL, paymentDate }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleAgree = () => {
    let payload = {
      myEmail: personEmail,
      justPaid: false,
    };
    let endpoint = "http://localhost:2000/student_account/paidAdmissionFee";
    axios
      .post(endpoint, payload)
      .then((response) => {
        if (response.data.status) {
          enqueueSnackbar(response.data.message, { variant: "success" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{`Confirm Admission Payment For ${firstName}`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
        <div className="d-flex flex-column">
        <img src={paymentURL} style={{width: '400px', maxWidth: '100%'}} alt="" />
        <small>{paymentDate}</small>
        </div>
          <div>Current Payment: 0</div>
          <div>Admission Payment State: {admissionState}</div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="btn btn-success" onClick={handleAgree}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmAdmissionPaymentModal;
