// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/homepage";
import {Portal} from "./components/portal"
export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/portal" element={<Portal/>} />
      </Routes>
    </>
  )
}