import React, { useState } from "react";

export default function Range() {
  const [rangeValue, setRangeValue] = useState("");

  return (
    <div>
      <label for="points">Points (between 0 and 10):</label> <br /> <br />
      <input
        type="range"
        id="points"
        name="points"
        min="0"
        max="10"
        onChange={(e) => {setRangeValue(e.target.value)}}
      /> <br />
      {rangeValue && rangeValue}
    </div>
  );
}
