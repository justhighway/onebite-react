import { memo } from "react";
import "./Header.css";

const Header = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="header">
      <h3>오늘은 🗓️</h3>
      <h1>{today}</h1>
    </div>
  );
};

export default memo(Header);
