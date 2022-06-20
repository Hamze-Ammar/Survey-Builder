import React, { useState, useEffect } from "react";

export default function Range({ choices, question_id, submitQuestions }) {
  //console.log(choices[0].context);
  let min = choices[0].context;
  let max = choices[1].context;
  //console.log(min);
  const [answer, setAnswer] = useState('');

  // console.log("from Range line10 "+ submitQuestions,question_id)

   // Prepare to send data on submit:
   useEffect(() => {
    if (submitQuestions && question_id) {
            submitAnswer(answer);
        // Try redirect admin to a new page once the suyvey is submitted
    }
  }, [submitQuestions, question_id]);

  const submitAnswer = async (mycontext) => {
    let info = {};
    info.url = "http://127.0.0.1:8000/api/v1/survey/save_answer";
    info.token = "Bearer " + localStorage.getItem("access_token");
    let context = mycontext;
    info.data = { context, question_id };
    sendRequest(info);
  };

  const sendRequest = async (info) => {
    const res = await fetch(info.url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: info.token,
      },
      body: JSON.stringify(info.data),
    });
    const data = await res.json();
    console.log(data);
  };


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
            setAnswer(e.target.value);
          }}
        />
        {max} : max
      </label>{" "}
      <br /> <br /> <br />
      {answer && answer}
    </div>
  );
}
