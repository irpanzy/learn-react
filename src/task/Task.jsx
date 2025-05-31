import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);

  function handleChanege(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setItems((items) => {
      items.push(item);
    });
    setItem("");
  }
  return (
    <div>
      <h1>Crete Task</h1>
      <form>
        <input value={item} onChange={handleChanege} />
        <button onClick={handleClick}>Add</button>
      </form>
      <h1>List Tasks</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
