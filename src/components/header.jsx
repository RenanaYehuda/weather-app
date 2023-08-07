import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { Context } from "../contextProvider";
import { useEffect } from "react";

const Header = () => {
  const { lastSearch } = useContext(Context);

  useEffect(() => {}, [lastSearch]);

  return (
    <AppBar position="sticky" sx={{ height: "xl", backgroundColor: "#120E3E" }}>
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
            היסטוריה - {lastSearch.length}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
