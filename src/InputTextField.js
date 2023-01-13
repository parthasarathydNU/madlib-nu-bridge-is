import React from "react";

export function InputTextField({ get, set, partOfSpeech }) {

  return (
    <div>
      <ul>
        <input
          id="text-input"
          type="text"
          value={get}
          style={style}
          placeholder={partOfSpeech}
          onChange={(e) => {
            set(e.target.value);
          }}
        />
      </ul>
    </div>
  );
}
