
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box, Container, maxHeight } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const nav = useNavigate();
  return (
  
    <AppBar position="sticky" sx={{ height: "xl", backgroundColor: "#120E3E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            variant="text"
            size="large"
            sx={{ color: "white", fontSize: "25px" }}
          >
            ראשי
          </Button>
          <Button
            variant="text"
            size="large"
            sx={{ color: "white", fontSize: "25px" }}
            onClick={()=> nav('/mador')}
          >
            מדור
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
