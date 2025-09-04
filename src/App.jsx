import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import AccountSetting from "./pages/AccountSetting";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen w-[375px] h-[667px] mx-auto  bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/account-settings" element={<AccountSetting />} />
      </Routes>
    </div>
  );
}

export default App;
