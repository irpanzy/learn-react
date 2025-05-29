import React from "react";

export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  const text = "Hello World";
  return (
    <h1 style={{ color: "red", backgroundColor: "black" }}>
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text = "Welcome to ReactJS with Vite";
  const style = {
    color: "yellow",
    backgroundColor: "black",
  };

  return <p style={style}>{text.toLowerCase()}</p>;
}
