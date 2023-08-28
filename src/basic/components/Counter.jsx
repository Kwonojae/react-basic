import { useState } from "react";

export default function Counter({ totalCount, currentTotal }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">
        {count}/<span className="total">{currentTotal}</span>
      </span>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          totalCount();
        }}
      >
        Add +
      </button>
    </div>
  );
}
