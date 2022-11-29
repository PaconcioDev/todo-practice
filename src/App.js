import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import "./App.css";

const myFakeTodos = [
  {
    text: "Cut onions for the dinner",
    completed: true,
  },
  {
    text: "Take React course",
    completed: false,
  },
  {
    text: "Cry in the bathroom",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = React.useState(myFakeTodos);
  const [searchState, setSearchState] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchingTodos = [];
  if (!searchState.length >= 1) {
    searchingTodos = todos;
  } else {
    searchingTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchState.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchState={searchState} setSearchState={setSearchState} />
      <TodoList>
        {searchingTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
