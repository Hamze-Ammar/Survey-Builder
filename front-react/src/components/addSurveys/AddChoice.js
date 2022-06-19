import React, { useState , useEffect} from "react";

export default function AddChoice({ start_submission, question_id }) {
  // Prepare data
  const [choice_context_1, setChoiceContext1] = useState([]);
  const [choice_context_2, setChoiceContext2] = useState([]);
  const [choice_context_3, setChoiceContext3] = useState([]);
//   const [choices, setChoices] = useState([]);
//   console.log(choice_context_1);
// console.log("we are hereeee line 11")
// setTest(question_id);
// console.log(test);
console.log(start_submission, question_id );

  // Preparing data to send request
  // we need context, survey_id, type
  useEffect(() => {
    console.log("we are hereeee line 17")

    if (start_submission && question_id) {
        // setChoices([...choices, choice_context_1 ]);
        // setChoices([...choices, choice_context_2 ]);
        // setChoices([...choices, choice_context_3 ]);
        let mychoices = [choice_context_1, choice_context_2 , choice_context_3];
        console.log("we are hereeee line 24");
        console.log(choice_context_1);
        console.log(choice_context_2);
        console.log(choice_context_3);
        console.log(mychoices);
        console.log(mychoices.length);
        console.log("we are hereeee line 30");

        for(let i=0; i<mychoices.length; i++){
            console.log("submision started");
            console.log("choice context: " + mychoices[i]);
            //console.log('survey_id: '+ survey_id);
            submitChoice(mychoices[i]);
        }
    }
  }, [question_id]);

  const submitChoice = async (mycontext) => {
    let info = {};
    info.url = "http://127.0.0.1:8000/api/v1/admin/add_choice";
    info.token = "Bearer " + localStorage.getItem("access_token");
    let context = mycontext;
    //let question_id = question_id;
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
    //let id = await data.question_id;
    //console.log(id);
    //return id;
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
    </div>
  );
}
