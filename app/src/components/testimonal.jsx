import React from 'react';
import "./testimonal.css";
import Star from "./Images/Stars.jpg";
import Oval from "./Images/Oval.png";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-header Image">
        <img
          src={Oval}
          alt="Franklin Hicks"
          className="testimonial-image"
        />
</div>
        <div className="star">
          
          <img src={Star}/>
        </div>
      
      <p className="testimonial-text">
        "OMG! I cannot believe that I have got a brand new landing page after
        getting Albino. It was super easy to edit and publish."
      </p>
      <p className="testimonial-author">Franklin Hicks, Web Developer</p>
    </div>
  );
};

export default Testimonial;