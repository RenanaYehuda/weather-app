import React, { useContext, useEffect } from "react";
import { Context } from "../contextProvider";
import Login from "./login";
import Home from "./home";
import { useState } from "react";
import { apiLogin } from "../apiRequest";

const Main = () => {
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
    const item = JSON.parse(localStorage.getItem(process.env.REACT_APP_USER));

    item ? login(item) : setNav("login");
  }, [nav]);
  return <> {nav == "home" ? <Home /> : <Login setNav={setNav} />}</>;
};

export default Main;
