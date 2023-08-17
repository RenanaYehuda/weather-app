import React, { useEffect } from "react";
import Soldier from "./soldier";
import { useContext } from "react";
import { Context } from "../contextProvider";
import {
  Box,
  Container,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { groupBy } from "core-js/actual/array/group-by";
import { useState } from "react";
import GroupTitle from "./groupTitle";

const Soldiers = () => {
  const options = ["City", "City_Location", "Gender", "Role_Rank"];
  const [groups, setGroups] = useState([]);
  const { allSoldiers, setAllSoldiers } = useContext(Context);
  const [selected, setSelected] = useState("City");

  const handleChange = (event) => {
    event.preventDefault();
    let groupByCategoryMap = [];
    let val = event.target.value;
    setSelected(val);
    if (val === options[0]) {
      groupByCategoryMap = allSoldiers.groupBy((soldier) => soldier.City);
    } else if (val === options[1]) {
      groupByCategoryMap = allSoldiers.groupBy(
        (soldier) => soldier.City_Location
      );
    } else if (val === options[2]) {
      groupByCategoryMap = allSoldiers.groupBy((soldier) => soldier.Gender);
    } else {
      groupByCategoryMap = allSoldiers.groupBy((soldier) => (soldier.Role && soldier.Rank));
    }
    setGroups(Object.entries(groupByCategoryMap));
    console.log(groups);
  };

  useEffect(() => {
    setAllSoldiers(
      allSoldiers.sort((a, b) =>
        (a.First_Name + a.Last_Name).localeCompare(b.First_Name + b.Last_Name)
      )
    );

    const select = async () => {
      await setSelected("City");
    };

    select();
  }, []);

  useEffect(() => {}, [groups]);
  return (
    <Box component="main">
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 150, direction: "rtl" }}
      >
        <InputLabel>סדר לפי:</InputLabel>
        <Select
          value={selected}
          onChange={handleChange}
          label="Age"
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root.Mui-selected": {
                  backgroundColor: "white",
                  fontWeight: "bold",
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "white",
                },
                "& .MuiMenuItem-root:hover": {
                  fontWeight: "bold",
                },
              },
            },
          }}
        >
          <MenuItem value={options[0]}>עיר</MenuItem>
          <MenuItem value={options[1]}>מיקום עיר בארץ</MenuItem>
          <MenuItem value={options[2]}>מין</MenuItem>
          <MenuItem value={options[3]}>תפקיד + דרגה</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {groups.map((item, i) => (
          <React.Fragment key={i}>
            <React.Fragment>
              <GroupTitle group={item[0]} />
              {item[1].map((soldier, index) => (
                <Soldier key={index} soldier={soldier} />
              ))}
            </React.Fragment>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Soldiers;
// allSoldiers.map((item, i) => <Soldier key={i} soldier={item} />)
