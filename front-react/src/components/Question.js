import React from "react";
import Choices from "./Choices";
import Text from "./Text";
import Number from "./Number";
import Datetime from "./Datetime";
import Range from "./Range";
import Checkbox from "./Checkbox";

export default function Question({question, index, submitQuestions}) {
  let my_index = index +1;
    //console.log(question);
    question = question;
    let type = question.question_type.type;
    let question_id = question.id
    // console.log("from question line 8: "+type);
    // console.log("id line 10 "+question_id);
    let choices = question.choices;
  return (
    <div>
      <br />
      <h3># {my_index} - {question.context} </h3>
      {/* <p>question type: {type}</p> */}

      {choices.length > 0 && (
        <Choices choices={choices} type={type} question_id={question_id} submitQuestions={submitQuestions}  />
      )}

      {type==="text" && <Text  question_id={question_id} submitQuestions={submitQuestions} />}
      {type==='number' && <Number question_id={question_id} submitQuestions={submitQuestions}/> }
      {type==='datetime' && <Datetime question_id={question_id} submitQuestions={submitQuestions}/>}
      {type==='range' && <Range choices={choices} question_id={question_id} submitQuestions={submitQuestions}/>}

        <br />
      <hr style={{ borderColor: "gray" }} />

    </div>
  );
}
