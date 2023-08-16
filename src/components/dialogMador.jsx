import { Box, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import Soldier from "./soldier";
import { useContext } from "react";
import { Context } from "../contextProvider";
import HeaderDialogMador from "./headerDialogMador";
import AddSoldier from "./addSoldier";
import Soldiers from "./soldiers";

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
      <DialogContent>
        <Soldiers />
      </DialogContent>
    </Box>
  );
};

export default DialogMador;
