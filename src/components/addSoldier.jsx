import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Box,
} from "@mui/material";

import React, { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../contextProvider";

const AddSoldier = () => {
  const { allSoldiers, setAllSoldiers } = useContext(Context);
  const {
    formState: { isDirty },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = async (bodyData, event) => {
    event.preventDefault();
    console.log(bodyData);
    let body = {
      Last_Name: " ",
      Role: "מפתח תוכנה",
      Rank: 'קא"ב',
      City: "ראשון לציון",
      City_Location: "מרכז",
      Is_Officer: true,
      Age: 22,
    };
    await setAllSoldiers([...allSoldiers, { ...bodyData, ...body }]);
    alert("החייל נוסף בהצלחה");
  };

  let nameRef = register("First_Name", {
    required: true,
  });

  let idRef = register("Mispar_Ishi", {
    required: true,
  });

  let userNameRef = register("User_Name", {
    required: true,
    pattern: /\d{0,3}[A-Z]+[a-z]+/,
  });

  let genderRef = register("Gender", {
    required: true,
  });

  useEffect(() => {}, []);
  return (
    <Container component="main">
      <FormControl
        fullWidth
        component="form"
        onSubmit={handleSubmit(onSubForm)}
      >
        <TextField
          label="שם החייל"
          variant="standard"
          sx={{ marginTop: 2 }}
          name="First_Name"
          {...nameRef}
          InputLabelProps={{
            style: {
              textAlign: "right",
              position: "absolute",
              left: "94.4%",
            },
          }}
        />
        {errors.First_Name && <div className="text-danger">הכנס שם</div>}
        <TextField
          label="מספר אישי"
          variant="standard"
          sx={{ marginTop: 2 }}
          name="Mispar_Ishi"
          {...idRef}
          InputLabelProps={{
            style: {
              textAlign: "right",
              position: "absolute",
              left: "93.7%",
            },
          }}
        />
        {errors.Mispar_Ishi && (
          <div className="text-danger">הכנס מספר אישי</div>
        )}
        <TextField
          label="שם משתמש"
          variant="standard"
          sx={{ marginTop: 2 }}
          name="User_Name"
          {...userNameRef}
          InputLabelProps={{
            style: {
              textAlign: "right",
              position: "absolute",
              left: "93%",
            },
          }}
        />
        {errors.User_Name && <div className="text-danger">הכנס שם משתמש</div>}
        <FormLabel sx={{ marginTop: 2 }}>מין</FormLabel>
        <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" row>
          <FormControlLabel
            value="נ"
            control={<Radio />}
            label="נקבה"
            name="Gender"
            {...genderRef}
          />
          <FormControlLabel
            value="ז"
            control={<Radio />}
            label="זכר"
            name="Gender"
            {...genderRef}
          />
        </RadioGroup>
        {errors.Gender && <div className="text-danger">בחר מין</div>}

        <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
          <Button
            disabled={!isDirty}
            type="submit"
            variant="contained"
            sx={{
              width: 180,
              font: "Poppins-Regular",
              fontSize: "14pt",
              borderRadius: "12px",
            }}
          >
            הוספה
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};

export default AddSoldier;
