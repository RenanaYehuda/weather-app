import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Context } from "../../contextProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const { lastSearch, setLastSearch, setCity } = useContext(Context);
  const nav = useNavigate();

  const moveToMain = (_city) => {
    setCity(_city);
    nav("/home");
  };

  const cancelChoice = () => {
    setCity("Jerusalem");
  };

  const deleteChoice = (_index) => {
    setLastSearch(lastSearch.splice(_index + 1));
    setCity("Jerusalem");
  };

  useEffect(() => {}, [lastSearch]);

  return (
    <Container component="main">
      <Typography align="center" variant="h3" gutterBottom>
        היסטוריית החיפושים
      </Typography>
      {lastSearch.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: "lightgrey",
                "& th": {
                  fontSize: "1.20rem",
                },
              }}
            >
              <TableRow>
                <TableCell align="center">עיר</TableCell>
                <TableCell align="center">מדינה</TableCell>
                <TableCell align="center">יבשת</TableCell>
                <TableCell align="center">פעולות</TableCell>
              </TableRow>
            </TableHead>
            {lastSearch && (
              <TableBody>
                {lastSearch.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      {row.city}
                    </TableCell>
                    <TableCell align="center">{row.country}</TableCell>
                    <TableCell align="center">{row.continent}</TableCell>
                    <TableCell align="center">
                      {i == 0 ? (
                        <Button
                          variant="text"
                          sx={{ color: "black" }}
                          onClick={() => {
                            cancelChoice();
                          }}
                        >
                          ביטול בחירה
                        </Button>
                      ) : (
                        <Button
                          variant="text"
                          color="error"
                          onClick={() => {
                            moveToMain(row.city);
                          }}
                        >
                          הפוך לראשי
                        </Button>
                      )}
                      |
                      <Button
                        variant="text"
                        color="error"
                        onClick={() => {
                          deleteChoice(i);
                        }}
                      >
                        מחיקה מההיסטוריה
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      ) : (
        <Typography
          sx={{
            font: "Poppins-Bold",
            fontSize: "40pt",
            textAlign: "center",
            marginTop: "200px",
          }}
        >
          No have last search
        </Typography>
      )}
    </Container>
  );
};

export default History;
