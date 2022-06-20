import React, { useState, useEffect } from "react";
import AlertMessage from "./AlertMessage";

export default function AddChoice({ start_submission, question_id }) {
  // Prepare data
  const [choice_context_1, setChoiceContext1] = useState("");
  const [choice_context_2, setChoiceContext2] = useState("");
  const [choice_context_3, setChoiceContext3] = useState("");

  const [msg, setMsg] = useState(false);


  // Preparing data to send request
  // we need context, survey_id, type
  useEffect(() => {
    if (
      start_submission &&
      question_id &&
      choice_context_1 &&
      choice_context_2 &&
      choice_context_3
    ) {
      let mychoices = [choice_context_1, choice_context_2, choice_context_3];
      for (let i = 0; i < mychoices.length; i++) {
        console.log("submision started");
        console.log("choice context: " + mychoices[i]);
        submitChoice(mychoices[i]);
      }
      setMsg(false);
      // Try redirect admin to a new page once the suyvey is submitted
    } else {
      if (start_submission) {
        setMsg(true);
      }
    }
  }, [question_id]);

  const submitChoice = async (mycontext) => {
    let info = {};
    info.url = "http://127.0.0.1:8000/api/v1/admin/add_choice";
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
      <label htmlFor="">Choice 1: </label>
      <input
        className="normal-size"
        style={{ backgroundColor: "white" }}
        type="text"
        placeholder="Choice1"
        onChange={(e) => {
          setChoiceContext1(e.target.value);
        }}
      />{" "}
      <br />
      <label htmlFor="">Choice 2: </label>
      <input
        className="normal-size"
        style={{ backgroundColor: "white" }}
        type="text"
        placeholder="Choice2"
        onChange={(e) => {
          setChoiceContext2(e.target.value);
        }}
      />{" "}
      <br />
      <label htmlFor="">Choice 3: </label>
      <input
        className="normal-size"
        style={{ backgroundColor: "white" }}
        type="text"
        placeholder="Choice3"
        onChange={(e) => {
          setChoiceContext3(e.target.value);
        }}
      />{" "}
      <br />
      {msg && <AlertMessage text={"Missing values!"} />}
    </div>
  );
}
