import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Soldier = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5">מאיר בן נעים</Typography>
          <Typography variant="h6">לוחם</Typography>
          <Typography variant="h6">פלוגה 1 | מחלקה 1</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Soldier;
