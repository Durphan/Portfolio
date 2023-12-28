import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import HomeLogo from "./assets/logo.svg"
import { ThemeConfig } from '../../config/theme.config'
import { Link } from './components/link'

export const Home = () =>{
    return(
        <>
        <ThemeConfig>

        <AppBar position="static" color="primary">
          <Toolbar sx={{justifyContent:"space-between", maxWidth:"1600px"}}>
            <img src={HomeLogo} alt="" height="100px" width="150px" />
          <Link link={""} labelLink={"Inicio"}/>
          <Link link={""} labelLink={"Servicios"}/>
          <Link link={""} labelLink={"Contactanos"}/>

          </Toolbar>
        </AppBar>
        
        </ThemeConfig>
        </>
    )
}