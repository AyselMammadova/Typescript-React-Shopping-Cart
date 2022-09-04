import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import CartItem from './CartItem/CartItem';
import { Drawer, LinearProgress, Grid, Badge } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
// Styles
import { Wrapper } from './App.styles';
// Types 
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  title: string;
  price: number;
  amount: number;
};


const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();



const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  console.log(data);

  const totalItems = () => null;

  const handleAdd = (clickedItem: CartItemType) => null;

  const handleRemove = () => null;

  if(isLoading) return <LinearProgress/>;
  if(error) return <div>Something went wrong...</div>;
  

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} md={4} sm={6}>
            <CartItem item={item} handleAdd={handleAdd} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
