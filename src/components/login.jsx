import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { Context } from "../contextProvider";
import { apiLogin } from "../apiRequest";

const Login = ({setNav}) => {
  const { setUser } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubForm = (bodyData, event) => {
    event.preventDefault();
    doApiForm(bodyData);
  };

  const doApiForm = async (bodyData) => {
    try {
      let resp = await apiLogin(bodyData);
      if (resp) {
        localStorage.setItem("user", JSON.stringify(bodyData));
        setUser(resp.data);
        alert("התחברת בהצלחה(:");
        setNav("home");
      }
    } catch (err) {
      alert("שם משתמש או הסיסמה שגויים");
    }
  };

  let userNameRef = register("userName", {
    required: true,
    pattern: /\d{0,3}[A-Z]+[a-z]+/,
  });

  let passwordRef = register("password", { required: true, minLength: 6 });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubForm)} sx={{ mt: 1 }}>
          <TextField
            type="text"
            margin="normal"
            required
            fullWidth
            id="user"
            label="UserName"
            name="user"
            autoFocus
            {...userNameRef}
          />
          {errors.userName && (
            <div className="text-danger">Enter valid userName</div>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            {...passwordRef}
          />
          {errors.password && (
            <div className="text-danger">Enter valid password</div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
