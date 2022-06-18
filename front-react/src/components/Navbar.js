import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <div className="topnav">
        <div>
          <a className="active" href="">
            Survey Builder
          </a>
          <a href="#" onClick={props.allSurveys}>
            All Surveys
          </a>
          <a href="#">MySurveys</a>
          <a href="#">MyAnswers</a>
        </div>
        <div className="topnav-middle"></div>
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
