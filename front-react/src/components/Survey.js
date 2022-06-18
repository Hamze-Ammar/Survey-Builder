import React from "react";

export default function Survey(survey) {

  return (
    <div className="Survey-box">
      <h3>{survey.survey.name}</h3>
      <p>{survey.survey.num_of_questions} questions</p>

    </div>
  );
}
