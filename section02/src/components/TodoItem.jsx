import { memo, useRef, useState } from "react";
import "./TodoItem.css";

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdateStatus,
  onUpdateContent,
  onDelete,
}) => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleChangeCheckbox = () => {
    onUpdateStatus(id);
  };

  const onChangeInput = (e) => {
    setValue(inputRef.current.value);
    console.log(value);
  };

  const handleChangeContent = () => {
    setIsEditing(!isEditing);
    onUpdateContent(id, value);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={handleChangeCheckbox} type="checkbox" checked={isDone} />

      {isEditing ? (
        <input
          ref={inputRef}
          className="content"
          value={value}
          onChange={onChangeInput}
        ></input>
      ) : (
        <div className="content">{content}</div>
      )}
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleChangeContent}>
        {isEditing ? "완료" : "수정"}
      </button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

// memo: 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prev, next) => {
//   // 반환 값에 따라 props가 바뀌었는지 안 바뀌었는지 판단
//   // true: props가 바뀌지 않음 -> 리렌더링 X
//   // false: props가 바뀜 -> 리렌더링 O

//   if (prev.id !== next.id) return false;
//   if (prev.isDone !== next.isDone) return false;
//   if (prev.content !== next.content) return false;
//   if (prev.date !== next.date) return false;
//   return true;
// });

export default memo(TodoItem);
