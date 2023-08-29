import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import HeaderDialogMador from "./headerDialogMador";
import AddSoldier from "./soldiers/addSoldier";
import Soldiers from "./soldiers/soldiers";
import ButtonsMador from "./buttonsMador";

const DialogMador = (props) => {
  const {
    open,
    setOpen,
    onClose,
    allSoldiers,
    setAllSoldiers,
    chooseSoldiers,
    setChooseSoldiers,
  } = props;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <Box
        sx={{ maxHeight: "100vh", overflow: "hidden", boxSizing: "border-box" }}
      >
        <DialogTitle>
          <HeaderDialogMador />
        </DialogTitle>
        <DialogContent>
          <AddSoldier
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
          />
          <Soldiers
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
            chooseSoldiers={chooseSoldiers}
            setChooseSoldiers={setChooseSoldiers}
          />
          <ButtonsMador
            setOpen={setOpen}
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
            chooseSoldiers={chooseSoldiers}
            setChooseSoldiers={setChooseSoldiers}
          />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default DialogMador;
