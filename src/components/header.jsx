import React, { useContext } from "react";
import { AppBar, MenuItem, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Button, Box, Menu } from "@mui/material";
import { Context } from "../contextProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { lastSearch } = useContext(Context);

  const nav = useNavigate();
  useEffect(() => {}, [lastSearch]);

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
          <Button
            variant="text"
            size="large"
            sx={{ color: "white", fontSize: "25px" }}
            onClick={() => nav("/history")}
          >
            היסטוריה - {lastSearch.length}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
