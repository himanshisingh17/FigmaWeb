import React from "react";
import "./styles.css";
import Graphic from './Images/Designer-rafiki.png';
import Web from './Images/Programming-rafiki.png';
import Notes from './Images/Notes-rafiki.png';


const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>OUR SERVICES</h1>
        <h2>We provide great services for our</h2>
        <h2>customers based on needs</h2>
      </div>
      <div className="services">
        <div className="service color1">
       
          <img src={Graphic} alt="Graphic Design" />
          <h3>Graphic Design</h3>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button>Learn more</button>
        </div>
        <div className="service color2">
          <img src={Web} alt="Web Development" />
          <h3>Web Development</h3>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button>Learn more</button>
        </div>
        <div className="service color3">
          <img src={Notes} alt="Content Writing" />
          <h3>Content Writing</h3>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      </div>
   
  );
};

export default App;
