import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/Messenger";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";
import Detail from "./pages/Detail";
import Watch from "./pages/Watch";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messenger" element={<About />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
