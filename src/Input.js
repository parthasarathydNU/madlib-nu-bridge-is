import React from "react";

export function Input({ get, set, partOfSpeech }) {
  return (
    <>
      <ul>
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
    </>
  );
}
