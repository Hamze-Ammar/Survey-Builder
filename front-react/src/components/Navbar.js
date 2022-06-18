import React from "react";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <div className="topnav">
        <div>
            <a className="active" href="">
          Survey Builder
        </a>
        <a href="#">All Surveys</a>
        <a href="#">MySurveys</a>
        <a href="#">MyAnswers</a>
        </div>
        <div className="topnav-middle">

        </div>
        <div>
           <a className="topnav-right" href="#">
          Login
        </a>
        <a className="topnav-right" href="#">
          register
        </a>
        <a className="topnav-right" href="#">
          Logout
        </a> 
        </div>
        
      </div>
    </div>
  );
}
