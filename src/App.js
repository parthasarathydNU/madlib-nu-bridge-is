import "./App.css";
import { useState } from "react";
import { InputTextField } from "./InputTextField";
import Output from "./Output";

function App() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");
  const [word5, setWord5] = useState("");

  const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="App">
      <img
        style={{ display: "block", height: "10rem", margin: "0 auto" }}
        src="http://www.9yahds.com/content/uploads/2015/05/midlib3.png"
        alt="Mad Libs"
      />

      <div className="madlib">
        <form>
          <h1>Inputs</h1>

          <InputTextField
            get={word1}
            set={setWord1}
            partOfSpeech={"adjective"}
          />
          <InputTextField
            get={word2}
            set={setWord2}
            partOfSpeech={"adjective"}
          />
          <InputTextField get={word3} set={setWord3} partOfSpeech={"noun"} />
          <InputTextField get={word4} set={setWord4} partOfSpeech={"verb"} />
          <InputTextField get={word5} set={setWord5} partOfSpeech={"verb"} />

          <button
            onClick={(e) => {
              e.preventDefault();
              setShowOutput(!showOutput);
            }}
          >
            {showOutput ? "Hide Output" : "Show Output"}
          </button>
        </form>

        {showOutput ? (
          <Output
            word1={word1}
            word2={word2}
            word3={word3}
            word4={word4}
            word5={word5}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
