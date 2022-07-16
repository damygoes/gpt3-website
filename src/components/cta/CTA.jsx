import React from "react";
import "./cta.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init(
  {offset: 400,
    duration: 1000,}
);

const CTA = () => {
  return (
    <div className="gpt3__cta" data-aos="fade-left"
    >
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today and start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
