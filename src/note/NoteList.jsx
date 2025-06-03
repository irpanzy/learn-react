import React from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
  const notes = React.useContext(NotesContext);
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
}
