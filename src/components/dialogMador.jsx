import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Context } from "../contextProvider";
import HeaderDialogMador from "./headerDialogMador";
import AddSoldier from "./addSoldier";
import Soldiers from "./soldiers";
import ButtonsMador from "./buttonsMador";

const DialogMador = (props) => {
  const { allSoldiers } = useContext(Context);
  const { open, handleClose } = props;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
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
    </Dialog>
  );
};

export default DialogMador;
