import { TextField, Typography, Grid, Button } from '@mui/material';


export default function Form() {
    return (
        <Grid container sx={{ width: '500px' }}>
            <Grid item xs={12}>
                <Typography variant="h5">User Form</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Name" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Address" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="City" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="State" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Zip" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: '10px' }}>
                <Button sx={{ background: 'blue', color: 'white', width: '100%' }}>Submit</Button>
            </Grid>
        </Grid>
    )
}