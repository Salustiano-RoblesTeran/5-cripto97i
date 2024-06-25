import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminScreen from "./pages/AdminScreen";
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen";
import Login from "./pages/Login";
import AboutScreen from "./pages/AboutScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/Admin" element={<AdminScreen/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/About" element={<AboutScreen/>}/>

            <Route path="*" element={<ErrorScreen/>}/>

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
