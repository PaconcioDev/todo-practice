import React from "react";
import "./styles/CreateTodoButton.css";

function CreateTodoButton() {
  const onClickBtn = () => {
    alert("You clicked");
  };

  return (
    <button onClick={onClickBtn} className="create-todo-btn">
      +
    </button>
  );
}

export { CreateTodoButton };
