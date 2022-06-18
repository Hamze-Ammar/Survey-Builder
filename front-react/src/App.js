import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Survey from "./components/Survey";
import Surveys from "./components/Surveys";
import Wrapper from "./components/Wrapper";

function App() {
  // Initialize State
  const [surveys, setSurveys] = useState([]);

  //Fetch All Surveys from Backend
  const fetchSurveys = async () => {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/v1/survey/get_serveys"
      );
      const data = await res.json();

      setSurveys(data.res);

    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="App">
      <Navbar allSurveys={fetchSurveys} />
      <Wrapper>
        {surveys.length > 0 ? (
          <Surveys surveys={surveys} />
        ) : (
          "No Tasks To Show"
        )}
      </Wrapper>
    </div>
  );
}

export default App;
