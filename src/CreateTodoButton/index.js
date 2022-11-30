import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickBtn = () => {
    props.setOpenModal(prevState => !prevState)
  };

  return (
    <button onClick={onClickBtn} className="create-todo-btn">
      +
    </button>
  );
}

export { CreateTodoButton };
