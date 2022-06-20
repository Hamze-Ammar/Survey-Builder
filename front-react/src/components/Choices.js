import React from "react";
import Checkbox from "./Checkbox";
import RadioChoice from "./RadioChoice";

export default function Choices(props) {
  let choices = props.choices;
  //console.log(type.toString());
  // console.log(type)
  console.log("from choices line 8: " + props);
  //   console.log("from choices line 9: " + props.choices.choices);
  return (
    <>
      {props.type === "radio" && (
        <>
            {" "}
            {choices.map((choice) => {
              return <RadioChoice key={choice.id} choice={choice} />;
            })}{" "}
        </>
      )}

      {props.type === 'checkbox' && ( <>
        {choices.map((choice) => {
          return <Checkbox key={choice.id} choice={choice} />
        })}
        </>
      )}
    </>
  );
}
