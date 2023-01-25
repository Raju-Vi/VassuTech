import React from "react";
import { Navbar } from "react-bootstrap";
import Footer from "../Footer";
import GetInTouch from "../GetInTouch";
import OurServices from "../OurServices";
import Partners from "../Partners";
import SendMessage from "../SendMessage";
import "./index.css";

const Home = () => {
  return (
    <div>
      <div className="carousel">
        <Navbar />
        <div>
          <h1 className="carousel-title">
            BI Analytics and <br /> AI / Mechine Learning
          </h1>
        </div>
        <div>
          <button className="carousel-button">Learn More....</button>
        </div>
      </div>
      <div className="home">
        <OurServices />
        <Partners />
        <GetInTouch />
        <SendMessage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
