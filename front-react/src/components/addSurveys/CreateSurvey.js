import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import CreateQuestion from "./CreateQuestion";

export default function CreateSurvey(props) {
  const [title, setTitle] = useState("");
  const [num_of_questions, setNumOfQuestions] = useState(0);
  const [msg, setMsg] = useState(false);
  const [startCreation, setStartCreation] = useState(false);

  const startSurvey = () => {
    setMsg(false);
    if (!title || !num_of_questions) {
      setMsg(true);
      return;
    }
    setStartCreation(true);
  };

  return (
    <div>
      <br />
      <h3>Create Survey*</h3>
      <label htmlFor="name">Survey Name:</label>
      <input
        type="text"
        name="name"
        id=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <label htmlFor="num_of_questions">Number of questions:</label>
      <input
        className="normal-height"
        type="number"
        min={1}
        name="num_of_questions"
        onChange={(e) => {
          setNumOfQuestions(e.target.value);
        }}
      />{" "}
      <br />
      <button className="normal-size" onClick={startSurvey}>
        Create
      </button>
      <button className="normal-size delete" onClick={props.remove}>
        Delete
      </button>{" "}
      <br />
      {msg && <AlertMessage text={"Missing values!"} />}
      <br /> <br />
      <hr style={{ borderColor: "#04aa6d" }} />
      {startCreation && <CreateQuestion />}
      <button>Save Survey</button>
    </div>
  );
}
