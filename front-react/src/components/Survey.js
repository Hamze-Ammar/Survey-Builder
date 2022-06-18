import React from "react";
import { Link } from "react-router-dom";

export default function Survey(survey) {
    let id = survey.survey.id;
    // console.log(id);
    let location =`/fill_survey/?id=${id}` ;
  return (
    <div className="Survey-box">
        <Link to={location} state={{id}}> <h3>{survey.survey.name}</h3>
      <p>{survey.survey.num_of_questions} questions</p>    </Link>
            
    
    </div>
  );
}
