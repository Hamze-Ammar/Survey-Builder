import React, { useState, useEffect } from "react";
import AddChoice from "./AddChoice";
import AddChoiceDuo from "./AddChoiceDuo";
import AlertMessage from "./AlertMessage";

export default function CreateQuestion({track_question_num, setTrackQuestionNum}) {
    //Track num of questions increment by 1 with every new question
    useEffect(() => {
        setTrackQuestionNum(track_question_num+1)
    }, []);

  const [add, setAdd] = useState(false);
  const [question_context, setQuestionContext] = useState("");
  const [question_type, setQuestionType] = useState("");
  const types_of_multiple_choices = ["checkbox", "radio"];
  const types_of_duo_choices = [ "range"];
  const [msg, setMsg] = useState(false);


  const addNewQuestion = () => {
    if (!question_context || !question_type){
        setMsg(true);
        return;
    }
    setMsg(false);
    setAdd(true);
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
      {types_of_multiple_choices.includes(question_type) && <AddChoice />}
      {types_of_duo_choices.includes(question_type) && <AddChoiceDuo />}
      <br /> <br /> <br />
      <button className="normal-size" onClick={addNewQuestion}>
        Add New Question
      </button>
      {msg && <AlertMessage text={"Missing values!"} />}
      <br /> <br /> <br />
      <hr style={{ borderColor: "gray" }} />
      {add && <CreateQuestion track_question_num={track_question_num} setTrackQuestionNum={setTrackQuestionNum}/>}
    </div>
  );
}
