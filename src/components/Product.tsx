import { Box, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setBalance } from "../redux/vendingMachineSlice";
import { api } from "../api";

// This is a TypeScript interface to define which props the component should receive
export interface ProductProps {
  title: string;
  stock: number;
  price: number;
  slot_id: string;
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
  const token = useSelector((state: RootState) => state.vendingMachine.token);
  const dispatch = useDispatch();
  const handleBuyProduct = async (slot_id: string) => {
    const response = await api.buyProduct(token as string, slot_id);
    dispatch(setBalance(response.data.balance));
  };

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
              slot_id={product.slot_id}
            />
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "primary.dark",
                color: "white",
              }}
              onClick={() => handleBuyProduct(product.slot_id)}
            >
              Buy
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
