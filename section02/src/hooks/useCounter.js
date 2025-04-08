import { useMemo } from "react";

const countTasks = (todos) => {
  const all = todos.length;
  const done = todos.filter((todo) => todo.isDone).length;
  const wip = all - done;

  return { all, done, wip };
};

export const useCounter = ({ todos }) => {
  const { all, done, wip } = useMemo(() => {
    console.log("Task Counter 리렌더됨!");
    return countTasks(todos);
  }, [todos]);

  return {
    allTasks: all,
    wipTasks: done,
    yetTasks: wip,
  };
};
