import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./index.css";

const GetInTouch = () => {
  return (
    <div>
      <h1 className="git-title">Get In Touch</h1>
      <hr className="hr" align="left" />
      <div className="git-container">
        <div className="git-items">
          <RoomIcon fontSize="large" sx={{ color: "#6274cc" }} />
          <p className="git-item-title">Address</p>
          <p className="git-description">
            Vassu Tech Services Inc. Venture Labs, <br /> 3600 Steeles Ave. E.
            Room B114,
            <br /> Markham
          </p>
        </div>
        <div className="git-items">
          <PhoneCallbackIcon fontSize="large" sx={{ color: "#6274cc" }} />
          <p className="git-item-title">Call Us On</p>
          <p className="git-description">+1 (647)-242-6434</p>
        </div>
        <div className="git-items">
          <MailOutlineIcon fontSize="large" sx={{ color: "#6274cc" }} />
          <p className="git-item-title">Mail Us @</p>
          <p className="git-description">info@vassutech.Com</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
