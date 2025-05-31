import React, { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  console.log(`render counter ${counter}`);
  return (
    <div>
      <button
        onClick={() => {
          setCounter((c) => c + 5);
          setCounter((c) => c + 5);
          setCounter((c) => c + 5);
          console.log(counter);
        }}
      >
        Increment
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
