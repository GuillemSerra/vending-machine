import { Box, Button, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setBalance } from "../redux/vendingMachineSlice";

const colors = ["Black", "Yellow", "Pink", "Orange", "Blue", "Green", "Purple"];

export const Wallet = () => {
  const credit = useSelector(
    (state: RootState) => state.vendingMachine.balance
  );
  const username = useSelector(
    (state: RootState) => state.vendingMachine.username
  );
  const dispatch = useDispatch();
  const handleOnClick = useCallback((balance: number) => {
    dispatch(setBalance(balance));
  }, []);

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
              onClick={() => handleOnClick(credit + 5)}
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
              onClick={() => handleOnClick(credit + 10)}
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
              onClick={() => handleOnClick(credit + 15)}
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
              onClick={() => handleOnClick(credit + 20)}
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
          onClick={() => handleOnClick(0)}
        >
          Refund Money
        </Button>
      </Box>
    </Box>
  );
};
