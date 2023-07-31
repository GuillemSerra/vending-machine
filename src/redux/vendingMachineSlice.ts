import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VendingMachineState {
  username: string | null;
  token: string | null;
  balance: number;
}

const initialState: VendingMachineState = {
  username: null,
  token: null,
  balance: 0,
};

export const vendingMachineSlice = createSlice({
  name: "vendingMachine",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUsername: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
  },
});

export const { setToken, setUsername, setBalance } =
  vendingMachineSlice.actions;

export default vendingMachineSlice.reducer;
