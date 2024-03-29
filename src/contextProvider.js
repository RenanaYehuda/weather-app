import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [city, setCity] = useState("Jerusalem");
  const [allCities, setAllCities] = useState({});
  const [weather, setWeather] = useState({});
  const [lastSearch, setLastSearch] = useState([]);
  return (
    <Context.Provider value={{ user, setUser, allCities, setAllCities, weather, setWeather,city, setCity, lastSearch, setLastSearch }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
