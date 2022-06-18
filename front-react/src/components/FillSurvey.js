import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Question from "./Question";
import Questions from "./Questions";
import Wrapper from "./Wrapper";

export default function FillSurvey() {
  const location = useLocation();
  let myid = location.state.id;
  //let data_id = {"id":myid};
  console.log(myid);

  // Initialize State
  const [questions, setQuestions] = useState([]);

  //Fetch one questions from backend
  const fetchQuestions = async (id) => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/survey/get_servey_questions/${id}`
    );
    const data = await res.json();
    console.log(data.res);
    return data.res;
  };

  // Initialize all questions into state from backend at component load
  useEffect(() => {
    const getQuestions = async (id) => {
      const dataFromServer = await fetchQuestions(id);
      setQuestions(dataFromServer);
      console.log(questions);
    };
    getQuestions(myid);
  }, []);

  return (
    <><Wrapper>
        <br></br>
      {questions.length > 0 ? (
        <Questions questions={questions} />
      ) : (
        "No Questions To Show"
      )}
      </Wrapper>
    </>
  );
}
