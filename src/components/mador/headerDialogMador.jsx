import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import profileArrows from "../../arrows.svg";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment/moment";

const HeaderDialogMador = () => {
  const [date, setDate] = useState("");

  const updateDate = () => {
    let date = new Date();
    let currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    let currentTime = date.toLocaleTimeString("it-IT");
    setDate(currentDate + " " + currentTime);
  };

  useEffect(() => {
    const intervalId = setInterval(updateDate, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <CardContent
        sx={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 51,
            height: 51,
            backgroundColor: "#8A2BE2",
            padding: "4px",

            borderRadius: "10%",
          }}
          src={profileArrows}
          alt="Arrows"
        />
      </CardContent>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography sx={{ font: "Poppins-Bold", fontSize: "22pt" }}>
            חיילי המדור
          </Typography>
          <Typography sx={{ font: "Poppins-Regular", fontSize: "14pt" }}>
            {date}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default HeaderDialogMador;
