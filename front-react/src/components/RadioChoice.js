import React, { useState } from "react";

export default function RadioChoice(props) {
  let choice = props.choice;
  let question_id = props.question_id;
  // console.log("props.question_id: question_id", question_id);
  // console.log("props", props.choice.question_id);
  let submitQuestions = props.submitQuestions;
  // console.log("from radioChoice line 8: " +question_id, submitQuestions);

  

  return (
    <>
      <input
        type="radio"
        id={choice.context}
        name={props.choice.question_id}
        value={choice.context}
        onChange={(e)=>{props.onchange(e.target.value)}}
      />{" "}
      {"  "}
      <label htmlFor={choice.context}>{choice.context}</label>
      <br /> <br />
    </>
  );
}
