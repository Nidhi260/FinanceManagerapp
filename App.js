// 
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import SetAvatar from "./Pages/Avatar/setAvatar";
import Dashboard from "./Pages/Dashboard/Dashboard";

// Function to check if the user is logged in
const isAuthenticated = () => {
  return localStorage.getItem("userToken") !== null; // Example authentication check
};

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/setAvatar" element={<SetAvatar />} />
            <Route
              path="/dashboard"
              element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
