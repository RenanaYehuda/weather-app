import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contextProvider";
import { changeImg } from "../../functions";

const BigWeather = () => {
  const { city, weather } = useContext(Context);
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    weather &&
      setTemp(
        (
          (weather.daily[0].temp.max + weather.daily[0].temp.eve) / 2 -
          272.15
        ).toFixed(2)
      );
    weather && setDescription(weather.daily[0].weather[0].description);
    weather && changeImg(weather, setImage);
  }, [weather, temp, description]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        height: "60vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          marginTop: 8,
          display: "flex",
          border: 3,
          borderRadius: 25,
          backgroundColor: `rgba(252, 248, 248, 0.384)`,
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <CardContent
            cols={6}
            sx={{ flex: "1 0 auto", marginTop: 24, marginRight: 16 }}
          >
            <Typography sx={{ font: "Poppins-Bold", fontSize: "28pt" }}>
              היום
            </Typography>
            <Typography sx={{ font: "Poppins-Regular", fontSize: "18pt" }}>
              {city}
            </Typography>
            <Typography sx={{ font: "Poppins-Regular", fontSize: "16pt" }}>
              טמפרטורה: &#8451; {temp}
            </Typography>
            <Typography sx={{ font: "Poppins-Regular", fontSize: "14pt" }}>
              {description}
            </Typography>
          </CardContent>
        </Box>
        <Box
          display={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            width: "40%",
          }}
        >
          <CardMedia
            cols={2}
            component="img"
            sx={{
              width: 250,
              height: 195,
            }}
            image={image}
            alt="Live from space album cover"
          />
        </Box>
      </Card>
    </Box>
  );
};

export default BigWeather;
