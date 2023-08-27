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
import BigWeather from "./bigWeather";
import LittleWeather from "./littleWeather";
import { useForm } from "react-hook-form";
import dataCountry from "../data/apiRequest.json";
import axios from "axios";
const API_URL = "http://localhost:3001";

const Home = () => {
  const days = [
    "מחר",
    "בעוד יומיים",
    "בעוד 3 ימים",
    "בעוד 4 ימים",
    "בעוד 5 ימים",
  ];

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

  const onSubForm = () => {
    createLastSearch();
    getCity();
  };

  const getCity = async () => {
    console.log(city);
    let url = API_URL + `/cities/${city}`;
    try {
      let resp = await axios.get(url, {
        headers: {
          user_name: user ? user.User_Name : null,
          user_mispar_ishi: user ? user.Mispar_Ishi : null,
        },
      });
      if (resp) {
        console.log(resp.data);
        getWeather(resp.data);
      }
    } catch (err) {
      console.log(err.response);
      alert("טעינת נתוני העיר נכשלה");
    }
  };

  const getWeather = async (lat_lon) => {
    console.log("hhhhhhhhhhhhhh");
    let resp;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat_lon.latitude}&lon=${lat_lon.longitude}&appid=6f11fa9760902e1597265ad205f05d2c`;
    console.log(url);
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
          console.log(weath);
          console.log("haveeeeee");
          console.log(weather);
        } else {
         await setWeather("");
          console.log("nooooooooo");
          console.log(weather);
        }
      // }
    } catch (err) {
      setWeather("");
      console.log(err.message);
      alert("טעינת מזג האוויר נכשלה");
    }
  };

  const createLastSearch = () => {
    let searchs = lastSearch;
    let detailesCity = allCities.filter((item) => item.city === city);
    if (detailesCity) {
      detailesCity = detailesCity[0];
      if (searchs.length < 5) {
        console.log(detailesCity);
        searchs.unshift(detailesCity);
      } else {
        searchs.pop();
        searchs.unshift(detailesCity);
      }
      console.log(searchs);
      setLastSearch(searchs);
    } else console.log("City not exsist");
  };

  useEffect(() => {
    const getCities = async () => {
      let url = API_URL + "/getAllCities";
      try {
        await axios.get(url, {
          headers: {
            user_name: user ? user.User_Name : null,
            user_mispar_ishi: user ? user.Mispar_Ishi : null,
          },
        }).then(resp=>{
          console.log(resp);
          if (resp.status == 200) {
          console.log(resp.data);
          setAllCities(resp.data);
          setIsLoading(true);
        }
        }).catch(err=>
          {alert("טעינת נתוני הערים נכשלה");})
      } catch (err) {
        console.log(err.response);
       
      }
    };

    getCities();
  }, []);

  useEffect(() => {
    getCity();
  }, []);

  return (
    <Container component="main"  maxWidth="xl">
      {isLoading ? (
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
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
                  onChange={(e) => setCity(e.target.value)}
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
          {(weather) ? (
            <>
              <BigWeather />
              <Stack
                direction={"row"}
                sx={{ position: "absolute", bottom: "1%",}}
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
