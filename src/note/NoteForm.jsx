import React, { useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = React.useContext(NotesDispatchContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setText("");
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Add note"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}> Add </button>
    </div>
  );
}
