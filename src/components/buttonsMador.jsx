import { Button, Container, Stack } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../contextProvider";
import axios from "axios";
const API_URL = "http://localhost:3001";

const ButtonsMador = () => {
  const {
    setChooseSoldiers,
    allSoldiers,
    chooseSoldiers,
    user,
    setAllSoldiers,
    setOpen,
  } = useContext(Context);

  const chooseAll = () => {
    setChooseSoldiers([...allSoldiers]);
    alert("כל החיילים נבחרו")
    console.log(chooseSoldiers);
  };
  const removeAll = () => {
    
    console.log(chooseSoldiers);
    console.log(allSoldiers);
    if (chooseSoldiers.length == allSoldiers.length) {
      setChooseSoldiers([]);
      setAllSoldiers([]);
      alert("מחקת חיילים מסומנים בהצלחה")
    } else {
      const result = allSoldiers.filter(
        (soldier) => !chooseSoldiers.includes(soldier)
      );
      setChooseSoldiers(result);
      setAllSoldiers(result);
      alert("מחקת חיילים מסומנים בהצלחה")
    }
  };

  const saveAll = async () => {
    let url = API_URL + "/updateMadorSoldiers";

    try {
      let resp = await axios({
        url: url,
        method: "put",
        data: { newSoldiers: [...allSoldiers] },
        headers: {
          user_name: user ? user.User_Name : null,
          user_mispar_ishi: user ? user.Mispar_Ishi : null,
        },
      });
      if (resp.status == 200) {
        alert("הנתונים נשמרו בהצלחה");
        setAllSoldiers(chooseSoldiers);
        setChooseSoldiers([]);
        setOpen(false);
        console.log("succses");
      }
    } catch (err) {
      console.log(err.response);
      alert("הוספת החייל נכשלה");
    }
  };

  return (
    <Container
      component="main"
      sx={{
        maxHeight: 200,
        overflow: "auto",
        marginBottom: "12px",
        justifyContent: "flex-end",
        display: "flex",
      }}
    >
      <Stack direction="row">
        <Button
          variant="contained"
          sx={{
            marginRight: "12px",
            width: 180,
            font: "Poppins-Regular",
            fontSize: "14pt",
            borderRadius: "12px",
          }}
          onClick={() => saveAll()}
        >
          שמירה
        </Button>
        <Button
          variant="contained"
          sx={{
            marginRight: "12px",
            width: 180,
            font: "Poppins-Regular",
            fontSize: "14pt",
            borderRadius: "12px",
          }}
          onClick={() => chooseAll()}
        >
          בחר הכל
        </Button>
        <Button
          variant="contained"
          sx={{
            marginRight: "12px",
            width: 180,
            font: "Poppins-Regular",
            fontSize: "14pt",
            borderRadius: "12px",
          }}
          onClick={() => removeAll()}
        >
          נקה הכל
        </Button>
        <Button
          variant="contained"
          sx={{
            marginRight: "12px",
            width: 150,
            font: "Poppins-Regular",
            fontSize: "12pt",
            borderRadius: "12px",
          }}
          onClick={() => removeAll()}
        >
          מחיקת מסומנים
        </Button>
      </Stack>
    </Container>
  );
};

export default ButtonsMador;
