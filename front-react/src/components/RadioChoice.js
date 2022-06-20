import React from "react";

export default function RadioChoice(props) {
  let choice = props.choice;
  console.log("props", props);
  console.log("props", props.choice.question_id);
  return (
    <>
      
      <input
        type="radio"
        id={choice.context}
        name={props.choice.question_id}
        value={choice.context}
      /> {"  "}
      <label htmlFor={choice.context}>{choice.context}</label>
      <br /> <br />
    </>
  );
}
