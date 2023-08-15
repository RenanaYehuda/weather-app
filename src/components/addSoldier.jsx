import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import React from "react";
import { useForm } from "react-hook-form";

const AddSoldier = () => {
  const { handleSubmit } = useForm();
  const onSubForm = () => {};

  return (
    <Container component="main">
      <FormControl  fullWidth component="form" onSubmit={handleSubmit(onSubForm)}  sx={{textAlign:"start"}}>
        <TextField label="שם החייל" variant="standard"  sx={{}}/>
        <TextField label="מספר אישי" variant="standard" />
        <TextField label="שם משתמש" variant="standard" />
        <FormLabel>מין</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          row
          //   value={value}
          //   onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="נקבה" />
          <FormControlLabel value="male" control={<Radio />} label="זכר" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default AddSoldier;
