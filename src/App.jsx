// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/header"
import {Footer} from "./components/footer"
import { Login } from "./components/login";
import { Home } from "./components/homepage";
import { Portal } from "./components/portal"
import Users from "./UserLogin";
export default function App() {
  const navigate = useNavigate();

  const login = (details) => {
    const validUser = Users.find((user) => {
      const email = details.email;
      const password = details.password;
      return user.email === email && user.password === password;
    });

    if (validUser) {
      sessionStorage.setItem("email_user", details.email);
      toast.success(` Welcome ${validUser.name}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
        hideProgressBar: false,
      });
      navigate("/");
    } else {
      toast.error("🤦‍♂️ Invalid email or password! Please check your entries.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
      });
    }
  };
  return (
    <div>
      <ToastContainer />
      {!sessionStorage.getItem("email_user") ? (
        <Login login={login} />
      ) : (
        <>
          <header>
            <Header />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portal" element={<Portal />} />
            </Routes>
          </main>
          <footer>
            <Footer/>
          </footer>
        </>
      )} 
    </div>
  )
}