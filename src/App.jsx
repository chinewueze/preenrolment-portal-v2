// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./homepage";
export default function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}