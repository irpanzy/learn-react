import React from "react";

export default function GuestBookForm({
  ref,
  name,
  setName,
  message,
  setMessage,
}) {
  return (
    <div>
      <label htmlFor="name">Name</label> <br />
      <input
        ref={ref}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="message">Message"</label>
      <br />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
    </div>
  );
}
