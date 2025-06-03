import React, { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setMessage("");

    nameInput.current.focus();

    alert(`Name: ${name}\nMessage: ${message}`);
  }
  return (
    <div>
      <h1>Guest Book</h1>
      <form action="">
        <GuestBookForm
          ref={nameInput}
          name={name}
          setName={setName}
          message={message}
          setMessage={setMessage}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
