import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contextProvider";
import { changeImg } from "../../functions";

const LittleWeather = (props) => {
  const { weather } = useContext(Context);
  const [image, setImage] = useState("");
  const [temp, setTemp] = useState(0);
  const [background, setBackground] = useState("rgba(252, 248, 248, 0.384)");

  const checkMone = () => {
    let feel = weather.daily[props.k + 1].feels_like;
    let mone = 0;
    if (feel.day - feel.eve > 1) {
      mone++;
    }
    if (feel.day - feel.morn > 1) {
      mone++;
    }
    if (feel.day - feel.night > 1) {
      mone++;
    }
    changeBackground(mone);
  };

  const changeBackground = (_mone) => {
    let back = "";
    switch (_mone) {
      case 1:
        back = "#D3D3D3";
        break;
      case 2:
        back = "#FF8C00";
        break;
      default:
        back = "#B22222";
        break;
    }
    setBackground(back);
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
    weather && changeImg(weather, setImage);
    weather && checkMone();
  }, [weather, temp]);

  return (
    <Card
      sx={{
        "@media (min-width:1800px)": {
          width: "15%",
        },
        marginTop: 4,
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
          width: "100%",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5">{props.day}</Typography>
          <CardMedia
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
