import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchState, setSearchState } = React.useContext(TodoContext)

  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchState(e.target.value);
  };

  return (
    <input
      value={searchState}
      onChange={onSearchValueChange}
      className="todo-search"
      placeholder="Homework"
    />
  );
}

export { TodoSearch };
