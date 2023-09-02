import {useFormik} from "formik"
import { Box, Button, Grid } from "@mui/material"
import { Input, InputSelect } from "./input"
import React from "react"
import { ValidateForm } from "../utils/validateForm"


export const Form = () => {
    let initialValues={
        name:"",
        lastname:"",
        item:"services",
        email:"",
        key:""
    }


    const handleSubmit = (data) =>{
        console.log(data)
    }
    

    const Formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema:ValidateForm
    })

    return(
        <>
        <Box
        component="form"
        autoComplete="off"
        maxWidth="xl"
        onSubmit={Formik.handleSubmit}
        style={{ boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12", alignItems:"center",justifyContent:"center", textAlign:"center"}}>
            <Grid container flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                <Input id="name" label="Nombre:" type="text" changeProp={Formik.handleChange} handleError={!!Formik.errors?.name} errorMessage={Formik.errors.name}/>
                <Input id="lastname" label="Apellido:" type="text" changeProp={Formik.handleChange} handleError={!!Formik.errors?.lastname} errorMessage={Formik.errors.lastname}/>
                <InputSelect changeProp={Formik.handleChange}/>
                <Input id="email" label="Correo:" type="text" changeProp={Formik.handleChange} handleError={!!Formik.errors?.email} errorMessage={Formik.errors.email}/>
                <Input id="key" label="Clave:" type="password" changeProp={Formik.handleChange} handleError={!!Formik.errors?.key} errorMessage={Formik.errors.key}/>
            </Grid>
            <Button type="submit" variant="contained" color="secondary" sx={{marginBottom:"30px", marginTop:"30px", padding:"10px 20px", width:"150px"}}>
                Ingresar
            </Button>
        </Box>
        </>
    )
}