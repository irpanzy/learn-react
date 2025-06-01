import React from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useImmerReducer } from "use-immer";

let id = 0;
const data = [
  {
    id: id++,
    text: "Learn HTML",
    done: false,
  },
  {
    id: id++,
    text: "Learn CSS",
    done: false,
  },
  {
    id: id++,
    text: "Learn JavaScript",
    done: false,
  },
  {
    id: id++,
    text: "Learn React",
    done: false,
  },
  {
    id: id++,
    text: "Learn Redux",
    done: false,
  },
  {
    id: id++,
    text: "Learn React Router",
    done: false,
  },
  {
    id: id++,
    text: "Learn React Hooks",
    done: false,
  },
  {
    id: id++,
    text: "Learn React Context",
    done: false,
  },
  {
    id: id++,
    text: "Learn React Testing Library",
    done: false,
  },
  {
    id: id++,
    text: "Learn React Native",
    done: false,
  },
];

function notesReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "UPDATE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
}
export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, data);

  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "UPDATE_NOTE",
      id: note.id,
      text: note.text,
      done: note.done,
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }
  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
