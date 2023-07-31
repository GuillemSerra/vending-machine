import axios from "axios";

export interface UserProps {
  full_name: string;
  balance: number;
}

export interface SlotProps {
  id: string;
  quantity: number;
  coordinates: number[];
  product: {
    id: string;
    name: string;
    price: string;
  };
}

export const api = {
  getProducts: async () =>
    axios.get(process.env.REACT_APP_BACKEND_URL + "/slots/"),
  login: async (username: string) =>
    axios.post(process.env.REACT_APP_BACKEND_URL + "/login/", {
      username: username,
    }),
  addBalance: async (username: string, amount: number) =>
    axios.post(process.env.REACT_APP_BACKEND_URL + "/balance/add/", {
      username: username,
      amount: amount,
    }),
  refundBalance: async (username: string) =>
    axios.post(process.env.REACT_APP_BACKEND_URL + "/balance/refund/", {
      username: username,
    }),
  simulate: (data: any): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  },
};
