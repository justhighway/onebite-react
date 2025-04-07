import React from "react";

export const TodoCounter = ({ taskCounter }) => {
  const { allTasks, wipTasks, yetTasks } = taskCounter;
  return (
    <div>
      <div>시작 전: {allTasks}</div>
      <div>작업 중: {wipTasks}</div>
      <div>작업 완료: {yetTasks}</div>
    </div>
  );
};
