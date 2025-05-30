import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import ToDo from "../to-do-list/ToDo";
import ToDoList from "../to-do-list/ToDoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <ToDoList />
      <Table />
      <AlertButton text="Click Gw" message="Ups, lupa kasih teks" />
      <MyButton text="Smash gw" onSmash={() => alert("Smash, lupa kasih teks")} />
    </Container>
  </StrictMode>
);
