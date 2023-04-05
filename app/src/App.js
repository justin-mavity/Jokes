import Jokes from "./components/Jokes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Want to hear a Joke???</h1>
        <span>
          Please be aware that all jokes are coming from an exterinal api and
          may contain joke that might be offensive and/or inappropriate langauge
          and ideas.
        </span>
      </div>
      <Jokes />
    </div>
  );
}

export default App;
