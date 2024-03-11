import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { product } from "../../app/models/product";

interface Props {
    product: product;
}
export default function ProductCard({ product }: Props) {
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
                    sx={{ height: 140,backgroundSize:'contain',bgcolor:'primary.light' }}
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
                    <Button size="small">ADD TO CART</Button>
                    <Button size="small">VIEW</Button>
                </CardActions>
            </Card>
        </>
    )
}