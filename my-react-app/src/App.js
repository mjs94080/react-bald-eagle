import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setTodoList(result.records || []);
        setIsLoading(false);
      });
  }, []);
  console.log(process.env.REACT_APP_AIRTABLE_API_KEY);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const filteredTodoList = todoList.filter((item) => id !== item.id);

    setTodoList(filteredTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>
          <strong>Busting Loads...</strong>
        </p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
