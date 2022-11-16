import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>Hello Frontend User:{user ? JSON.stringify(user) : "no user"}</div>
  );
}

export default App;
