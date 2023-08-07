import { Box, Card, CardContent, CardMedia } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../contextProvider";

const LittleWeather = (props) => {
  const { weather } = useContext(Context);
  const [image, setImage] = useState("");
  const [temp, setTemp] = useState(0);
  const [background, setBackground] = useState("rgba(252, 248, 248, 0.384)");

  const changeImg = () => {
    if (weather.daily[props.k + 1].temp.day > 29) {
      setImage("../../images/sun-g65b7d7a8d_640.png");
    } else if (weather.daily[props.k + 1].clouds > 20) {
      setImage("../../images/sunRain.png");
    } else if (weather.daily[props.k + 1].pop > 40) {
      setImage("../../images/rain.png");
    } else setImage("../../images/rainbow.png");
  };

  const checkMone = () => {
    let mone = 0;
    if (
      (weather.daily[props.k + 1].feels_like.day -
      weather.daily[props.k + 1].feels_like.eve) > 1
    ) {
      mone++;
    }
    if (
      (weather.daily[props.k + 1].feels_like.day -
      weather.daily[props.k + 1].feels_like.morn) > 1
    ) {
      mone++;
    }
    if (
      (weather.daily[props.k + 1].feels_like.day -
      weather.daily[props.k + 1].feels_like.night) > 1
    ) {
      mone++;
    }
    changeBackground(mone);
  };

  const changeBackground = (_mone) => {
    if (_mone == 1) {
      setBackground("#D3D3D3");
    } else if (_mone == 2) {
      setBackground("#FF8C00");
    } else if (_mone >= 3) {
      setBackground("#B22222");
    }
  };
  useEffect(() => {
    weather &&
      setTemp(
        (
          (weather.daily[props.k + 1].temp.max +
            weather.daily[props.k + 1].temp.eve) /
            2 -
          272.15
        ).toFixed(2)
      );
    weather && changeImg();
    weather && checkMone();
  }, [weather, temp]);

  return (
    <Card
      sx={{
        width: 250,
        height: 200,
        marginTop: 8,
        marginRight: 2,
        marginBottom: 8,
        display: "flex",
        border: 3,
        borderRadius: 15,
        backgroundColor: { background },
       
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <CardContent cols={6} sx={{ flex: "1 0 auto" }}>
          <h3>{props.day}</h3>
          <CardMedia
            cols={3}
            component="img"
            sx={{
              width: 50,
              height: 70,
              alignItems: "center",
              margin: "auto",
            }}
            image={image}
            alt="Live from space album cover"
          />
          <p>טמפרטורה: &#8451; {temp}</p>
        </CardContent>
      </Box>
    </Card>
  );
};

export default LittleWeather;
