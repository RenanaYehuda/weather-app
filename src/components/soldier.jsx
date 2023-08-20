import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import profileMan from "../man.svg";
import profileWoman from "../woman.svg";
import { Context } from "../contextProvider";

const Soldier = ({ soldier }) => {
  const { chooseSoldiers, setChooseSoldiers } = useContext(Context);
  const [isCardClicked, setIsCardClicked] = useState(false);

  useEffect(() => {
    createArrayClicked();
  }, [isCardClicked]);

  const createArrayClicked = async () => {
    isCardClicked
      ? setChooseSoldiers((selected) => [...selected, soldier])
      : setChooseSoldiers((prev) =>
          prev.filter((element) => element.User_Name !== soldier.User_Name)
        );
  };

  const checkIfExsist = () => {
    if (chooseSoldiers.includes(soldier)) {
      setIsCardClicked(true);
    } else return setIsCardClicked(false);
  };

  useEffect(() => {
    checkIfExsist();
  }, [chooseSoldiers]);

  return (
    <Card
      onClick={() => setIsCardClicked(!isCardClicked)}
      sx={{
        display: "flex",
        marginTop: "11px",
        marginRight: "20px",
        width: "240px",
        backgroundColor: "#edeced",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        border: isCardClicked ? "3px solid black" : "none",
      }}
    >
      {soldier.Gender === "ז" ? (
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
            {soldier.Role}, {soldier.Age}
          </Typography>
          <Typography sx={{ font: "Poppins-Regular", fontSize: "13pt" }}>
            {soldier.Role}, {soldier.Rank}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Soldier;
