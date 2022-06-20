import React from "react";
import Question from "./Question";

export default function Questions(props) {
  //console.log(questions.questions);
  let questions = props.questions;
  let submitQuestions = props.submitQuestions;
  //console.log(questions);
  //console.log("hi");

  return (
    <div>
      {questions.map((question, index) => (
        <Question key={question.id} question={question} index={index} submitQuestions={submitQuestions} />
      ))}
    </div>
  );
}
