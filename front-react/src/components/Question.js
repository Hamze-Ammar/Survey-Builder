import React from "react";
import Choices from "./Choices";

export default function Question(question) {
    //console.log(question);
    question = question.question;
    let type = question.question_type.type;
    // console.log("from question line 8: "+type);
    //console.log(question.choices);
    let choices = question.choices;
  return (
    <div>
      <h3># {question.context} ?</h3>
      <p>question type: {type}</p>

      {choices.length > 0 ? (
        <Choices choices={choices} type={type} />
      ) : (
        "No Choices To Show"
      )}

    </div>
  );
}
