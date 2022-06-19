import React, { useState } from "react";
import CreateSurvey from "./addSurveys/CreateSurvey";
import Wrapper from "./Wrapper";

export default function Admin() {
    const text = "A new survey has been created!"
    const [addingServey, setAddingServey] = useState(false);

    const createMeSurvey = () => {
        console.log("a new survey has been created!")
        setAddingServey(true);
    }

    const deleteSurvey = () => {
        setAddingServey(false);
    }

  return (
    <div>
      <h1>Admin Panel</h1>
      <hr />
      <button className="normal-size" onClick={createMeSurvey}>Create new survey</button>
      <br />
      <Wrapper>
        {addingServey && text}
        {addingServey && <CreateSurvey remove={deleteSurvey}/>}
      </Wrapper>
      

    </div>
  );
}
