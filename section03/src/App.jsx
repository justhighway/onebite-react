import Diary from "@/pages/Diary";
import Home from "@/pages/Home";
import New from "@/pages/New";
import NotFound from "@/pages/NotFound";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

// 1. <Routes> 컴포넌트 내부에는 Route 컴포넌트만 사용 가능
// 2. *(wild-card): 명시된 path 외에 모든 path에 대해 처리
// 3. <Routes> 외부에 배치한 컴포넌트는 모든 하위 <Route> 컴포넌트들에 적용됨 (Layout 처럼)
// 4. <Link> 컴포넌트를 이용해서 <a> 태그처럼 라우팅이 가능 => CSR 방식으로 라우팅
// 5. useNavigate(): 이벤트 핸들러 등에 적용 가능

export default function App() {
  const navigation = useNavigate();

  const onClickButton = () => {
    navigation("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/new"}> New </Link>
        <Link to={"/diary"}> Diary </Link>
      </div>
      <button onClick={onClickButton}>New로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
