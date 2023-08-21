import React, { useContext } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Context } from "../contextProvider";

const Header = () => {
  const { lastSearch } = useContext(Context);

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
    <AppBar position="sticky" sx={{ height: "xl" }}>
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
