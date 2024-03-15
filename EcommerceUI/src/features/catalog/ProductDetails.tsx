import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography,Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { product } from "../../app/models/product";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function ProductDetails(){
    const {id} = useParams();
    const [product,setProduct] = useState<product|null>(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        id && agent.Catalog.details(parseInt(id))
        .then(response=>setProduct(response))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false));
    },[id])

    if(loading) return <LoadingComponent message="Loading Details..."/>
    if(!product) return <h3>Product not found!!</h3>
    return(
        <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <Button component={Link} to='/catalog' sx={{color:`primary.main`}} size="small">Back</Button>
                <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider/>
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
            </Grid>
        </Grid>
    )
}