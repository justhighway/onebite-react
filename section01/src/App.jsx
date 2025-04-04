import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleController = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller onClick={handleController} />
      </section>
    </div>
  );
}
