import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ height: "xl" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ padding: 2, color: "white" }}
          >
            ראשי
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ padding: 2, color: "white" }}
          >
            היסטוריה - {}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
