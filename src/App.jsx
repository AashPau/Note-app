import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./page/Home";
import SignUp from "./page/signUp-signIn/SignUp";

function App() {
  return (
    <>
      <SignUp />
      {/* <Home /> */}
      <ToastContainer />
    </>
  );
}

export default App;
