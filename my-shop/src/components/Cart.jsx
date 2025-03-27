import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, clearCart} from '../features/cartSlice';
import {Card, CardContent, Typography, Button, List, ListItem, ListItemText, Box} from
        '@mui/material';
import ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlinedIcon  from '@mui/icons-material/DeleteOutlined';
import {motion} from 'framer-motion';

const Cart = () => {
    const dispatch = useDispatch();
    const {items, total} = useSelector((state) => state.cart);
    return (
        <Card sx={{maxWidth: '100%', margin: 2, boxShadow: 3}}>
            <CardContent>
                <Box sx={{display: "flex", gap: 2}}>
                    <Typography variant="h6">Корзина</Typography>
                    <ShoppingCartOutlinedIcon />
                </Box>
                <List>
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <ListItem>
                                <ListItemText
                                    primary={item.title}
                                    secondary={`${item.quantity} x ${item.price}$`}
                                />
                                <Button onClick={() =>
                                    dispatch(removeFromCart(item))}>Удалить</Button>
                            </ListItem>
                        </motion.div>
                    ))}
                </List>
                <Typography variant="h6">Общая стоимость: {total}$</Typography>
                <Button onClick={() => dispatch(clearCart())} variant="contained"
                        color="error" sx={{mt: 2}} endIcon={<DeleteOutlinedIcon />}>
                    Очистить корзину
                </Button>
            </CardContent>
        </Card>
    );
};
export default Cart;