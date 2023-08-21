import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [city, setCity] = useState("Jerusalem");
  const [allCities, setAllCities] = useState({});
  const [weather, setWeather] = useState(null);
  const [lastSearch, setLastSearch] = useState([]);
  const [allSoldiers, setAllSoldiers] = useState([]);
  const [chooseSoldiers, setChooseSoldiers] = useState([]);
  const [open, setOpen] = React.useState(false);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        allCities,
        setAllCities,
        weather,
        setWeather,
        lastSearch,
        setLastSearch,
        city,
        setCity,
        allSoldiers,
        setAllSoldiers,
        chooseSoldiers,
        setChooseSoldiers,
        open,
        setOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
