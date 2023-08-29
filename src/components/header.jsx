import React, { useContext } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Context } from "../contextProvider";

const Header = () => {
  const { lastSearch } = useContext(Context);
  const USER = process.env.REACT_APP_USER;

  const nav = useNavigate();

  const logOut = () => {
    localStorage.removeItem(USER);
    nav("/login");
  };

  const main = () => {
    if (localStorage.getItem(USER) !== null) {
      nav("/home");
    } else alert("עליך להתחבר למערכת");
  };
  const mador = () => {
    if (localStorage.getItem(USER) !== null) {
      nav("/mador");
    } else alert("עליך להתחבר למערכת");
  };

  return (
    <AppBar position="static" sx={{ height: "xl", backgroundColor: "#000039" }}>
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
            <Button
              variant="text"
              size="large"
              sx={{
                color: "white",
                fontSize: "25px",
                pointerEvents:
                  localStorage.getItem("user") == null ? "none" : "auto",
              }}
              onClick={() => nav("/history")}
            >
              היסטוריה {lastSearch.length > 0 ? lastSearch.length : null}
            </Button>
          </Box>
          <Button
            variant="text"
            size="large"
            sx={{
              color: "white",
              fontSize: "25px",
              pointerEvents:
                localStorage.getItem(USER) == null ? "none" : "auto",
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
