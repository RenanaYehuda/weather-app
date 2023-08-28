import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../contextProvider";
import axios from "axios";
import Login from "./login";
import Home from "./home";
import { useState } from "react";
import { apiLogin } from "../apiRequest";

const Main = () => {
  const v = useNavigate();
  const { setUser } = useContext(Context);
  const [nav, setNav] = useState("");

  const login = async (bodyData) => {
    try {
      let resp = await apiLogin(bodyData);
      if (resp) {
        setNav("home");
        setUser(resp.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("user"));

    item ? login(item) : setNav("login");
  }, []);
  return <> {nav == "home" ? <Home /> : <Login />}</>;
};

export default Main;
