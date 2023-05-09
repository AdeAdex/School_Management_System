import React from "react";

const Contact_Us_Form = () => {
  return (
    <>
      <div className="contact-form shadow">
        <form>
          
          <input type="text" required="" placeholder="NAME" className="text-capitalize" />
          <input type="email" id="email" name="email" required="" placeholder="EMAIL" autoComplete="off" />
          <textarea id="message" name="message" required="" placeholder="MESSAGE" className="text-capitalize textarea"></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </>
  );
};

export default Contact_Us_Form;
