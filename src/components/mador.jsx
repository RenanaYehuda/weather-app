import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Context } from "../contextProvider";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import DialogMador from "./dialogMador";
const API_URL = "http://localhost:3001";

const Mador = () => {
  const { user, allSoldiers, setAllSoldiers } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getSoldiers = async () => {
      let url = API_URL + "/getAllSoldiers";
      try {
        let resp = await axios.get(url, {
          headers: {
            user_name: user ? user.User_Name : null,
            user_mispar_ishi: user ? user.Mispar_Ishi : null,
          },
        });
        console.log("jjjjjjjjjjjjjj");
        if (resp.status == 200) {
          console.log(resp.data);
          setAllSoldiers(resp.data);
          setIsLoading(true);
        }
      } catch (err) {
        console.log(err.response);
        alert("User or password worng, or service down");
      }
    };

    getSoldiers();
    console.log(allSoldiers);
  }, []);
  return (
    <Container component="main" >
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <Button
            onClick={handleClickOpen}
            variant="outlined"
            size="large"
            sx={{
              fontSize: "35px",
              borderRadius: "25px",
              color: "#120E3E",
              borderColor: "#120E3E",
              border: 3,
            }}
          >
            פתיחת חלון
          </Button>
          <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
            <DialogMador />
          </Dialog>
        </Box>
      )}
    </Container>
  );
};

export default Mador;
