import "./App.css";

function App() {
  const name = "오재";
  const list = ["우유", "딸기", "바나나"];
  return (
    <>
      <h1 className="orange">{`Hello!${name}`}</h1>
      <h2>hi</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li key={item.key}>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", heigh: "200px" }}
        src="https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="nature"
      />
    </>
  );
}

export default App;
