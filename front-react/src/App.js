import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Survey from "./components/Survey";
import Surveys from "./components/Surveys";
import Wrapper from "./components/Wrapper";
import FillSurvey from "./components/FillSurvey";
import Register from "./components/Register";
import Login from "./components/Login";

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
    <BrowserRouter>
      <div className="App">
        <Navbar allSurveys={fetchSurveys} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Wrapper>
                  {surveys.length > 0 ? (
                    <Surveys surveys={surveys} />
                  ) : (
                    "No Tasks To Show"
                  )}
                </Wrapper>
              </>
            }
          ></Route>
          <Route
            path="/fill_survey"
            element={
              <>
              <FillSurvey/>
              </>
            }
            ></Route>
            <Route
            path="/login"
            element={
              <>
              <Login/>
              </>
            }
            ></Route>
            <Route
            path="/register"
            element={
              <>
              <Register/>
              </>
            }
            ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
