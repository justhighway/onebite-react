import { useCallback, useReducer, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE_STATUS":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "UPDATE_CONTENT":
      return state.map((todo) =>
        todo.id === action.targetId
          ? { ...todo, content: action.content }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);

    default:
      return state;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdateStatus = useCallback((targetId) => {
    dispatch({
      type: "UPDATE_STATUS",
      targetId: targetId,
    });
  }, []);

  const onUpdateContent = useCallback((targetId, content) => {
    dispatch({
      type: "UPDATE_CONTENT",
      targetId: targetId,
      content: content,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdateStatus={onUpdateStatus}
        onUpdateContent={onUpdateContent}
        onDelete={onDelete}
      />
    </div>
  );
}
