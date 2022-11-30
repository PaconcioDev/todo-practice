import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("")

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onWrite = (e) => {
    setNewTodoValue(e.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Example text</label>
      <textarea
        placeholder="I need to do my math homework" 
        value={newTodoValue}
        onChange={onWrite}
      />
      <div className="todo-form-btn-container">
        <button className="todo-form-btn todo-form-btn-cancel" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="todo-form-btn todo-form-btn-add" type="submit">Add TODO</button>
      </div>
    </form>
  );
}

export { TodoForm };
