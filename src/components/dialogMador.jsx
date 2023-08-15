import { Box, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import Soldier from "./soldier";
import { useContext } from "react";
import { Context } from "../contextProvider";
import HeaderDialogMador from "./headerDialogMador";
import AddSoldier from "./addSoldier";


const DialogMador = () => {
  const { allSoldiers } = useContext(Context);

  return (
    <Box>
      <DialogTitle>
        <HeaderDialogMador />
      </DialogTitle>
      <DialogContent>
        <AddSoldier />
      </DialogContent>
      <DialogContent
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {allSoldiers.map((item, i) => (
          <Soldier key={i} soldier={item} />
        ))}
      </DialogContent>
    </Box>
  );
};

export default DialogMador;
