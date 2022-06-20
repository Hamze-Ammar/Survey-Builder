import React, { useState, useEffect } from "react";

export default function Checkbox(props) {
  //console.log(props.choice.id);
  let id = props.choice.id;
  let value = props.choice.context;
  ///console.log(props.choice.context);
  let question_id = props.question_id;
  let submitQuestions = props.submitQuestions;

  const [answer, setAnswer] = useState("");
  console.log(answer);

  // Prepare to send data on submit: {for checkbox button only since it's a special case}
  // we need to check to answer === true check line 17
  useEffect(() => {
    if (submitQuestions && question_id && answer) {
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
      <input
        type="checkbox"
        id={id}
        name={id}
        value={value}
        onChange={(e) => { answer? setAnswer('') :
          setAnswer(e.target.value);
        }}
      />{" "}
      <label for={id}> {value}</label>
      <br />
    </div>
  );
}
