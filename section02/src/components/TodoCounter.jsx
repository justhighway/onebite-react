import React from "react";

export const TodoCounter = ({ allTasks, wipTasks, yetTasks }) => {
  return (
    <div>
      <div>전체: {allTasks}</div>
      <div>작업 중: {yetTasks}</div>
      <div>작업 완료: {wipTasks}</div>
    </div>
  );
};
