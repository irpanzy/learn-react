import React from "react";

export default function ToDo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return <li>{isCompleted ? <del>{text}</del> : text}</li>;
  }
}
