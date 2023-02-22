import React from "react";
import styles from "./TodoListItem.module.css";
import { ReactComponent as Skull } from "./skull.svg";
import PropTypes from "prop-types";

function TodoListItem({ todo, onRemoveTodo, id }) {
  return (
    <li className={styles.ListItem}>
      <span>{todo.fields.Name}</span>

      <button
        type="button"
        onClick={() => onRemoveTodo(todo.id)}
        className="button"
      >
        <Skull height="24px" width="24px" />
        {/*  this is the SVG */}
      </button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  id: PropTypes.string,
};

export default TodoListItem;
