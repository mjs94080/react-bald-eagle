import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle]);

  return (
    <>
      <label htmlFor="todoTitle">{children} </label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        ref={inputRef}
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
}

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  children: PropTypes.string,
};

export default InputWithLabel;
