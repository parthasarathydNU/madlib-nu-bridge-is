import { useState } from "react";
import Output from "./Output";
import "./App.css";

function App() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");
  const [word5, setWord5] = useState("");

  return (
    <div className="App">
      <h1>Oasis Madlib</h1>
      <form>
        <Input
          name={"word1"}
          get={word1}
          set={setWord1}
          partOfSpeech={"adjective"}
        />
      </form>

      <Output
        word1={word1}
        word2={word2}
        word3={word3}
        word4={word4}
        word5={word5}
      />
    </div>
  );
}

export default App;
