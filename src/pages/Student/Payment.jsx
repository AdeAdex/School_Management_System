import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Payment = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);
  useEffect(() => {
    console.log(globalState.email);
  payWithPaystack()
  }, [])
  
  function payWithPaystack() {
    let handler = PaystackPop.setup({
      key: "pk_test_a70c6dbb491c1021f98ea8cf0b840542607c2537",
      email: globalState.email,
      amount: 5000 * 100,
      ref: "Adex" + Math.floor(Math.random() * 1000000000 + 1),
      onClose: function () {
        let message = "You just cancel this transaction";
        Swal.fire({
          icon: "error",
          title: "Dear " + Adex,
          text: message,
          footer:
            "For further assistance, please call us at +2347033959586 or email us at adeoluamole@gmail.com",
        });
      },
      callback: function (response) {
        allCustomer = JSON.parse(localStorage.getItem("ourCustomerDetails"));
        let message =
          "Payment completed! Your Reference Number is: " + response.reference;
        Swal.fire({
          icon: "success",
          title: "Thank You " + Adex,
          text: message,
          footer:
            'Your Order is on the way Click <a href="#">here</a>' +
            "to track your order",
        });
      },
    });
  
    handler.openIframe();
  }

  return (
    <div>Payment</div>
  )
}

export default Payment