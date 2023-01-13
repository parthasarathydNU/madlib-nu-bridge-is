import "./Output.css";

export default function Output({ word1, word2, word3, word4, word5 }) {
  return (
    <div className="output">
      <h1>Output</h1>

      <h2>An Oasis Welcome</h2>

      <p>
        Welcome to Oasis, the ultimate destination for computer science majors
        at Northeastern! As a member, you'll have access to <b>{word1}</b>{" "}
        events, <b>{word2}</b> opportunities to network, and the chance to meet
        others who share your passion for <b>{word3}</b>. Whether you're looking
        to improve your coding skills, learn a new technology, or just want to{" "}
        <b>{word4}</b> with other CS enthusiasts, Oasis is the perfect place for
        you. So join us, and let's <b>{word5}</b> together!
      </p>
    </div>
  );
}
