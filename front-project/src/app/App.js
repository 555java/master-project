import { useSelector } from "react-redux";
import { getUser } from "../features-store/auth/auth.selectors";

function App() {
  const user = useSelector(getUser);
  return (
    <div>Hello Frontend User:{user ? JSON.stringify(user) : "no user"}</div>
  );
}

export default App;
