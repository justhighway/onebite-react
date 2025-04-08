import { memo, useContext, useRef, useState } from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  // onChange 속성으로 setContent 호출하기
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 키 입력 됐을 때 이벤트 핸들러
  const onKeydown = (e) => {
    // 엔터키의 keyCode는 13번
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    // 빈 input이면 바로 return 시키기
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // input 비우기
  };

  return (
    <div className="editor">
      <input
        ref={contentRef}
        value={content}
        type="text"
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        onKeyDown={onKeydown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default memo(Editor);
