import { Container, Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Container>
      <Typography
        sx={{
          font: "Poppins-Bold",
          fontSize: "70pt",
          textAlign: "center",
          marginTop: "200px",
        }}
      >
        ERROR 404
      </Typography>
    </Container>
  );
};

export default Error;
