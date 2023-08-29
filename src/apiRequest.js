import axios from "axios";
const API_URL = "http://localhost:3001";
const item = JSON.parse(localStorage.getItem("user"));

export const apiLogin = async (bodyData) => {
  let url = API_URL + "/login";
  try {
    let resp = await axios({
      url: url,
      method: "post",
      data: bodyData,
      headers: {
        user_name: bodyData.userName,
        user_mispar_ishi: bodyData.password,
      },
    });
    if (resp.status == 200) {
      return resp;
    }
  } catch (err) {}
};

export const apiGetCities = async (user) => {
  let url = API_URL + "/getAllCities";
  try {
    let resp = await axios({
      url: url,
      method: "get",
      headers: {
        user_name: item ? item.userName : null,
        user_mispar_ishi: item ? item.password : null,
      },
    });
    if (resp.status == 200) {
      return resp;
    }
  } catch (err) {}
};

export const apiGetCity = async (user, city) => {
  let url = API_URL + `/cities/${city}`;
  try {
    let resp = await axios.get(url, {
      headers: {
        user_name: item ? item.userName : null,
        user_mispar_ishi: item ? item.password : null,
      },
    });
    if (resp.status == 200) {
      return resp;
    }
  } catch (err) {}
};

export const apiGetSoldiers = async (user) => {
  let url = API_URL + "/getAllSoldiers";
  try {
    let resp = await axios.get(url, {
      headers: {
        user_name: item ? item.userName : null,
        user_mispar_ishi: item ? item.password : null,
      },
    });
    if (resp.status === 200) {
      return resp;
    }
  } catch (err) {}
};

export const apiUpdateSoldiers = async (user, data) => {
  let url = API_URL + "/updateMadorSoldiers";
  try {
    let resp = await axios({
      url: url,
      method: "put",
      data: data,
      headers: {
        user_name: item ? item.userName : null,
        user_mispar_ishi: item ? item.password : null,
      },
    });
    if (resp.status == 200) {
      return resp;
    }
  } catch (err) {}
};
