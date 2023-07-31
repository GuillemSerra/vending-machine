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

export const slotsPayload = [
  {
    id: "db1409bd-0367-4fc3-b8f9-0e9690d12dc9",
    quantity: 5,
    coordinates: [1, 1],
    product: {
      id: "a18daba6-6ca2-409e-b2d5-8cf967aa2ba6",
      name: "Twix Bar",
      price: "1.50",
    },
  },
  {
    id: "24a03ed8-05fb-49f3-9eb9-4c048b62d479",
    quantity: 10,
    coordinates: [2, 1],
    product: {
      id: "04557844-5ef6-429a-b4ce-1eb6fa9b8ec4",
      name: "Sandwitch",
      price: "4.00",
    },
  },
  {
    id: "366b7ff8-6c28-4286-abdc-6269311d6229",
    quantity: 8,
    coordinates: [3, 1],
    product: {
      id: "c02f0389-6709-4881-ae24-7b39854dd736",
      name: "M&Ms",
      price: "1.50",
    },
  },
  {
    id: "d3501c6a-a885-45fd-ac45-50156a316174",
    quantity: 6,
    coordinates: [1, 2],
    product: {
      id: "ecbfbc42-3280-4a87-9cf4-acca89a92e0b",
      name: "Snickers Bar",
      price: "1.50",
    },
  },
  {
    id: "fd50e791-211a-4bfa-9561-ca68b837372a",
    quantity: 7,
    coordinates: [2, 2],
    product: {
      id: "6114b75b-a40a-48e9-b0be-9a19f28855d3",
      name: "Chips",
      price: "2.00",
    },
  },
  {
    id: "aa859fa1-bfd7-4d80-b7f5-cacec6adf9d8",
    quantity: 4,
    coordinates: [3, 2],
    product: {
      id: "f99e16b3-f7ee-4f6a-beab-1e4f90fc4e8f",
      name: "KitKat",
      price: "2.00",
    },
  },
  {
    id: "8422f794-fcc8-4e8d-8e55-8c737842f5ab",
    quantity: 9,
    coordinates: [1, 3],
    product: {
      id: "50f4c938-9ee9-4ff6-b29d-5688c8f2f526",
      name: "Water 33cl",
      price: "1.00",
    },
  },
  {
    id: "5edd517b-7ec4-44b3-b490-844dbfb0e681",
    quantity: 10,
    coordinates: [2, 3],
    product: {
      id: "0897dde7-51db-4e1e-89bf-e09b9843cc68",
      name: "Water 1L",
      price: "2.00",
    },
  },
  {
    id: "d3ce8d5c-34d3-4840-9b26-d2d20c60dd92",
    quantity: 6,
    coordinates: [3, 3],
    product: {
      id: "00ce4f0c-ca91-482e-9f9e-7dd7e762f156",
      name: "Beer 33cl",
      price: "2.00",
    },
  },
];

export const api = {
  getProducts: async () =>
    axios.get(process.env.REACT_APP_BACKEND_URL + "/slots/"),
  login: async (username: string) =>
    axios.post(process.env.REACT_APP_BACKEND_URL + "/login/", {
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