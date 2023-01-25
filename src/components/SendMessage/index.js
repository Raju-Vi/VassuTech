import React from "react";
import "./index.css";

const SendMessage = () => {
  return (
    <div className="form-container">
      <form>
        <div className="top">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
        </div>
        <textarea placeholder="Message" />
        <div className="button-container">
          <button className="button">SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
