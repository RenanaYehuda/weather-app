import { Box, Button, Container } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Context } from "../../contextProvider";
import { useState } from "react";
import { useEffect } from "react";
import DialogMador from "./dialogMador";
import { apiGetSoldiers } from "../../apiRequest";

const Mador = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [allSoldiers, setAllSoldiers] = useState([]);
  const [chooseSoldiers, setChooseSoldiers] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getSoldiers = async () => {
      try {
        let resp = await apiGetSoldiers();
        if (resp.status === 200) {
          setAllSoldiers(resp.data);
          setIsLoading(true);
        }
      } catch (err) {}
    };

    getSoldiers();
  }, []);
  return (
    <Container component="main">
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
          <DialogMador
            open={open}
            setOpen={setOpen}
            onClose={handleClose}
            allSoldiers={allSoldiers}
            setAllSoldiers={setAllSoldiers}
            chooseSoldiers={chooseSoldiers}
            setChooseSoldiers={setChooseSoldiers}
          />
        </Box>
      )}
    </Container>
  );
};

export default Mador;
