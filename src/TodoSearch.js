import React from "react";
import "./styles/TodoSearch.css";

function TodoSearch({ searchState, setSearchState }) {
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
