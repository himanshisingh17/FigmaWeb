import logo from './logo.svg';
import './App.css';
import fill from './Images/Fill.png';
import oval from './Images/Oval.png';
import Services from "./components/Services";
import Testimonal from "./components/testimonal";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ContactModal from './components/ContactModal';
import { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [open, setOpen] = useState(false)

  // const navigate=useNavigate();
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brainwave.io</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Demos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => setOpen(true)}>Contact</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>navigate("/PostForm")}>Contact</a>
        </li> */}
      </ul>
      <span class="navbar-text">
      <button type="button" class="btn btn-primary">Get statrted a Project</button>
      </span>
    </div>
  </div>
</nav>

<div class="container" id="main-div">
  <div class="box1">
  <h1>Let's Shift your business</h1>
        <h2>Shift your business fast with Shade Pro.</h2>
        <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
        <button class="button" id="bt">Get started a project</button>
  </div>
  <div class="image-container box2">
      <div class="image1">
      <img src={fill} alt="Fill"/>
        <div class="image2">
      <img src={oval} alt="Oval" />
        </div>
        
      </div>
  </div>
</div>

<div className="container">

<Services/>
<Testimonal/>
<ContactModal open={open} handleClose={() => setOpen(false)} />
</div>
</>
  );
}


export default App;

