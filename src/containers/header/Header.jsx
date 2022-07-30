import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import { useState } from "react";


const Header = () => {
  const [email, setEmail] = useState("")
  const [count, setCount] = useState(0)



  const handleSubmit = () => {
    alert(`Thank you for requesting access`)
    let newCount = count + 1
    setCount(newCount)
    setTimeout(()=>{setEmail("")},100)  
  }


  return (
    <div className="gpt3__header section__padding" id="home" >
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachement. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" value={email} onChange={(e)=>{setEmail(e.target.value)}} />  
          <button type="button" onClick={handleSubmit}>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,60<span>{count}</span> people requested access to visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
