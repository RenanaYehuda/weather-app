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
import axios from "axios";

import React, { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../contextProvider";
const API_URL = "http://localhost:3001";

const AddSoldier = () => {
  const { user, allSoldiers, setAllSoldiers } = useContext(Context);
  const {
    formState: {isDirty, isValid},
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = (bodyData, event) => {
    event.preventDefault();
    console.log(bodyData);
    apiAddSoldier(bodyData);
  };

  const apiAddSoldier = async (bodyData) => {
    let body = {
      Last_Name: " ",
      Role: "מפתח תוכנה",
      Rank: 'קא"ב',
      City: "ראשון לציון",
      City_Location: "מרכז",
      Is_Officer: true,
      Age: 22,
    };
    let url = API_URL + "/updateMadorSoldiers";

    try {
      let resp = await axios({
        url: url,
        method: "put",
        data: { newSoldiers: [...allSoldiers, { ...bodyData, ...body }] },
        headers: {
          user_name: user ? user.User_Name : null,
          user_mispar_ishi: user ? user.Mispar_Ishi : null,
        },
      });
      if (resp.status == 200) {
        console.log(resp.data);
        console.log("succses");
        setAllSoldiers([...allSoldiers, { ...bodyData, ...body }]);
        console.log(allSoldiers);
      }
    } catch (err) {
      console.log(err.response);
      alert("Add soldier failed , service down");
    }
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

  useEffect(() => {
   
  }, []);
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
        />
        {errors.First_Name && <div className="text-danger">הכנס שם</div>}
        <TextField
          label="מספר אישי"
          variant="standard"
          sx={{ marginTop: 2 }}
          name="Mispar_Ishi"
          {...idRef}
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
          disabled={!isDirty || !isValid}
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "red",
              border: "#808080",
              width: 180,
              font: "Poppins-Regular",
              fontSize: "14pt",
              border: "2px #808080 solid",
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
