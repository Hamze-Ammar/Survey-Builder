import React, { useState, useEffect } from 'react'

export default function Number(props) {
  let submitQuestions = props.submitQuestions;
  let question_id = props.question_id;

  const [answer, setAnswer] = useState('');
  // console.log(answer);

  // Prepare to send data on submit:
  useEffect(() => {
    if (submitQuestions && question_id) {
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



  // console.log("from Number line7 "+ submitQuestions,question_id)
  return (
    <div>
        <input onChange={(e)=>{setAnswer(e.target.value)}} placeholder='Type Number' className='normal-height' type="number" name="" id="" />
    </div>
  )
}
