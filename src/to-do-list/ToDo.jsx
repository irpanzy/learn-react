import React from "react";

export default function ToDo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else if (isCompleted) {
    return (
      <li>
        <del>{text}</del>
      </li>
    );
  } else {
    return <li>{text}</li>;
  }
}
