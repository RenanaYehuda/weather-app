import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [allCities, setAllCities] = useState({});
  const [weather, setWeather] = useState({});
  return (
    <Context.Provider value={{ user, setUser, allCities, setAllCities, weather, setWeather }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
