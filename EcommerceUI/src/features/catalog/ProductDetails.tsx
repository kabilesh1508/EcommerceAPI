import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { removeBasketItemAsync, addBasketItemAsync } from "../basket/basketSlice";
import { fetchProductAsync, productSelectors } from "./catalogSlice";

export default function ProductDetails() {
    const dispatch = useAppDispatch();
    const {basket,status} = useAppSelector(state => state.basket);
    const { id } = useParams();
    const product = useAppSelector(state => productSelectors.selectById(state,parseInt(id!)));
    const [quantity, setQuantity] = useState(0);
    const {status : productStatus } = useAppSelector(state=>state.catalog);
    const item = basket?.items.find(i => i.productId === product?.id);


    useEffect(() => {
        if (item) setQuantity(item.quantity);
        if(!product) dispatch(fetchProductAsync(parseInt(id!)))
    }, [id,item,dispatch,product])

    function handleInputChange(event:any){
        if(event.target.value>=0){
            setQuantity(parseInt(event.target.value));
        }
    }
    function handleUpdateCart(){
        //if item is not there or the item quantity is increased
        if(!item || quantity > item.quantity){
            const updatedQuantity = item? quantity - item.quantity : quantity;
            dispatch(addBasketItemAsync({productId:product?.id!,quantity:updatedQuantity}))
        }
        //if item is removed
        else{
            const updatedQuantity = item.quantity - quantity;
            dispatch(removeBasketItemAsync({productId:product?.id!,quantity:updatedQuantity}))
        }
    }

    if (productStatus.includes("pending")) return <LoadingComponent message="Loading Details..." />
    if (!product) return <h3>Product not found!!</h3>
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <Button component={Link} to='/catalog' sx={{ color: `primary.main` }} size="small">Back</Button>
                <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider />
                <Typography variant="h4" color='secondary'>₹{product.price}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            type='number'
                            fullWidth
                            value={quantity}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton
                            disabled={item?.quantity===quantity || !item && quantity==0}
                            loading={status.includes('Item')}
                            sx={{height:'55px'}}
                            color ='primary'
                            size ='large'
                            variant="contained"
                            fullWidth   
                            onClick={handleUpdateCart}   
                        >
                            {item ? 'update Quantity': 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

