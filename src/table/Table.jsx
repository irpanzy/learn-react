import React from "react";
import Row from "./row";

export default function Table() {
  return (
    <table border="1">
      <tbody>
        <Row id={1} text="Row 1" />
        <Row id={2} text="Row 2" />
        <Row id={3} text="Row 3" />
        <Row id={4} text="Row 4" />
      </tbody>
    </table>
  );
}
