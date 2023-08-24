import { Box, Grid } from "@mui/material"
import { Input } from "./input"

export const Form = () => {
    return(
        <>
        <Box
        component="form"
        autoComplete="off"
        maxWidth="xl"
        style={{ boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12"}}>

            <Grid container flexDirection="column" justifyContent="center" alignItems="center">
                <Input id="name-and-surname" label="Nombre y apellido:" type="text" variant="outlined"/>
            </Grid>
            
        </Box>
        </>
    )
}