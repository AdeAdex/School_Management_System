import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StudentPaymentHistory = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  const [showPrintPage, setShowPrintPage] = useState(false);
  const navigate = useNavigate()

  const receivedEmail = globalState.email;
  const formClass = globalState.level;
  const formTerm = globalState.term;
  const formOption = globalState.options;

  const [yhea, setYhea] = useState([]);

  // const handlePrint = (payment) => {
  //  navigate('/print_page', {state: payment})
  // };


  // const handlePrint = (payment) => {
  //   // Create the URL for the print page
  
  //   // Open the URL in a new window or tab with the payment data as state
  //   window.open( '_blank', 'noopener noreferrer', {
  //     state: payment,
  //   });
  // };


  const handlePrint = (payment) => {
    // Open a new window with specific dimensions
    const printWindow = window.open('', '_blank', 'width=600,height=400,noopener,noreferrer');
  
    if (printWindow) {
      // Set the content of the new window
      printWindow.document.write('<html><head><title>Payment Details</title></head><body>');
      printWindow.document.write('<div style="text-align: center;"><h1>Payment Details</h1></div>');
      printWindow.document.write('<div id="payment-details-container">');
      printWindow.document.write('<div id="payment-details-content">');
      printWindow.document.write('<h2>Payment Details</h2>');
  
      // Display payment details
      printWindow.document.write(`<p>Paid For: ${payment.paidFor}</p>`);
      printWindow.document.write(`<p>Amount To Paid: ₦${payment.amountToPaid.toFixed(2)}</p>`);
      printWindow.document.write(`<p>Amount Paid: ₦${payment.amountPaid.toFixed(2)}</p>`);
      printWindow.document.write(`<p>Balance: ₦${payment.balance.toFixed(2)}</p>`);
      printWindow.document.write(`<p>Date: ${payment.date}</p>`);
  
      printWindow.document.write('</div></div></body></html>');
      printWindow.document.close();
  
      // Print the new window
      printWindow.print();
    } else {
      alert('Pop-up blocked. Please allow pop-ups to print.');
    }
  };
  

  

  useEffect(() => {    
    let endpoint =
      "https://school-portal-backend-adex2210.vercel.app/student_account/paymentHistory";
    axios
      .get(endpoint, {
        params: {
          receivedEmail,
          formClass,
          formTerm,
          formOption,
        },
      })
      .then((response) => {
        setYhea(response.data.response);
      });
  }, [globalState]);
  return (
    <>
      <div className="w-100 px-2 course-reg-container" style={{height: '100%', backgroundColor: ''}}>
        <div className="d-flex gap-4  py-2">
          <div>Payment History: </div>
          <div className="fw-bold">
            {globalState.level}
          </div>
        </div>
        <div className="" style={{overflowY: 'auto', height: '70%'}}>
          <table className="table table-borderd mt-4">
            <thead className='fw-bold'>
              <tr>
                <td>#INVOIVE</td>
                <td>AMOUNT TO BE PAID</td>
                <td>AMOUNT PAID</td>
                <td>BALANCE</td>
                <td>DATE</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              {yhea && yhea.length > 0 ? (
                yhea.map((payment, index) => (
                  <tr key={index}>
                    <td>{payment.paidFor}</td>
                    <td>₦{payment.amountToPaid.toFixed(2)}</td>
                    <td>₦{payment.amountPaid.toFixed(2)}</td>
                    <td>₦{payment.balance.toFixed(2)}</td>
                    <td>{payment.date}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-white shadow delete-btn"
                        onClick={() => {handlePrint({
                          paidFor: payment.paidFor, 
                          amountToPaid: payment.amountToPaid, 
                          amountPaid: payment.amountPaid, 
                          balance: payment.balance, 
                          date: payment.date
                        })}}
                      >
                        Print
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Results Found. Add subjects.
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

export default StudentPaymentHistory