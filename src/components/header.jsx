import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box, Container, maxHeight } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ height: "xl", backgroundColor: "#120E3E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            variant="text"
            size="large"
            sx={{ color: "white", fontSize: "25px" }}
            onClick={() => nav("/")}
          >
            ראשי
          </Button>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
