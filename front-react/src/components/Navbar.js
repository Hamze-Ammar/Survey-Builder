import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <div>
      <div className="topnav">
        <div>
          <a className="active" href="">
            Survey Builder
          </a>
         <Link to="/"><span href="#" onClick={props.allSurveys}> 
            All Surveys
            </span></Link>
          <a href="#">MySurveys</a>
          <a href="#">MyAnswers</a>
        </div>
        <div className="topnav-middle"></div>
        <div>
          <a className="topnav-right" href="#">
            Login
          </a>
          <a className="topnav-right" href="#">
            Register
          </a>
          <a className="topnav-right" href="#">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
