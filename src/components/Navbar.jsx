import { AppBar, Toolbar } from "@mui/material"
import { Link } from "./link"
import HomeLogo from "../assets/logo.svg"
import { ResponsiveNavbar } from "./ResponsiveNavbar"

export const Navbar =() =>{


  return(
    <AppBar position="static" color="primary">
    
    <Toolbar sx={{justifyContent:"space-between", maxWidth:"1600px", display: {md:"flex", xs:"none"}}}>
      <img src={HomeLogo} alt="" height="100px" width="150px" />
    <Link link={"/"} labelLink={"Inicio"}/>
    <Link link={"/services"} labelLink={"Servicios"}/>
    <Link link={"/contact"} labelLink={"Contactanos"}/>
    </Toolbar>
    <ResponsiveNavbar/>
  </AppBar>
  )
}