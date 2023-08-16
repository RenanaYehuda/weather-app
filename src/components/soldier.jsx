import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import profileMan from "../man.svg";
import profileWoman from "../woman.svg";

const Soldier = ({ soldier }) => {
  return (
    <Card
      sx={{
        display: "flex",
        marginTop: "16px",
        marginRight:"37px",
        // marginLeft:"4px",
        width: "240px",
        backgroundColor: "#edeced",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {soldier.Gender == "ז" ? (
        <CardMedia
          component="img"
          sx={{ width: 61, height: 61, borderRadius: "50%" }}
          src={profileMan}
          alt="Profile male"
        />
      ) : (
        <CardMedia
          component="img"
          sx={{ width: 61, height: 61, borderRadius: "50%" }}
          src={profileWoman}
          alt="Profile female"
        />
      )}

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography sx={{ font: "Poppins-Semi bold", fontSize: "17pt" }}>
            {soldier.First_Name} {soldier.Last_Name}
          </Typography>
          <Typography sx={{ font: "Poppins-Regular", fontSize: "14pt" }}>
            {soldier.Role}
          </Typography>
          <Typography sx={{ font: "Poppins-Regular", fontSize: "12pt" }}>
            פלוגה 1 | מחלקה 1
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Soldier;
