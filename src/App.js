import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import './App.css';

const myFakeTodos = [
  {
    text: "Cut onions for the dinner",
    completed: true
  },
  {
    text: "Take React course",
    completed: false
  },
  {
    text: "Cry in the bathroom",
    completed: false
  }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {myFakeTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList> 
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
