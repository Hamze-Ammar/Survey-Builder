import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Question from "./Question";
import Questions from "./Questions";
import Wrapper from "./Wrapper";

export default function FillSurvey() {
  //onsbmit questions button:
  const [submitQuestions, setSubmitQuestions] = useState(false);


  const location = useLocation();
  let myid = location.state.id;
  let survey_name = location.state.name;
  //let data_id = {"id":myid};
  // console.log(survey_name);

  // Initialize State
  const [questions, setQuestions] = useState([]);

  //Fetch one questions from backend
  const fetchQuestions = async (id) => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/survey/get_servey_questions/${id}`
    );
    const data = await res.json();
    //console.log(data.res);
    return data.res;
  };

  // Initialize all questions into state from backend at component load
  // We pass the survey id to get its questions
  useEffect(() => {
    const getQuestions = async (id) => {
      const dataFromServer = await fetchQuestions(id);
      setQuestions(dataFromServer);
      //console.log(questions);
    };
    getQuestions(myid);
  }, []);

  return (
    <>
      <Wrapper>
        <br></br> <h1 className="title-bgd">Survey Name:  "{survey_name}"</h1> <br />
        <p>Please read and answer the questions below carefully*</p>
        {questions.length > 0 ? (
          <Questions questions={questions} submitQuestions={submitQuestions} />
        ) : (
          "No Questions To Show"
        )}
        <button className="extra-margin" onClick={()=>{setSubmitQuestions(true)}} >Submit</button>
      </Wrapper>
    </>
  );
}
