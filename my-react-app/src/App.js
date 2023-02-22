import React, { useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ReactComponent as Hand } from "./hand.svg";
import Header from "./header";
import { Link } from "react-router-dom";

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
    console.log(newTodo, todoList);
  };

  const removeTodo = (id) => {
    const filteredTodoList = todoList.filter((item) => id !== item.id);

    setTodoList(filteredTodoList);
  };

  /* BrowserRouter, Routes, Route navigates to another page */
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {/* linked from header.jsx, hover svg becomes clickable link to 
                  Route path="/new" */}
              <Link to="/new" target="blank">
                <div class="hand">
                  <div alt="zombiehand" class="image" />
                </div>
              </Link>

              <h1>To Do List</h1>
              <hr />
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>
                  <strong>EAT BRAINS...</strong>
                </p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </>
          }
        />

        <Route
          path="/new"
          exact
          element={
            <div>
              <h2>MY HOME PAGE</h2>

              {/* this opens up external url to github */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mackenzie-santiago-94080/"
              >
                <img
                  src="https://media1.giphy.com/media/I0Z7xEnYL3Fu0/giphy.gif?cid=ecf05e47c6nykgavdinwk97b41egnhgdnp6y0u1qci13co6r&rid=giphy.gif&ct=g"
                  alt="walkingdead"
                  class="new-page"
                />
              </a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
