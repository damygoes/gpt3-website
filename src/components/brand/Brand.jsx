import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

import "./brand.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init(
  {offset: 400,
    duration: 1000,}
);

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding" data-aos="fade-right"
    >
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
