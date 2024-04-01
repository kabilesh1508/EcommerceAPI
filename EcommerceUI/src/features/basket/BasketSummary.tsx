import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useStoreContext } from "../../app/context/StoreContext";


export default function BasketSummary() {
    const {basket} = useStoreContext();
    const subTotal = basket?.items.reduce((sum,item)=> sum + (item.quantity * item.price),0)??0;
    const deliveryFee = subTotal>=7000 ? 0: 100;
    const total = subTotal+deliveryFee; 
   
    return (
        <TableContainer component={Paper} variant={'outlined'}>
            <Table aria-label="simple table">

                <TableBody>

                    <TableRow >
                        <TableCell colSpan={2}>subtotal</TableCell>
                        <TableCell align="right">₹{subTotal}</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell colSpan={2}>Delivery Fee</TableCell>
                        <TableCell align="right">₹{deliveryFee}</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">₹{total}</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell>
                            <span style={{fontStyle:'italic'}}>**Free Delivery for Purchase above 7000</span>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}