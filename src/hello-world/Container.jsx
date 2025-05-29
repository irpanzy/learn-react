import React from "react";

export default function Container({ children }) {
  return (
    <div>
      <h1>Irpanzy</h1>
      {children}
      <footer>
        <p>2025 Irpanzy</p>
      </footer>
    </div>
  );
}
