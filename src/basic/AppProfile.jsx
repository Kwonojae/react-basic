import "./App.css";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (evnet) => {
    console.log(evnet);
    alert("클릭됨");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Profile
        image="https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        name="James Kim"
        title="Front End"
        isnew={true}
      ></Profile>
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="Ojae Kwon"
        title="App"
        isnew={false}
      />
      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80

"
        name="min chon"
        title="Back end"
        isnew={false}
      />
    </>
  );
}

export default AppProfile;
