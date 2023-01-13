export default function Output({ word1, word2, word3, word4, word5 }) {
  return (
    <div className="output">
      <h1>Output</h1>

      <p>
        Welcome to Oasis, the ultimate destination for computer science majors
        at Northeastern! As a member, you'll have access {word1} events,
        {word2} opportunities to network, and the chance to meet others who
        share your passion for {word3}. Whether you're looking to improve your
        coding skills, learn a new technology, or just want to {word4} with
        other CS enthusiasts, Oasis is the perfect place for you. So join us,
        and let's
        {word5} together!
      </p>
    </div>
  );
}
