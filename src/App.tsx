import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
import { Drawer, LinearProgress, Grid, Badge } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import Cart from './Cart/Cart';
// Styles
import { Wrapper, StyledButton } from './App.styles';
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

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  console.log(data);

  const totalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAdd = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // Is the item already added to the cart ?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if(isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        ))
      }

      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }]

    })
  };

  const handleRemove = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {

        if(item.id === id) {
          if(item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }

      }, [] as CartItemType[])
    ))
  };

  if(isLoading) return <LinearProgress/>;
  if(error) return <div>Something went wrong...</div>;
  

  return (
    <Wrapper>

      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAdd} 
          removeFromCart={handleRemove} 
        />
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={totalItems(cartItems)} color='error'>
          <AddShoppingCart />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} md={4} sm={6}>
            <Item item={item} handleAdd={handleAdd} />
          </Grid>
        ))}
      </Grid>

    </Wrapper>
  );
}

export default App;
