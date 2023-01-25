import React from "react";
import "./index.css";

const ourServices = [
  {
    image: "https://www.vassutech.com/images/001.png",
    title: "Blackchanin Innovation",
    discription:
      "Vassutech Bussiness Intellegence & Analytic solutions offers actionable intellegence that has transformed many organization into dynamic...",
  },
  {
    image: "https://www.vassutech.com/images/002.png",
    title: "Testing COE",
    discription:
      "Vassutech Bussiness Intellegence & Analytic solutions offers actionable intellegence that has transformed many organization into dynamic...",
  },
  {
    image: "https://www.vassutech.com/images/003.png",
    title: "Cloud Transformation",
    discription:
      "Vassutech Bussiness Intellegence & Analytic solutions offers actionable intellegence that has transformed many organization into dynamic...",
  },
  {
    image: "https://www.vassutech.com/images/004.png",
    title: "Telicom 5G",
    discription:
      "Vassutech Bussiness Intellegence & Analytic solutions offers actionable intellegence that has transformed many organization into dynamic...",
  },
  {
    image: "https://www.vassutech.com/images/005.png",
    title: "Health Care",
    discription:
      "Vassutech Bussiness Intellegence & Analytic solutions offers actionable intellegence that has transformed many organization into dynamic...",
  },
  {
    image: "https://www.vassutech.com/images/006.png",
    title: "BI Analytics & AI / Machine Learning",
    discription:
      "Vassutech Bussiness Intellegence & Analytic solutions offers actionable intellegence that has transformed many organization into dynamic...",
  },
];

const OurServices = () => {
  return (
    <div>
      <h1 className="title">Our Services</h1>
      <hr className="hr" align="left" />
      <div className="card-container">
        {ourServices.map((service, index) => (
          <div className="card" key={index}>
            <div className="our-pservices">
              <img src={service.image} alt="a" className="our-service-image" />
            </div>
            <h5 className="card-title">{service.title}</h5>
            <p className="card-description">{service.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
