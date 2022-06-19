import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import CreateQuestion from "./CreateQuestion";

export default function CreateSurvey(props) {
  const [msg, setMsg] = useState(false);
  const [startCreation, setStartCreation] = useState(false);

  // To track the number of questions we pass these variable to every new question
  const [track_question_num, setTrackQuestionNum] = useState(0);
  //console.log(track_question_num);

  //Collecting Survey Data:
  const [title, setTitle] = useState("");
  const [num_of_questions, setNumOfQuestions] = useState(0);
  const [survey_id, setSurveyId] = useState('');
  const [start_submission, setStartSubmission] = useState(false);

  //Create an object to hold the survey info
  let mySurvey = {};
  mySurvey.name = title ;
  mySurvey.num_of_questions = track_question_num;
  //console.log(mySurvey);

  const startSurvey = () => {
    setMsg(false);
    if (!title || !num_of_questions) {
      setMsg(true);
      return;
    }
    setStartCreation(true);
  };

  const submitServey = async () => {
    let info = {};
    info.url = 'http://127.0.0.1:8000/api/v1/admin/add_survey';
    info.token = 'Bearer ' + localStorage.getItem('access_token');
    let name = mySurvey.name;
    let num_of_questions = mySurvey.num_of_questions;
    info.data = {name,  num_of_questions }
    let id = await sendRequest(info);
    setSurveyId(id);
    setStartSubmission(true);
    //console.log(survey_id);
  }

  const sendRequest = async (info) => {
    const res = await fetch(info.url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": info.token
      },
      body: JSON.stringify(info.data),
    });
    const data = await res.json();
    let id = await data.survey_id;
    return id;
  };

  return (
    <div>
      <br />
      <h3>Create Survey*</h3>
      <label htmlFor="name">Survey Name:</label>
      <input
        style={{'backgroundColor':'white'}}
        placeholder="Survey Name"
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
      {startCreation && <CreateQuestion track_question_num={track_question_num} setTrackQuestionNum={setTrackQuestionNum} />}
      {startCreation && <button onClick={submitServey}>Save Survey</button>}
    </div>
  );
}
