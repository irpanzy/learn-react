import React from "react";

export default function AlertButton({ text, message }) {
  function handleClick() {
    alert(message);
  }
  return <button onClick={handleClick}>{text}</button>;
}
