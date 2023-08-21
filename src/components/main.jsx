import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../contextProvider";
import axios from "axios";
const API_URL = "http://localhost:3001";

const Main = () => {
  const { setUser } = useContext(Context);
  const nav = useNavigate();

  const login = async (bodyData) => {
    let url = API_URL + "/login";
    try {
      let resp = await axios({
        url: url,
        method: 'post',
        data: bodyData,
        headers: {
          user_name: bodyData.userName,
          user_mispar_ishi: bodyData.password,
        },
      });
      if (resp.status == 200) {
        setUser(resp.data);
        nav("/home");
      }
    } catch (err) {
      console.log(err.response);
      alert("שם משתמש או הסיסמה שגויים");
    }
  };

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("user"));
    item ? login(item) : nav("/login");
  }, []);
  return <div></div>;
};

export default Main;