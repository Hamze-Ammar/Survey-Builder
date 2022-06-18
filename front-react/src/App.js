import Navbar from "./components/Navbar";
import Survey from "./components/Survey";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Survey title={'Evaluation'} num_of_questions={'10'} />
        <Survey title={'Evaluation2'} num_of_questions={'17'} />
        <Survey title={'Evaluation3'} num_of_questions={'6'} />
      </Wrapper>
    </div>
  );
}

export default App;
