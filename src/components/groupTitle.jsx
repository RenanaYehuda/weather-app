import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const GroupTitle = ({ group }) => {
  const [nameGroup, setNameGroup] = useState("");
  const checkName = () => {
    if (group == "ז") {
      setNameGroup("זכר");
    } else if (group == "נ") {
      setNameGroup("נקבה");
    } else {
      setNameGroup(group);
    }
  };

  useEffect(() => {
    checkName()
  });
  return (
    <Container>
      <Typography variant="h4">{nameGroup}</Typography>
      <br />
    </Container>
  );
};

export default GroupTitle;
