import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL, doApiMethod } from "../api/api";
import { Context } from "../contextProvider";

const Main = () => {
  const { setUser } = useContext(Context);
  const nav = useNavigate();

  const login = async (bodyData) => {
    let url = API_URL + "/login";
    try {
      let resp = await doApiMethod(url, "POST", bodyData);
      if (resp.status == 200) {
        setUser(resp.data);
        nav("/home");
      }
    } catch (err) {
      console.log(err.response);
      alert("User or password worng, or service down");
    }
  };

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("user"));
    item ? login(item) : nav("/login");
  }, []);
  return <div></div>;
};

export default Main;
