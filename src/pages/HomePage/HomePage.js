// HomePage.js
import React from 'react';
import './HomePage.css';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/sslogo.png';



const HomePage = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/search`; 
    navigate(path);
  }

  return (
    <div className="container">
      <div className="content-main">
        <h1 className="title"> <img src={logo} alt="sslogo" /></h1>
        <p className="description">Discover recipes by entering your ingredients!</p>
        <button className="ctaButton" onClick={routeChange}>Click to Try</button>
      </div>
      <footer className="footer-main">
      </footer> 
    </div>
  ); // Footer is unused currently.
};

export default HomePage;
