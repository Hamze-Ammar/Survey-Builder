import React, { useState , useEffect} from "react";


export default function AddChoiceDuo({ start_submission, question_id }) {

    // Prepare data
  const [choice_context_1, setChoiceContext1] = useState([]);
  const [choice_context_2, setChoiceContext2] = useState([]);

    // Preparing data to send request
  // we need context, survey_id, type
  useEffect(() => {
    console.log("we are hereeee line 17")

    if (start_submission && question_id) {
        let mychoices = [choice_context_1, choice_context_2 ];
        for(let i=0; i<mychoices.length; i++){
            submitChoice(mychoices[i]);
        }
        // Try redirect admin to a new page once the suyvey is submitted
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
      <br />
      <label htmlFor="">min: </label>
      <input
        className="normal-size normal-height"
        type="number"
        placeholder="min"
        onChange={(e) => {
            setChoiceContext1(e.target.value);
          }}
      />
      <label htmlFor=""> max: </label>
      <input
        className="normal-size normal-height"
        type="number"
        placeholder="max"
        onChange={(e) => {
            setChoiceContext2(e.target.value);
          }}
      />
    </div>
  );
}
