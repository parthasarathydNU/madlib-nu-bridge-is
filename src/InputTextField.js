import React from "react";

export function InputTextField({ get, set, partOfSpeech }) {
  return (
    <div>
      <ul>
        <label for="text-input">
          {partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1) + ": "}
        </label>

        <br />

        <input
          id="text-input"
          type="text"
          value={get}
          placeholder={partOfSpeech}
          onChange={(e) => {
            set(e.target.value);
          }}
        />
      </ul>
    </div>
  );
}
