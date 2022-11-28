import React from "react";
import "./styles/TodoItem.css"

function TodoItem(props) {
  return(
    <li className="todo-item">
      <span className={`icon icon-checked ${props.completed && 'icon-checked-true'}`}>?</span>
      <p className={`todo-item-p ${props.completed && 'todo-item-p-completed'}`}>{props.text}</p>
      <span className="icon icon-delete">X</span>
    </li>
  );
}

export { TodoItem };