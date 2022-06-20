import React, { useState } from "react";

export default function Range({ choices }) {
  //console.log(choices[0].context);
  let min = choices[0].context;
  let max = choices[1].context;
  console.log(min);
  const [rangeValue, setRangeValue] = useState("");

  return (
    <div>
      <label for="points">
        min: {min}{" "}
        <input
          type="range"
          id="points"
          name="points"
          min={min}
          max={max}
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
        />
        {max} : max
      </label>{" "}
      <br /> <br /> <br />
      {rangeValue && rangeValue}
    </div>
  );
}
