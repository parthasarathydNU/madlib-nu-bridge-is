import React from "react";

export function Input({ name, value }) {
  return (
    <>
      <label for="text-input">{name}</label>
      <input id="text-input" type="text" value={value} />
    </>
  );
}
