import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import "./AddTodoForm.css";
import PropTypes from "prop-types";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({
      fields: { Name: todoTitle },
      id: Date.now(),
    }); /* changed Title: to Name: */
    setTodoTitle("");
  };

  //   const todoObj = {
  //     title: todoTitle,
  //     id: Date.now(),
  //   };

  //   // onAddTodo(todoObj);
  //   onAddTodo({ fields: { Title: todoTitle }, id: Date.now() });
  //   setTodoTitle("");
  // };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        autoFocus
      >
        <strong>Title: </strong>
      </InputWithLabel>
      <button type="submit" className="submitButton">
        Add
      </button>
    </form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
