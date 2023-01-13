import React, { useId } from "react";

export function InputTextField({ get, set, partOfSpeech }) {
  const fieldId = `${partOfSpeech}-${useId()}`;

  return (
    <div className="input-group">
      <label htmlFor={fieldId}>
        {partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1) + ": "}
      </label>

      <input
        id={fieldId}
        type="text"
        value={get}
        placeholder={partOfSpeech}
        onChange={(e) => {
          set(e.target.value);
        }}
      />
    </div>
  );
}
