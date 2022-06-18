import React from "react";
import RadioChoice from "./RadioChoice";

export default function Choices(props) {
    let choices = props.choices;
  //console.log(type.toString());
  // console.log(type)
  console.log("from choices line 8: " + props.type);
//   console.log("from choices line 9: " + props.choices.choices);
  return (
    <>
    {props.type==="radio" && <>
      <form>
          {" "}
          {choices.map((choice) => (
            <RadioChoice key={choice.id} choice={choice} />
          ))}{" "}
        </form>
    </>
}
    </>
  );
}
