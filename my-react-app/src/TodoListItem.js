import React from "react";

function TodoListItem({ todo, onRemoveTodo, id }) {
  return (
    <li>
      <span>{todo.fields.Name}</span>
      <button type="button" onClick={() => onRemoveTodo(id)}>
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
