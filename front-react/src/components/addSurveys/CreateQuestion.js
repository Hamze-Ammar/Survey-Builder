import React, { useState, useEffect } from "react";
import AddChoice from "./AddChoice";
import AddChoiceDuo from "./AddChoiceDuo";
import AlertMessage from "./AlertMessage";

export default function CreateQuestion({
  track_question_num,
  setTrackQuestionNum,
  start_submission,
  survey_id,
}) {
  //let survey_id = survey_id;

  //Track num of questions increment by 1 with every new question
  useEffect(() => {
    setTrackQuestionNum(track_question_num + 1);
  }, []);

  const [add, setAdd] = useState(false);
  const [question_context, setQuestionContext] = useState("");
  const [question_type, setQuestionType] = useState("");
  const types_of_multiple_choices = ["checkbox", "radio"];
  const types_of_duo_choices = ["range"];
  const [msg, setMsg] = useState(false);

  // To send to the question id to the children routes | choices
  const [question_id, setQuestionId] = useState("");

  const addNewQuestion = () => {
    if (!question_context || !question_type) {
      setMsg(true);
      return;
    }
    setMsg(false);
    setAdd(true);
  };

  // Preparing data to send request
  // we need context, survey_id, type
  useEffect(() => {
    if (start_submission && survey_id) {
      //console.log("submision started");
      //console.log("question context: " + question_context);
      //console.log('survey_id: '+ survey_id);
      //console.log("question: " + question_type);
      //let survey_id = survey_id;
      submitQuestion();
    }
  }, [start_submission]);

  const submitQuestion = async () => {
    let info = {};
    info.url = "http://127.0.0.1:8000/api/v1/admin/add_question";
    info.token = "Bearer " + localStorage.getItem("access_token");
    let context = question_context;
    //let survey_id = survey_id;
    let type = question_type;
    info.data = { context, survey_id, type };
    setQuestionId(await sendRequest(info));
    //console.log(question_id);
    //setSurveyId(id);
    //setStartSubmission(true);
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
    //console.log(data);
    let id = await data.question_id;
    //console.log(id);
    return id;
  };

  return (
    <div>
      <br />
      <h4>#Question:</h4>
      <label htmlFor="context">Question Context:</label>
      <input
        style={{ backgroundColor: "white" }}
        type="text"
        name="context"
        id=""
        placeholder="Type your question"
        onChange={(e) => {
          setQuestionContext(e.target.value);
        }}
      />{" "}
      <br />
      <label htmlFor="types">Choose question type:</label>
      <select
        id="types"
        name="types"
        className="normal-size normal-height"
        onChange={(e) => {
          setQuestionType(e.target.value);
        }}
      >
        <option>Select Type</option>
        <option value="text">text</option>
        <option value="checkbox">checkbox</option>
        <option value="radio">radio</option>
        <option value="datetime">datetime</option>
        <option value="number">number</option>
        <option value="range">range</option>
      </select>
      {types_of_multiple_choices.includes(question_type) && (
        <AddChoice
          start_submission={start_submission}
          question_id={question_id}
        />
      )}
      {types_of_duo_choices.includes(question_type) && (
        <AddChoiceDuo
          start_submission={start_submission}
          question_id={question_id}
        />
      )}
      <br /> <br /> <br />
      <button className="normal-size" onClick={addNewQuestion}>
        Add New Question
      </button>
      {msg && <AlertMessage text={"Missing values!"} />}
      <br /> <br /> <br />
      <hr style={{ borderColor: "gray" }} />
      {add && (
        <CreateQuestion
          track_question_num={track_question_num}
          setTrackQuestionNum={setTrackQuestionNum}
          start_submission={start_submission}
          survey_id={survey_id}
        />
      )}
    </div>
  );
}
