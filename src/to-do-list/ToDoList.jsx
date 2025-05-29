import React from "react";
import ToDo from "./ToDo";

export default function ToDoList() {
  return (
    <ul>
      <ToDo text="Learn HTML" isCompleted={true} isDeleted />
      <ToDo text="Learn CSS" isCompleted={true} isDeleted />
      <ToDo text="Learn JavaScript" isCompleted={true} />
      <ToDo text="Learn React" isCompleted={true} />
      <ToDo text="Learn Redux" isCompleted={false} />
      <ToDo text="Learn React Router" isCompleted={false} />
      <ToDo text="Learn React Hooks" isCompleted={false} />
      <ToDo text="Learn React Context" isCompleted={false} />
      <ToDo text="Learn React Testing Library" isCompleted={false} />
      <ToDo text="Learn React Native" isCompleted={false} />
    </ul>
  );
}
