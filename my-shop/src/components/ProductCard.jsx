import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActions,
    ButtonGroup,
    Grid,
    IconButton, Box
} from '@mui/material';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../features/cartSlice';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.cart);
    const cartItem = items.find((i) => i.id === product.id);
    const quantityInCart = cartItem === undefined ? 0 : cartItem.quantity;

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <Card sx={{display: 'flex', flexDirection: 'column', height: 1.0, width: 345, boxShadow: 3}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://cataas.com/cat?test=${product.id}`}
                    alt={product.title}
                />
                <CardContent sx={{flexGrow: 2}}>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body2">{product.description}</Typography>
                    <Typography sx={{mt: 1}} variant="h5">{product.price}$</Typography>
                </CardContent>
                <CardActions>
                    { quantityInCart !== 0
                        ? (
                            <Box sx={{width: 1.0, display: 'flex', gap: 5}}>
                                <IconButton sx={{flexGrow: 1, borderRadius: 0}}  onClick={() => dispatch(addToCart(product))}><AddOutlinedIcon/></IconButton>
                                <Typography sx={{margin: 'auto'}} variant="p">{quantityInCart}</Typography>
                                <IconButton sx={{flexGrow: 1, borderRadius: 0}} onClick={() => dispatch(removeFromCart(product))}><RemoveOutlinedIcon/></IconButton>
                            </Box>
                            )
                        : (
                            <Button
                                variant="contained"
                                sx={{width: 1.0}}
                                onClick={() => dispatch(addToCart(product))}
                            >
                                Добавить в корзину
                            </Button>
                        )
                    }
                </CardActions>
            </Card>
        </motion.div>
    );
};
export default ProductCard;