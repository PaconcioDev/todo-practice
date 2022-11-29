import React from "react";
import "./styles/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span
        onClick={props.onComplete}
        className={`icon icon-checked ${
          props.completed && "icon-checked-true"
        }`}
      >
        ?
      </span>
      <p
        className={`todo-item-p ${props.completed && "todo-item-p-completed"}`}
      >
        {props.text}
      </p>
      <span onClick={props.onDelete} className="icon icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };
