import { Box, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useCallback } from "react";
import { setBalance } from "../redux/vendingMachineSlice";

// This is a TypeScript interface to define which props the component should receive
export interface ProductProps {
  title: string;
  stock: number;
  price: number;
}

export const Product = ({ title, stock, price }: ProductProps) => {
  return (
    <Box sx={{ border: 1, borderColor: "white" }}>
      <Box textAlign="center" sx={{ fontSize: 21, fontWeight: 800 }}>
        {title}
      </Box>
      <Box textAlign="center">Stock: {stock}</Box>
      <Box textAlign="center">Price: {price}€</Box>
    </Box>
  );
};

export const Products = ({ products }: { products: ProductProps[] }) => {
  const credit = useSelector(
    (state: RootState) => state.vendingMachine.balance
  );
  const dispatch = useDispatch();
  const handleOnClick = useCallback(
    (balance: number) => {
      dispatch(setBalance(balance));
    },
    [dispatch]
  );
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
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
        {products.map((product, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Product
              title={product.title}
              stock={product.stock}
              price={product.price}
            />
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "primary.dark",
                color: "white",
              }}
              onClick={() => handleOnClick(credit - product.price)}
            >
              Buy
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
