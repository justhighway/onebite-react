import React, { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleController = (value) => {
    setCount(count + value);
  };
  return [count, handleController];
};
