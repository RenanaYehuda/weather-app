import { Button, Container, Stack } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../contextProvider";
import { apiUpdateSoldiers } from "../../apiRequest";

const ButtonsMador = (props) => {
  const { user } = useContext(Context);

  const {
    setOpen,
    setChooseSoldiers,
    allSoldiers,
    chooseSoldiers,
    setAllSoldiers,
  } = props;

  const chooseAll = () => {
    setChooseSoldiers([...allSoldiers]);
  };
  const clearAll = () => {
    setChooseSoldiers([]);
  };
  const removeAll = () => {
    const userInList = chooseSoldiers.filter(
      (soldier) =>
        soldier.User_Name != user.User_Name &&
        soldier.Mispar_Ishi != user.Mispar_Ishi
    );
    const result = allSoldiers.filter(
      (soldier) => !userInList.includes(soldier)
    );
    setChooseSoldiers([]);
    setAllSoldiers(result);
  };

  const saveAll = async () => {
    try {
      let data = { newSoldiers: [...allSoldiers] };
      let resp = await apiUpdateSoldiers(user, data);
      if (resp) {
        setChooseSoldiers([]);
        setOpen(false);
      }
    } catch (err) {}
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
          onClick={() => clearAll()}
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
