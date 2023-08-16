import React from "react";
import Soldier from "./soldier";
import { useContext } from "react";
import { Context } from "../contextProvider";
import { Box, Container, FormControl, Select,InputLabel, MenuItem} from "@mui/material";

const Soldiers = () => {
  const { allSoldiers } = useContext(Context);
  return (
    <Box component="main">
      <FormControl  variant="standard" sx={{ m: 1, minWidth: 150, direction:"rtl" }}>
        <InputLabel>סדר לפי:</InputLabel>
        <Select
          //   value={age}
          //   onChange={handleChange}
          label="Age"
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root.Mui-selected": {
                    backgroundColor: "white",
                    fontWeight:"bold"
                },
                "& .MuiMenuItem-root:hover": {
                  fontWeight:"bold"
                },
             
              }
            }
          }}
        >
          <MenuItem value={10} >עיר</MenuItem>
          <MenuItem value={20}>מיקום עיר בארץ</MenuItem>
          <MenuItem value={30}>מין</MenuItem>
          <MenuItem value={30}>תפקיד + דרגה</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {allSoldiers.map((item, i) => (
          <Soldier key={i} soldier={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Soldiers;
