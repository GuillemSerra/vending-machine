import { Navigate } from "react-router";
import { Products } from "../components/Product";
import { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Wallet } from "../components/Wallet";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { SlotProps, api } from "../api";

export const VendingMachine: FC = () => {
  const [products, setProducts] = useState<SlotProps[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const username = useSelector(
    (state: RootState) => state.vendingMachine.username
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.getProducts();
        const products: SlotProps[] = response.data;
        setProducts(products);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // if no user, redirect to login
  if (!username) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // user is logged in
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Products
          products={products.map((product, _) => ({
            title: product.product.name,
            stock: product.quantity,
            price: parseFloat(product.product.price),
          }))}
        />
      </Grid>
      <Grid item xs={6}>
        <Wallet />
      </Grid>
    </Grid>
  );
};
