import React from "react";

export function Input({ get, set, partOfSpeech }) {
  return (
    <>
      <input
        id="text-input"
        type="text"
        value={get}
        placeholder={partOfSpeech}
        onChange={(e) => {
          set(e.target.value);
        }}
      />
    </>
  );
}
