import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import RadioChoice from "./RadioChoice";

export default function Choices(props) {
  let choices = props.choices;
  let submitQuestions = props.submitQuestions;
  let question_id = props.question_id;
  //console.log(type.toString());
  // console.log(type)
  // console.log("from choices line 8: " +submitQuestions, props.question_id);
    // console.log("from choices line 9: " + props.choices.choices);

  //the two lines below responsible to track the checked radio button
  const [answer, setAnswer] = useState('');
  console.log(answer);

  // Prepare to send data on submit: {for radio button only since it's a special case}
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
    <>
      {props.type === "radio" && (
        <>
          {" "}
          {choices.map((choice) => {
            return (
              <RadioChoice
                key={choice.id}
                choice={choice}
                question_id={question_id}
                submitQuestions={submitQuestions}
                onchange={setAnswer}
              />
            );
          })}{" "}
        </>
      )}

      {props.type === "checkbox" && (
        <>
          {choices.map((choice) => {
            return (

              <Checkbox
                key={choice.id}
                choice={choice}
                question_id={question_id}
                submitQuestions={submitQuestions}
              />
            );
          })}
        </>
      )}
    </>
  );
}
