import React from "react";
import { Link } from "react-router-dom";

export default function Survey(survey) {
  let id = survey.survey.id;
  let name = survey.survey.name;
  // console.log('hello');
  // console.log("hl2 6" + survey.survey.name);
  let location = `/fill_survey/?id=${id}&&name=${name}`;
  return (
    <div className="Survey-box">
      <Link to={location} state={{ id, name }}>
        {" "}
        <h3>{survey.survey.name}</h3>
        <p>{survey.survey.num_of_questions} questions</p>{" "}
      </Link>
    </div>
  );
}
