import { Typography } from "@mui/material";
import { auto } from "@popperjs/core";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <Typography variant="h5" gutterBottom sx={{padding: 4, color: "white"}}>
          ראשי
        </Typography>
      </nav>
    </div>
  );
};

export default Header;
