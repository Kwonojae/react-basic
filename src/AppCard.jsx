export default function AppCard() {
  return (
    <div>
      <Card>
        <h1>쎅스</h1>
      </Card>
      <Card>
        <h1>쎅스</h1>
        <h2>twotwo</h2>
      </Card>
      <Card>
        <h1>쎅스</h1>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
