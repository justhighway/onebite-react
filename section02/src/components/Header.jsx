import { memo } from "react";
import "./Header.css";

const Header = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="header">
      <h1>TO DO LIST</h1>
      <h3>{today}</h3>
    </div>
  );
};

export default memo(Header);
