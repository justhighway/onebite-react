import { useMemo, useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { TodoCounter } from "./TodoCounter";
import { useCounter } from "../hooks/useCounter";

export default function List({
  todos,
  onUpdateStatus,
  onUpdateContent,
  onDelete,
}) {
  const [search, setSearch] = useState("");
  const { allTasks, wipTasks, yetTasks } = useCounter({ todos });

  const renderTodoItem = (todo) => {
    return (
      <TodoItem
        key={todo.id}
        {...todo}
        onUpdateStatus={onUpdateStatus}
        onUpdateContent={onUpdateContent}
        onDelete={onDelete}
      />
    );
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredData = getFilteredData();

  return (
    <div className="list">
      <h3>Todo List</h3>
      <TodoCounter
        allTasks={allTasks}
        wipTasks={wipTasks}
        yetTasks={yetTasks}
      />
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onSearchChange}
      />
      {filteredData.map(renderTodoItem)}
    </div>
  );
}
