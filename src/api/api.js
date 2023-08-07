import axios from "axios";
import { useContext } from "react";
import { Context } from "../contextProvider";
export const API_URL = "http://localhost:3001";
export const TOKEN_NAME = "RemixSecret";
export const USER = "user";

export const doApiGet = async (_url, user) => {
  try {
    let resp = await axios.get(_url, {
      headers: {
        user_name: user ? user.User_Name : null,
        user_mispar_ishi: user ? user.Mispar_Ishi : null,
      },
    });
    return resp;
  } catch (err) {
    // throw-> בבקשות של פרומיס מזהים את זה בתור החזרת שגיאה
    throw err;
  }
};

// For Post,delete, put, patch
export const doApiMethod = async (_url, _method, _body = {}) => {
  try {
    let resp = await axios({
      url: _url,
      method: _method,
      data: _body,
      headers: {
        user_name: _body.userName,
        user_mispar_ishi: _body.password,
      },
    });
    console.log(resp.data);
    return resp;
  } catch (err) {
    throw err;
  }
};
