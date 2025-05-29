import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import ToDo from "../to-do-list/ToDo";
import ToDoList from "../to-do-list/ToDoList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <ToDoList />
    </Container>
  </StrictMode>
);
