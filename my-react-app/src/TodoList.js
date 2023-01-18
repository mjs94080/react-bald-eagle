import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <TodoListItem
            key={item.id}
            id={item.id}
            title={item.fields.Name}
            //{...item} spread operator good for multiple props
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
