import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box, Container, maxHeight } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  const logOut = () => {
    localStorage.removeItem("user");
    nav("/login");
  };

  const main = () => {
    if (localStorage.getItem("user") !== null) {
      nav("/home");
    } else alert("עליך להתחבר למערכת");
  };
  const mador = () => {
    if (localStorage.getItem("user") !== null) {
      nav("/mador");
    } else alert("עליך להתחבר למערכת");
  };
  return (
    <AppBar position="sticky" sx={{ height: "xl", backgroundColor: "#120E3E" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Button
              variant="text"
              size="large"
              sx={{ color: "white", fontSize: "25px" }}
              onClick={() => main()}
            >
              ראשי
            </Button>
            <Button
              variant="text"
              size="large"
              sx={{ color: "white", fontSize: "25px", marginLeft: "10px" }}
              onClick={() => mador()}
            >
              מדור
            </Button>
          </Box>
          <Button
            variant="text"
            size="large"
            sx={{
              color: "white",
              fontSize: "25px",
              pointerEvents:
                localStorage.getItem("user") == null ? "none" : "auto",
            }}
            onClick={() => logOut()}
          >
            התנתקות
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
