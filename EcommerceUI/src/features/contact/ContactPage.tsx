import { Button, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
    const { data, title } = useAppSelector(state=>state.counter);
    const dispatch = useAppDispatch();
    return (
        <Grid container spacing={2}>
            <Grid item md={12}>
                <Typography align="center" variant="h2">
                    {title}
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Typography align="center" color='secondary.main' variant="h2">
                    {data}
                </Typography>
            </Grid>
            <Grid item md={4}>
                <Button onClick={()=>dispatch(decrement(1))} fullWidth color='error' variant='contained'>-</Button>
            </Grid>
            <Grid item md={4}>
                <Button onClick={()=>dispatch(increment(1))} fullWidth color='success' variant="contained">+</Button>
            </Grid>
            <Grid item md={4}>
                <Button onClick={()=>dispatch(increment(5))} fullWidth variant="contained">+5</Button>
            </Grid>
        </Grid>

    )
}