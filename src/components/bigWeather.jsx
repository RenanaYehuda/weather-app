import { Box, Card, CardContent, CardMedia } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../contextProvider";

const BigWeather = () => {
  const { city, weather } = useContext(Context);
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const changeImg = () => {
    if (weather.daily[0].temp.day > 29) {
      setImage("../../images/sun-g65b7d7a8d_640.png");
    } else if (weather.daily[0].clouds > 20) {
      setImage("../../images/sunRain.png");
    } else if (weather.daily[0].pop > 40) {
      setImage("../../images/rain.png");
    } else setImage("../../images/rainbow.png");
  };

  useEffect(() => {
    
    weather &&
      setTemp(
        (
          (weather.daily[0].temp.max + weather.daily[0].temp.eve) / 2 -
          272.15
        ).toFixed(2)
      );
    weather && setDescription(weather.daily[0].weather[0].description);
    weather && changeImg();
  }, [weather, temp, description]);

  return (
    <Box>
      <Card
        sx={{
          width: 900,
          height: 600,
          marginTop: 8,
          display: "flex",
          border: 3,
          borderRadius: 25,
          backgroundColor: `rgba(252, 248, 248, 0.384)`,
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            cols={6}
            sx={{ flex: "1 0 auto", marginTop: 24, marginRight: 24 }}
          >
            <h3>היום</h3>
            <h2>{city}</h2>
            <p>טמפרטורה: &#8451; {temp}</p>
            <p>{description}</p>
          </CardContent>
        </Box>
        <CardMedia
          cols={3}
          component="img"
          sx={{
            width: 250,
            height: 195,
            alignItems: "center",
            margin: "auto",
          }}
          image={image}
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
};

export default BigWeather;