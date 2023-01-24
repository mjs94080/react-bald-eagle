import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const useSemiPersistentState = () => {
//   const [todoList, setTodoList] = useState(
//     JSON.parse(localStorage.getItem("savedTodoList") || "[]")
//   );

//   useEffect(() => {
//     localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList];
// };

function App() {
  const [todoList, setTodoList] = useState([]);

  //create a new state variable named isLoading with update
  //function named setIsLoading with default value true
  const [isLoading, setIsLoading] = useState(true);

  //NEW ASYNCH START HERE!!!!!
  useEffect(() => {
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: {
    //         todoList: JSON.parse(localStorage.getItem("todoList")), //|| "[]",
    //       },
    //     });
    //   }, 2000);
    // })
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

  //NEW
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <h1>Todo List</h1>
              <hr />
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>
                  <strong>Loading...</strong>
                </p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </>
          }
        />
        <Route path="/new" exact element={<h1>New TodoList</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
