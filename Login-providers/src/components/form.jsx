import { Box, Button, Grid } from "@mui/material"
import { Input, InputSelect } from "./input"

export const Form = () => {
    return(
        <>
        <Box
        component="form"
        autoComplete="off"
        maxWidth="xl"
        style={{ boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12"}}>

            <Grid container flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                <Input id="name-and-surname" label="Nombre y apellido:" type="text" variant="outlined"/>
                <Input id="adress" label="Domicilio:" type="text" variant="outlined"/>
                <InputSelect/>
                <Input id="user" label="Usuario:" type="text" variant="outlined"/>
                <Input id="password" label="Clave:" type="password" variant="outlined"/>
            </Grid>
            <Button type="submit" variant="contained" color="secondary" sx={{marginBottom:"30px", marginTop:"30px", padding:"10px 20px"}}>
                Ingresar
            </Button>
            
        </Box>
        </>
    )
}