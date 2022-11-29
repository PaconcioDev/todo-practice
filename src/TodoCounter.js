import React from "react";
import "./styles/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="todo-counter">
      You have completed {completed} of {total} TODOs
    </h2>
  );
}

export { TodoCounter };
