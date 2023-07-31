import { Box, Button, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setBalance } from "../redux/vendingMachineSlice";
import { api } from "../api";

const colors = ["Black", "Yellow", "Pink", "Orange", "Blue", "Green", "Purple"];

export const Wallet = () => {
  const credit = useSelector(
    (state: RootState) => state.vendingMachine.balance
  );
  const username = useSelector(
    (state: RootState) => state.vendingMachine.username
  );
  const token = useSelector((state: RootState) => state.vendingMachine.token);
  const dispatch = useDispatch();
  const handleAddBalance = async (balance: number) => {
    const response = await api.addBalance(token as string, balance);
    dispatch(setBalance(response.data.balance));
  };
  const handleRefundBalance = async () => {
    const response = await api.refundBalance(token as string);
    dispatch(setBalance(0));
  };

  return (
    <Box
      sx={{
        backgroundColor: "green",
        padding: 2,
        mt: 1,
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "blue",
          padding: 2,
          mt: 1,
          borderRadius: 4,
        }}
      >
        {username}
      </Box>
      <Box
        sx={{
          backgroundColor: "red",
          padding: 2,
          mt: 1,
          borderRadius: 4,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
                color: "white",
              }}
              onClick={() => handleAddBalance(5)}
            >
              {5}e
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
                color: "white",
              }}
              onClick={() => handleAddBalance(10)}
            >
              {10}e
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
                color: "white",
              }}
              onClick={() => handleAddBalance(15)}
            >
              {15}e
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
                color: "white",
              }}
              onClick={() => handleAddBalance(20)}
            >
              {20}e
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "pink",
          padding: 2,
          mt: 1,
          borderRadius: 4,
        }}
      >
        <Button
          variant="outlined"
          sx={{ backgroundColor: "orange", color: "white" }}
        >
          Balance: {credit}e
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "yellow",
          padding: 2,
          mt: 1,
          borderRadius: 4,
        }}
      >
        <Button
          variant="outlined"
          sx={{ backgroundColor: "purple", color: "white" }}
          onClick={() => handleRefundBalance()}
        >
          Refund Money
        </Button>
      </Box>
    </Box>
  );
};
