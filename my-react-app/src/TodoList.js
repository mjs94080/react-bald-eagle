import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => {
        console.log(todo);
        return (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
