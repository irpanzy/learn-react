import React from "react";

export default function SearchForm() {
  return (
    <form action="">
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("You Search");
        }}
      >
        Search
      </button>
    </form>
  );
}
