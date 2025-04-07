import React from "react";

export const TodoCounter = ({ taskCounter }) => {
  const { allTasks, wipTasks, yetTasks } = taskCounter;
  return (
    <div>
      <div>전체: {allTasks}</div>
      <div>작업 중: {yetTasks}</div>
      <div>작업 완료: {wipTasks}</div>
    </div>
  );
};
