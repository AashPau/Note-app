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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {/* 
      <Home /> */}
      <ToastContainer />
    </>
  );
}

export default App;
