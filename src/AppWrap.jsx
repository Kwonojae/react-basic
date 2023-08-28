export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1692518210971-10604daa8db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          name="Bob"
          size={200}
        />
      </Navbar>
      <Navbar>
        <h1>안녕하냐</h1>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
      <p>안녕하셈!</p>
    </div>
  );
}
