import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import TodoList from "./TodoList";

function TodoListItem({ title, onRemoveTodo, id }) {
  return (
    <>
      <li>{title}</li>
      <button type="button" onClick={() => onRemoveTodo(id)}>
        Remove
      </button>
    </>
  );
}

export default TodoListItem;
