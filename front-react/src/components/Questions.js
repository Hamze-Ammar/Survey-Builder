import React from "react";
import Question from "./Question";

export default function Questions(questions) {
    //console.log(questions.questions);
    questions = questions.questions;
    //console.log(questions);

  return (
    <>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </>
  );
}
