import React from "react";
import ToDo from "./ToDo";

export default function ToDoList() {
  const data = [
    { id: 1, text: "Learn HTML", isCompleted: true },
    { id: 2, text: "Learn CSS", isCompleted: true },
    { id: 3, text: "Learn JavaScript", isCompleted: true },
    { id: 4, text: "Learn React", isCompleted: true },
    { id: 5, text: "Learn Redux", isCompleted: false },
    { id: 6, text: "Learn React Router", isCompleted: false },
    { id: 7, text: "Learn React Hooks", isCompleted: false },
    { id: 8, text: "Learn React Context", isCompleted: false },
    { id: 9, text: "Learn React Testing Library", isCompleted: false },
    { id: 10, text: "Learn React Native", isCompleted: false },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
