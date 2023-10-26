import { TextField, Typography, Grid } from '@mui/material';


export default function Form() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField label="form field" />
            </Grid>
        </Grid>
    )
}