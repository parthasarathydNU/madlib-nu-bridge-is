import './App.css';
import { useState } from 'react';
import { Input } from './Input';

function App() {

  const [word1, setWord1] = useState("")
  const [word2, setWord2] = useState("")
  const [word3, setWord3] = useState("")
  const [word4, setWord4] = useState("")
  const [word5, setWord5] = useState("")

  return (
    <div className="App">
      <img style={{height:"10rem"}} src="http://www.9yahds.com/content/uploads/2015/05/midlib3.png" />

      <h1>Inputs</h1>
      <form>
        <Input get={word1} set={setWord1} partOfSpeech={"adjective"} />
        <Input get={word2} set={setWord2} partOfSpeech={"adjective"} />
        <Input get={word3} set={setWord3} partOfSpeech={"noun"} />
        <Input get={word4} set={setWord4} partOfSpeech={"verb"} />
        <Input get={word5} set={setWord5} partOfSpeech={"verb"} />
      </form>
    </div>
  );
}

export default App;
