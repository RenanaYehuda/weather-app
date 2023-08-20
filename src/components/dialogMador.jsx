import { Box, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Context } from "../contextProvider";
import HeaderDialogMador from "./headerDialogMador";
import AddSoldier from "./addSoldier";
import Soldiers from "./soldiers";
import ButtonsMador from "./buttonsMador";

const DialogMador = () => {
  const { allSoldiers } = useContext(Context);

  return (
    <Box
      sx={{ maxHeight: "100vh", overflow: "hidden", boxSizing: "border-box" }}
    >
      <DialogTitle>
        <HeaderDialogMador />
      </DialogTitle>
      <DialogContent>
        <AddSoldier />
        <Soldiers />
        <ButtonsMador />
      </DialogContent>
    </Box>
  );
};

export default DialogMador;
