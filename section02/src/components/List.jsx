import { useMemo, useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { TodoCounter } from "./TodoCounter";

export default function List({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  const renderTodoItem = (todo) => {
    return (
      <TodoItem
        key={todo.id}
        {...todo}
        onUpdate={onUpdate}
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

  const taskCounterr = useMemo(() => {
    console.log("리렌더됨!");
    const allTasks = todos.length;
    const wipTasks = todos.filter((todo) => todo.isDone).length;
    const yetTasks = allTasks - wipTasks;

    return { allTasks, wipTasks, yetTasks };
  }, [todos]);

  return (
    <div className="list">
      <h3>Todo List</h3>
      <TodoCounter taskCounter={taskCounterr} />
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
