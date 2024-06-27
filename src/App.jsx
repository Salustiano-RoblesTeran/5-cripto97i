import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Login from "./pages/Login";
import RoutesApp from "./routes/RoutesApp";
import ProtectedRoutes from "./routes/ProtectedRoutes";


function App() {

  const [login, setLogin] = useState(false);

  const cambiarLogin = () => {
    setLogin(!login)
  }

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={
                <ProtectedRoutes login = {login}>
                  <RoutesApp cambiarLogin = {cambiarLogin}/>
                </ProtectedRoutes>}/>
            <Route path="/Login" element={<Login cambiarLogin = {cambiarLogin}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
