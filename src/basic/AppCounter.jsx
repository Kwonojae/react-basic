import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);

  const handleTotalCount = () => {
    setTotalCount((prev) => prev + 1);
  };
  return (
    <div className="container">
      <div className="banner">
        Total Count: {totalCount} {totalCount > 10 ? "🐶" : "🐱"}
      </div>
      <div className="counters">
        <Counter totalCount={handleTotalCount} currentTotal={totalCount} />
        <Counter totalCount={handleTotalCount} currentTotal={totalCount} />
      </div>
    </div>
  );
}
