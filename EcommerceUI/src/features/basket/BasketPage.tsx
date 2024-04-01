import { Table, TableContainer, Typography, TableBody, TableCell, TableRow, TableHead, Paper, Box, Grid, Button } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../app/context/StoreContext";
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import BasketSummary from "./BasketSummary";

export default function BasketPage() {

  const { basket, setBasket, removeItem } = useStoreContext();
  
  const [status, setStatus] = useState({
    loading: false,
    name: ''
  })

  function handleAddItem(productId: number, name: string) {
    setStatus({ loading: true, name });
    agent.Basket.add(productId)
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setStatus({ loading: false, name: '' }))
  }

  function handleRemoveItem(productId: number, quantity = 1, name: string) {
    setStatus({ loading: true, name });
    agent.Basket.delete(productId, quantity)
      .then(() => removeItem(productId, quantity))
      .catch(error => console.log(error))
      .finally(() => setStatus({ loading: false, name: '' }))
  }

  if (!basket) return <Typography variant='h3'>Your Basket is Empty</Typography>
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Subtotal</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.items.map((item) => (
            <TableRow
              key={item.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display='flex' alignItems='center'>
                  <img src={item.pictureUrl} alt={item.name} style={{ height: 80, marginRight: 30 }} />
                  <span>{item.name}</span>
                </Box>
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="center">
                <LoadingButton
                  loading={status.loading && status.name == 'Remove' + item.productId}
                  onClick={() => handleRemoveItem(item.productId,1,'Remove'+item.productId)}
                  color='error'>
                  <Remove />
                </LoadingButton>
                {item.quantity}
                <LoadingButton
                  loading={status.loading && status.name == 'Add' + item.productId}
                  onClick={() => handleAddItem(item.productId,'Add'+item.productId)}
                  color='secondary'>
                  <Add />
                </LoadingButton>
              </TableCell>
              <TableCell align="center">{item.quantity * item.price}</TableCell>
              <TableCell align="center">
                <LoadingButton
                  loading={status.loading && status.name == 'Delete' + item.productId}
                  onClick={() => handleRemoveItem(item.productId, item.quantity,'Delete' + item.productId)}
                  color="error" >
                  <Delete />
                </LoadingButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container>
      <Grid item xs={6}/>
      <Grid item xs={6}>
            <BasketSummary/>
            <Button component={Link} to='/checkout' variant="contained" size='large' fullWidth >Checkout</Button>
      </Grid>
    </Grid>
    </>
  )
}