import React from "react";

export default function ToDo({ text, isCompleted }) {
  if (isCompleted) {
    return (
      <li>
        <del>{text}</del>
      </li>
    );
  } else {
    return <li>{text}</li>;
  }
}
