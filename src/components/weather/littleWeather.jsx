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
    switch (true) {
      case feel.day - feel.eve > 1:
        mone++;
      case feel.day - feel.morn > 1:
        mone++;
      case feel.day - feel.night > 1:
        mone++;
      default:
        break;
    }
    changeBackground(mone);
  };

  const changeBackground = (_mone) => {
    switch (_mone) {
      case 1:
        setBackground("#D3D3D3");
        break;
      case 2:
        setBackground("#FF8C00");
        break;
      default:
        setBackground("#B22222");
        break;
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
    weather && changeImg(weather, setImage);
    weather && checkMone();
  }, [weather, temp]);

  return (
    <Card
      sx={{
        width: 250,
        height: 200,
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
          width:"100%",
         
        }}
      >
        <CardContent  sx={{ flex: "1 0 auto" }}>
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
