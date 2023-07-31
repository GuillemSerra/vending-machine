import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { RootState } from "../app/store";
import { setBalance, setUsername } from "../redux/vendingMachineSlice";
import { api } from "../api";

export const Login: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const username = useSelector(
    (state: RootState) => state.vendingMachine.username
  );
  const dispatch = useDispatch();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username: string = data.get("username") as string;
    try {
      const response: any = await api.login(username);
      dispatch(setUsername(response.data.full_name));
      dispatch(setBalance(parseFloat(response.data.balance)));
    } catch (error: any) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }
  // if user, no need to login again, redirect to vending machine home
  if (username) {
    return <Navigate to="/vending-machine" />;
  }

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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
