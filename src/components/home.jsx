import {
  Box,
  CircularProgress,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  NativeSelect,
  Stack,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../contextProvider";
import BigWeather from "./weather/bigWeather";
import LittleWeather from "./weather/littleWeather";
import { useForm } from "react-hook-form";
import dataCountry from "../data/apiRequest.json";
import { apiGetCities, apiGetCity } from "../apiRequest";

const Home = () => {
  const days = [
    "מחר",
    "בעוד יומיים",
    "בעוד 3 ימים",
    "בעוד 4 ימים",
    "בעוד 5 ימים",
  ];

  const [cityTemp, setCityTemp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    user,
    city,
    setCity,
    setAllCities,
    allCities,
    weather,
    setWeather,
    lastSearch,
    setLastSearch,
  } = useContext(Context);

  const { handleSubmit } = useForm();

  const onSubForm = async () => {
    setCity(cityTemp);
    createLastSearch();
  };

  const getCity = async () => {
    try {
      let resp = await apiGetCity(city);
      if (resp) {
        getWeather(resp.data);
      }
    } catch (err) {}
  };

  const getWeather = async (lat_lon) => {
    let resp;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat_lon.latitude}&lon=${lat_lon.longitude}&appid=${process.env.REACT_APP_KEY_API}`;
    try {
      //   console.log(url);
      //   try {
      //     resp = await axios.get(url, {
      //       headers: {
      //         user_name: user ? user.User_Name : null,
      //         user_mispar_ishi: user ? user.Mispar_Ishi : null,
      //       },
      //     });
      //   } catch (err) {
      //     console.log(err.message);
      //     alert("טעינת מזג האוויר נכשלה");
      //   }

      // if (resp) {
      //   setWeather(resp.data);
      //   console.log(resp.data);
      // } else {
      let weath = dataCountry.find(
        (city) =>
          city.lat == lat_lon.latitude.toFixed(4) &&
          city.lon == lat_lon.longitude.toFixed(4)
      );
      if (weath) {
        await setWeather(weath);
      } else {
        await setWeather("");
      }
      // }
    } catch (err) {
      setWeather("");
      alert("טעינת מזג האוויר נכשלה");
    }
  };

  const createLastSearch = () => {
    let searchs = lastSearch;
    let detailesCity = allCities.filter((item) => item.city === cityTemp);
    if (detailesCity) {
      detailesCity = detailesCity[0];
      if (searchs.length < process.env.REACT_APP_MAX_SEARCH) {
        searchs.unshift(detailesCity);
      } else {
        searchs.pop();
        searchs.unshift(detailesCity);
      }
      setLastSearch(searchs);
    }
  };

  useEffect(() => {
    const getAllCities = async () => {
      try {
        let resp = await apiGetCities();
        if (resp) {
          await setAllCities(resp.data);
          if (allCities != {}) {
            setIsLoading(true);
          }
        }
      } catch (err) {}
    };

    getAllCities();
  }, []);

  useEffect(() => {
    getCity();
  }, []);

  useEffect(() => {
    getCity();
  }, [city]);
  return (
    <Container component="main" maxWidth="xl">
      {isLoading ? (
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>
            שלום {user.First_Name} {user.Last_Name}
          </h1>
          <Box>
            <FormControl
              sx={{ minWidth: 600 }}
              component="form"
              onSubmit={handleSubmit(onSubForm)}
            >
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                sx={{ fontSize: 25 }}
              >
                :Choose country
              </InputLabel>
              <Box>
                <IconButton aria-label="search" size="large" type="submit">
                  <SearchRoundedIcon />
                </IconButton>
                <NativeSelect
                  onChange={(e) => {
                    setCityTemp(e.target.value);
                  }}
                  defaultValue={city}
                  inputProps={{
                    name: "city",
                    id: "uncontrolled-native",
                  }}
                  sx={{ direction: "ltr", width: 700, marginTop: 4 }}
                >
                  {allCities.map((item, i) => (
                    <option key={i} value={item.city}>
                      {item.city}
                    </option>
                  ))}
                </NativeSelect>
              </Box>
            </FormControl>
          </Box>
          {weather ? (
            <>
              <BigWeather />
              <Stack
                direction={"row"}
                sx={{
                  position: "absolute",
                  minWidth: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "@media (min-width:600px)": {
                    bottom: "-2%",
                  },
                  "@media (min-width:1800px)": {
                    bottom: "5%",
                  },
                }}
              >
                {days.map((item, i) => (
                  <LittleWeather key={i} k={i} day={item} />
                ))}
              </Stack>
            </>
          ) : (
            <h3> Weather not exsist</h3>
          )}
        </Box>
      ) : (
        <CircularProgress
          size={50}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: "auto",
          }}
        />
      )}
    </Container>
  );
};

export default Home;
