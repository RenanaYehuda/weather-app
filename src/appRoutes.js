import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Main from "./components/main";
import ContextProvider from "./contextProvider";
import Header from "./components/header";
import History from "./components/history";

const AppRoutes = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/history" element={< History/>} />
            <Route path="/*" element={<h1>ERROR 404</h1>} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default AppRoutes;
