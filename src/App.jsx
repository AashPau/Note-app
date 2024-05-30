import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./page/Home";
import SignUp from "./page/signUp-signIn/SignUp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./page/signUp-signIn/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
