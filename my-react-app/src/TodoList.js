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
            //{...item} spread operator good for multiple props
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
