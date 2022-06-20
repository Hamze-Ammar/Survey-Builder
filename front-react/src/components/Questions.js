import React from "react";
import Question from "./Question";

export default function Questions(questions) {
    //console.log(questions.questions);
    questions = questions.questions;
    //console.log(questions);

  return (
    <div>
      {questions.map((question, index) => (
        <Question key={question.id} question={question} index={index} />
      ))}
    </div>
  );
}
