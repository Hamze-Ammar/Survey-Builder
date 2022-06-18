import React from "react";

export default function RadioChoice(props) {
  let choice = props.choice;
  //console.log(choice);
  return (
    <>
      <input type="radio" />
      <span>{choice.context}</span>
    </>
  );
}
