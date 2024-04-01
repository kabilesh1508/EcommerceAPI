import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";

interface Props {
    product: product;
}
export default function ProductCard({ product }: Props) {
    const [loading,setLoading] = useState(false);
    const {setBasket} = useStoreContext();

    function handleAddItem(productId:number)
    {
        setLoading(true);
        debugger;
        agent.Basket.add(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))
    }
    return (
        <>
            
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor:'secondary.main'}}>{product.name.charAt(0).toUpperCase()}</Avatar>
                    }
                    title={product.name}
                    titleTypographyProps={{
                        sx:{fontWeight:'bold',color:'primary.main'}
                    }}
                />
                <CardMedia
                    sx={{ height: 140,backgroundSize:'contain',bgcolor:'#eaeaea' }}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom color='secondary' variant="h5" component="div">
                        ₹{product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand}/{product.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <LoadingButton loading={loading} onClick={()=>handleAddItem(product.id)} size="small">ADD TO CART</LoadingButton>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small">VIEW</Button>
                </CardActions>
            </Card>
        </>
    )
}